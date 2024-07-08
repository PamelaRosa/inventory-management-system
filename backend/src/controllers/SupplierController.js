const Controller = require('./Controller.js');
const SupplierServices = require('../services/SupplierServices.js');

const supplierServices = new SupplierServices();

class SupplierController extends Controller {

  constructor() {
    super(supplierServices);
  }
}

module.exports = SupplierController;