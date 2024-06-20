'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products_outputs', [
      {
        product_id: 16,
        product: 'Product One',
        quantity: 10,
        promotion: 1,
        output_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 6
      },
      {
        product_id: 17,
        product: 'Product Two',
        quantity: 20,
        promotion: 0,
        output_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 7
      },
      {
        product_id: 18,
        product: 'Product Three',
        quantity: 15,
        promotion: 1,
        output_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 8
      },
      {
        product_id: 19,
        product: 'Product Four',
        quantity: 5,
        promotion: 0,
        output_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 9
      },
      {
        product_id: 20,
        product: 'Product Five',
        quantity: 30,
        promotion: 1,
        output_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 10
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_outputs', null, {});
  }
};
