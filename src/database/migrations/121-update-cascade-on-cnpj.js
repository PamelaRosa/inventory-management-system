'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addConstraint('products', {
      fields: ['cnpj'],
      type: 'foreign key',
      name: 'products_cnpj_fkey', 
      references: {
        table: 'suppliers',
        field: 'cnpj'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove a constraint criada
    await queryInterface.removeConstraint('products', 'products_cnpj_fkey');
  }
};
