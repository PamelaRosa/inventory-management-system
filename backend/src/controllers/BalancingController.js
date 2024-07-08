const Controller = require('./Controller.js');
const BalancingServices = require('../services/BalancingServices.js');

const balancingServices = new BalancingServices();

class BalancingController extends Controller {

  constructor() {
    super(balancingServices);
  }
}

module.exports = BalancingController;