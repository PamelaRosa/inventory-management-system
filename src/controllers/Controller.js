class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }
  // GET all
  async getAll(req, res) {
    try {
      const registerList = await this.entityService.getAllRegisters();
      return res.status(200).json(registerList);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // GET one
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const register = await this.entityService.getRegister(Number(id));
      return res.status(200).json(register);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // POST 
  async post(req, res) {
    const newData = req.body;

    try {
      const newRegister = await this.entityService.createRegister(newData);
      return res.status(200).json(newRegister);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // PUT 
  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;

    try {
      const isUpdated = await this.entityService.updateRegister(updatedData, Number(id));
      if(!isUpdated) {
        return res.status(400).json({ message: 'Registro não foi atualizado'});
      }
      return res.status(200).json({ message: 'Atualizado com sucesso!' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // DELETE 
  async delete(req, res) {
    const { id } = req.params;

    try {
      await this.entityService.deleteRegister(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;