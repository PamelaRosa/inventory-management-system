const Controller = require('./Controller.js');
const ProductServices = require('../services/ProductServices.js');
const ProductInputServices = require('../services/ProductInputServices.js');
const SupplierServices = require('../services/SupplierServices.js');
const converterIds = require('../utils/stringConverter.js');

const productServices = new ProductServices();
const productInputServices = new ProductInputServices();
const supplierServices = new SupplierServices();

class ProductController extends Controller {
  constructor() {
    super(productServices);
  }

  async post(req, res) {
    const newData = req.body;

    if (newData.user_id.toString() !== req.params.user_id) {
      return res.status(409).json({ message: 'O ID fornecido no corpo da requisição entra em conflito com o ID na URL.' });
    }

    try {
      const newProduct = await this.entityService.createRegister(newData);

      const supplierRelated = await supplierServices.getOneRegister({user_id: newProduct.user_id, cnpj: newProduct.cnpj});

      if (!supplierRelated) {
        return res.status(404).json({ message: 'Fornecedor não encontrado.' });
      }

      //Ao criar um produto será criado também seu product_input - a entrada do produto,
      // que é necessário para balanceamento com a saída do produto
      const newProductInput = await productInputServices.createRegister({
        product_id: newProduct.id,
        product: newProduct.name,
        quantity: newProduct.quantity,
        unit_price: newProduct.unit_price,
        input_date: new Date(),
        supplier: supplierRelated.company,
        cnpj: newProduct.cnpj,
        user_id: newProduct.user_id
      });

      return res.status(201).json({
        product: newProduct,
        productInput: newProductInput
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    const { ...params } = req.params;
    const updatedData = req.body;
    const where = converterIds(params);

    if (updatedData.user_id != params.user_id) {
      return res.status(409).json({ message: 'O ID fornecido no corpo da requisição entra em conflito com o ID na URL.' });
    }

    try {
      const isUpdated = await this.entityService.updateRegister(updatedData, where);
      if (!isUpdated) {
        return res.status(404).json({ message: 'Registro não encontrado ou não foi atualizado.' });
      }
      return res.status(200).json({ message: 'Atualizado com sucesso!' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ProductController;
