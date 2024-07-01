const dataSource = require('../database/models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRegisters() {
    try {
      return await dataSource[this.model].findAll();
    } catch (error) {
      throw new Error(`Erro ao buscar todos os registros: ${error.message}`);
    }
  }

  async getRegisterById(id) {
    try {
      const register = await dataSource[this.model].findByPk(id);
      if (!register) {
        throw new Error('Registro não encontrado.');
      }
      return register;
    } catch (error) {
      throw new Error(`Erro ao buscar registro: ${error.message}`);
    }
  }

  async getOneRegister(where) {
    try {
      const register = await dataSource[this.model].findOne({ where: {...where} } );
      if (!register) {
        throw new Error('Registro não encontrado.');
      }
      return register;
    } catch (error) {
      throw new Error(`Erro ao buscar registro: ${error.message}`);
    }
  }

  async createRegister(newRegister) {
    try {
      return await dataSource[this.model].create(newRegister);
    } catch (error) {
      throw new Error(`Erro ao criar registro: ${error.message}`);
    }
  }

  async updateRegister(updatedData, where) {
    try {
      const [updatedCount] = await dataSource[this.model].update(updatedData, {
        where: { ...where }
      });
      if (updatedCount === 0) {
        throw new Error('Registro não encontrado ou não foi atualizado.');
      }
      return true;
    } catch (error) {
      throw new Error(`Erro ao atualizar registro: ${error.message}`);
    }
  }

  async deleteRegister(id) {
    try {
      const deletedCount = await dataSource[this.model].destroy({ where: { id: id } });
      if (deletedCount === 0) {
        throw new Error('Registro não encontrado ou não foi deletado.');
      }
      return deletedCount;
    } catch (error) {
      throw new Error(`Erro ao deletar registro: ${error.message}`);
    }
  }
}

module.exports = Services;
