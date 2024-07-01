const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller {

  constructor() {
    super(userServices);
  }

  async getSuppliers(req, res) {
    const { userId } = req.params;
    try {
      const listSuppliers = await userServices.getSuppliers(Number(userId));
      return res.status(200).json(listSuppliers);
    }
    catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = UserController;