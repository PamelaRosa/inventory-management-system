'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        input_id: 11,
        name: 'Product One',
        brand: 'Brand A',
        category: 'Category X',
        description: 'Description for Product One',
        quantity: 50,
        unit_price: 10.00,
        unit_promotional_price: 9.00,
        status: 'Available',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 6
      },
      {
        input_id: 12,
        name: 'Product Two',
        brand: 'Brand B',
        category: 'Category Y',
        description: 'Description for Product Two',
        quantity: 75,
        unit_price: 20.00,
        unit_promotional_price: 18.00,
        status: 'Available',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 7
      },
      {
        input_id: 13,
        name: 'Product Three',
        brand: 'Brand C',
        category: 'Category Z',
        description: 'Description for Product Three',
        quantity: 100,
        unit_price: 15.00,
        unit_promotional_price: 13.50,
        status: 'Out of Stock',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 8
      },
      {
        input_id: 14,
        name: 'Product Four',
        brand: 'Brand D',
        category: 'Category X',
        description: 'Description for Product Four',
        quantity: 25,
        unit_price: 30.00,
        unit_promotional_price: 27.00,
        status: 'Available',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 9
      },
      {
        input_id: 15,
        name: 'Product Five',
        brand: 'Brand E',
        category: 'Category Y',
        description: 'Description for Product Five',
        quantity: 80,
        unit_price: 12.50,
        unit_promotional_price: 11.25,
        status: 'Available',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id:  10
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
