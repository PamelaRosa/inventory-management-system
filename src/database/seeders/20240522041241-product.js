'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Product 1',
        brand: 'Brand 1',
        category: 'Category 1',
        description: 'Description of Product 1',
        quantity: 100,
        unit_price: 50.00,
        unit_promotional_price: 45.00,
        status: true,
        category_id: 1, // ID da categoria correspondente
        user_id: 1, // ID do usuário correspondente        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Product 2',
        brand: 'Brand 2',
        category: 'Category 2',
        description: 'Description of Product 2',
        quantity: 150,
        unit_price: 75.00,
        unit_promotional_price: 70.00,
        status: true,
        category_id: 2, 
        user_id: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Product 3',
        brand: 'Brand 2',
        category: 'Category 1',
        description: 'Description of Product 3',
        quantity: 290,
        unit_price: 190.00,
        unit_promotional_price: 120.00,
        status: false,
        category_id: 2, 
        user_id: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
