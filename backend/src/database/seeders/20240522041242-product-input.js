'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products_inputs', [
      {
        product: 'Product 1',
        quantity: 50,
        unit_price: 40.00,
        input_date: new Date(),
        supplier: 'Supplier Company 1',
        cnpj: '12345678000100',
        product_id: 1,
        user_id: 1, // ID do usuário correspondente        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product: 'Product 2',
        quantity: 75,
        unit_price: 60.00,
        input_date: new Date(),
        supplier: 'Supplier Company 2',
        cnpj: '12345678000101',
        product_id: 2,
        user_id: 2, // ID do usuário correspondente        
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_inputs', null, {});
  }
};
