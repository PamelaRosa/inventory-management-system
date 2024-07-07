const { ProductsOutput } = require('../database/models'); // Certifique-se de ajustar o caminho para o arquivo do modelo
const Services = require('./Services');

class ProductOutputServices extends Services {
  constructor() {
    super('ProductsOutput');
  }

  async getOneRegister(where) {
    try {
      const register = await ProductsOutput.findOne({ where: { ...where } });
      return register || null;
    } catch (error) {
      console.error(`Erro ao buscar registro: ${error.message}`);
      return null;
    }
  }
}

module.exports = ProductOutputServices;