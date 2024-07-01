const Services = require('./Services');

class UserServices extends Services {
  constructor() {
    super('User');
  }

  async getSuppliers(id) {
    const user = await super.getRegister(id);
    const listSuppliers = await user.getSuppliers();
    return listSuppliers;
  }
}

module.exports = UserServices;