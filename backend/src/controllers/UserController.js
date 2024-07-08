const Controller = require('./Controller.js');
const UserServices = require('../services/UserServices.js');

const userServices = new UserServices();

class UserController extends Controller {

  constructor() {
    super(userServices);
  }

  async register(req, res) {
    try {
      const data = req.body;
      if(!data.email || !data.password || !data.name) {
        return res.status(422).json({
          message: 'Dados inválidos.'
        });
      }
      const existingUser = await this.entityService.getUserByEmail(data.email);
      if (existingUser) {
        return res.status(400).json({
          message: 'Este e-mail já está cadastrado.'
        });
      }

      const user = await this.entityService.register(data);
      return res.status(200).json({
        user
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const data = req.body;
      const { id } = req.params;
      if(!id || !data.email || !data.password || !data.name) {
        return res.status(422).json({
          message: 'Dados inválidos.'
        });
      }
      const existingUser = await this.entityService.getUserByEmail(data.email);
      if (existingUser && Number(existingUser.id) !== Number(id)) {
        return res.status(400).json({
          message: 'Este e-mail já está cadastrado.'
        });
      }

      const user = await this.entityService.update(data, id);
      return res.status(200).json({
        user
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await this.entityService.login(email, password);

      if (!user) {
        return res.status(404).json({ message: 'Email ou senha inválidos.' });
      }

      return res.status(200).json({
        user
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;