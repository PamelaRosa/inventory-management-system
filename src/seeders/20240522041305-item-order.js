'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items_orders', [
      {
        order_id: 16,
        product_id: 16,
        product: 'Product One',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        order_id: 17,
        product_id: 17,
        product: 'Product Two',
        quantity: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        order_id: 18,
        product_id: 18,
        product: 'Product Three',
        quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        order_id: 19,
        product_id: 19,
        product: 'Product Four',
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        order_id: 20,
        product_id: 20,
        product: 'Product Five',
        quantity: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items_orders', null, {});
  }
};
