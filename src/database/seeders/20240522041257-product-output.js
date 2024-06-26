'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products_outputs', [
      {
        product: 'Product 1',
        quantity: 20,
        promotion: true,
        output_date: new Date(),
        product_id: 1,
        user_id: 1,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product: 'Product 2',
        quantity: 30,
        promotion: false,
        output_date: new Date(),
        product_id: 2,
        user_id: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_outputs', null, {});
  }
};
