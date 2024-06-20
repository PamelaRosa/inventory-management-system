'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products_inputs', [
      {
        cnpj: '12345678901234',
        product: 'Product One',
        quantity: 50,
        unit_price: 10.00,
        input_date: new Date(),
        supplier: 'Supplier One',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 6
      },
      {
        cnpj: '23456789012345',
        product: 'Product Two',
        quantity: 75,
        unit_price: 20.00,
        input_date: new Date(),
        supplier: 'Supplier Two',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 7
      },
      {
        cnpj: '34567890123456',
        product: 'Product Three',
        quantity: 100,
        unit_price: 15.00,
        input_date: new Date(),
        supplier: 'Supplier Three',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 8
      },
      {
        cnpj: '45678901234567',
        product: 'Product Four',
        quantity: 25,
        unit_price: 30.00,
        input_date: new Date(),
        supplier: 'Supplier Four',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 9
      },
      {
        cnpj: '56789012345678',
        product: 'Product Five',
        quantity: 80,
        unit_price: 12.50,
        input_date: new Date(),
        supplier: 'Supplier Five',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 10
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_inputs', null, {});
  }
};
