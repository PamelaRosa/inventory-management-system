'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
        user_id: 6,
        cnpj: '12345678901234',
        supplier: 'Supplier One',
        order_date: new Date(),
        user_name: 'John Doe',
        delivery_date: new Date(),
        total_amount: 100.50,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        cnpj: '23456789012345',
        supplier: 'Supplier Two',
        order_date: new Date(),
        user_name: 'Jane Smith',
        delivery_date: new Date(),
        total_amount: 200.75,
        status: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8,
        cnpj: '34567890123456',
        supplier: 'Supplier Three',
        order_date: new Date(),
        user_name: 'Alice Johnson',
        delivery_date: new Date(),
        total_amount: 150.00,
        status: 'Canceled',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 9,
        cnpj: '45678901234567',
        supplier: 'Supplier Four',
        order_date: new Date(),
        user_name: 'Bob Brown',
        delivery_date: new Date(),
        total_amount: 300.00,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 10,
        cnpj: '56789012345678',
        supplier: 'Supplier Five',
        order_date: new Date(),
        user_name: 'Charlie Davis',
        delivery_date: new Date(),
        total_amount: 400.50,
        status: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
  }
};
