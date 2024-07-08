const Controller = require('./Controller.js');
const OrderServices = require('../services/OrderServices.js');
const SupplierServices = require('../services/SupplierServices.js');
const ProductServices = require('../services/ProductServices.js');
const ItemsOrderServices = require('../services/ItemOrderServices.js');

const orderServices = new OrderServices();
const supplierServices = new SupplierServices();
const productServices = new ProductServices();
const itemsOrderServices = new ItemsOrderServices();

class OrderController extends Controller {
  constructor() {
    super(orderServices);
  }

  async post(req, res) {
    const newData = req.body;

    if (newData.user_id.toString() !== req.params.user_id) {
      return res.status(409).json({ message: 'O ID fornecido no corpo da requisição entra em conflito com o ID na URL.' });
    }

    try {
      var totalAmount = 0;

      // Verificar se o fornecedor existe
      const supplierRelated = await supplierServices.getOneRegister({ user_id: newData.user_id, cnpj: newData.cnpj });
      if (!supplierRelated) {
        return res.status(404).json({ message: 'Fornecedor não encontrado.' });
      }

      // Validar se há estoque suficiente para todos os itens do pedido
      for (const item of newData.items) {
        const product = await productServices.getOneRegister({ id: item.product_id });
        if (!product) {
          return res.status(404).json({ message: `Produto com ID ${item.product_id} não encontrado.` });
        }

        if(product.status === false) {
          return res.status(404).json({ message: `Produto ${product.name} está fora de estoque.`});
        }

        if (product.quantity < item.quantity) {
          return res.status(400).json({ message: `Estoque insuficiente para o produto ${product.name}. Quantidade disponível: ${product.quantity}, quantidade solicitada: ${item.quantity}.` });
        }

        let isPromotional = (product.unit_promotional_price > 0
          && product.unit_promotional_price < product.unit_price) ? true : false;
        let price = isPromotional ? product.unit_promotional_price : product.unit_price;

        totalAmount += price * item.quantity;
      }

      // Criar o pedido
      const newOrder = await this.entityService.createRegister({
        supplier: supplierRelated.company,
        order_date: new Date(),
        client: newData.client,
        client_email: newData.client_email,
        delivery_date: new Date(newData.delivery_date),
        total_amount: totalAmount,
        status: newData.status,
        cnpj: newData.cnpj,
        user_id: newData.user_id
      });

      // Criar os itens do pedido e atualizar a quantidade de produtos em estoque
      const itemsOrderPromises = newData.items.map(async (item) => {
        const product = await productServices.getOneRegister({ id: item.product_id });
        
        // Atualizar a quantidade do produto em estoque
        const newQuantity = product.quantity - item.quantity;
        await productServices.updateRegister({ quantity: newQuantity }, { id: product.id });

        return itemsOrderServices.createRegister({
          order_id: newOrder.id,
          product: product.name,
          product_id: product.id,
          quantity: item.quantity
        });
      });

      const itemsOrder = await Promise.all(itemsOrderPromises);

      return res.status(201).json({
        order: newOrder,
        itemsOrder: itemsOrder
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = OrderController;
