const Controller = require('./Controller.js');
const ItemOrderServices = require('../services/ItemOrderServices.js');

const itemOrderServices = new ItemOrderServices();

class itemOrderController extends Controller {

  constructor() {
    super(itemOrderServices);
  }
}

module.exports = itemOrderController;