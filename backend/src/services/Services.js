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
      const register = await dataSource[this.model].findOne({ where: {...where} });
      if (!register) {
        throw new Error('Registro não encontrado.');
      }
      return register;
    } catch (error) {
      throw new Error(`Erro ao buscar registro: ${error.message}`);
    }
  }
  
  async getPaginatedRegisters(where, page, pageSize, order) {
    try {
      const limit = pageSize;
      const offset = (page - 1) * pageSize;

      const { count, rows } = await dataSource[this.model].findAndCountAll({
        where: { ...where },
        limit: limit,
        offset: offset,
        order: [['createdAt', order]]
      });

      const totalPages = Math.ceil(count / pageSize);

      return {
        data: rows,
        currentPage: page,
        totalPages: totalPages,
        totalData: count,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      };
    } catch (error) {
      throw new Error(`Erro ao buscar registros paginados: ${error.message}`);
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
      const result = await dataSource[this.model].destroy({ where: { id: id } });
      if (result === 0) {
        throw new Error('Registro não encontrado ou não foi deletado.');
      }
      return { success: true, deletedCount: result };
    } catch (error) {
      throw new Error(`Erro ao deletar registro: ${error.message}`);
    }
  }
}

module.exports = Services;

