'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items_orders', [
      {
        product: 'Product 1',
        quantity: 10,
        order_id: 1,
        product_id: 1,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product: 'Product 2',
        quantity: 15,
        order_id: 2,
        product_id: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items_orders', null, {});
  }
};
