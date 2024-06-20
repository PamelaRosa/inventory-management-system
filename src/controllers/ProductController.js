const Controller = require('./Controller.js');
const ProductServices = require('../services/ProductServices.js');

const productServices = new ProductServices();

class ProductController extends Controller {

  constructor() {
    super(productServices);
  }
}

module.exports = ProductController;