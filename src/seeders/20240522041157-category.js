'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Furniture',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Books',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Toys',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
