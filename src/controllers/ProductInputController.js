const Controller = require('./Controller.js');
const ProductInputServices = require('../services/ProductInputServices.js');

const productInputServices = new ProductInputServices();

class ProductInputController extends Controller {

  constructor() {
    super(productInputServices);
  }
}

module.exports = ProductInputController;