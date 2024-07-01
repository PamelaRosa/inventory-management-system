'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
        supplier: 'Supplier Company 1',
        order_date: new Date(),
        user_name: 'John Doe',
        delivery_date: new Date(),
        total_amount: 500.00,
        status: 'pending',
        user_id: 1, // ID do usuário correspondente
        cnpj: '12345678000100', // CNPJ do fornecedor correspondente        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        supplier: 'Supplier Company 2',
        order_date: new Date(),
        user_name: 'Jane Smith',
        delivery_date: new Date(),
        total_amount: 700.00,
        status: 'completed',
        user_id: 2, // ID do usuário correspondente
        cnpj: '12345678000101', // CNPJ do fornecedor correspondente        
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
