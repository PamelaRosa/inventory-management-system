const Controller = require('./Controller.js');
const OrderServices = require('../services/OrderServices.js');

const orderServices = new OrderServices();

class OrderController extends Controller {

  constructor() {
    super(orderServices);
  }
}

module.exports = OrderController;