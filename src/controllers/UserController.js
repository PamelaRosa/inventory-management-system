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

      if (listSuppliers.length === 0) {
        return res.status(404).json({ message: 'Nenhum fornecedor encontrado.' });
      }
      return res.status(200).json(listSuppliers);
    }
    catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = UserController;