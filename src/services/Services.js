const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters(){
    return dataSource[this.model].findAll();
  }

  async getRegister(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRegister(newRegister) {
    return dataSource[this.model].create(newRegister);
  }

  async updateRegister(updatedData, id) {
    const updatedRegisterList = dataSource[this.model].update(updatedData, {
      where: { id: id }
    });

    if( updatedRegisterList[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;