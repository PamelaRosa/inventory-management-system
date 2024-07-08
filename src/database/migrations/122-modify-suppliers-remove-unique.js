'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('suppliers', 'cnpj', {
      type: Sequelize.STRING,
      allowNull: true
    });
    
    await queryInterface.changeColumn('suppliers', 'company', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('suppliers', 'cnpj', {
      type: Sequelize.STRING,
      unique: true
    });
    
    await queryInterface.changeColumn('suppliers', 'company', {
      type: Sequelize.STRING,
      unique: true
    });
  }
};
