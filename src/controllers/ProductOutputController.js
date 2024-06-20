const Controller = require('./Controller.js');
const ProductOutputServices = require('../services/ProductOutputServices.js');

const productOutputServices = new ProductOutputServices();

class ProductOutputController extends Controller {

  constructor() {
    super(productOutputServices);
  }
}

module.exports = ProductOutputController;