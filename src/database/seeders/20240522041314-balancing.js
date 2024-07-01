'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('balancings', [
      {
        most_sold: 'Product 1',
        total_sales_promotional: 500.00,
        total_sales: 1000.00,
        investment: 300.00,
        revenue: 700.00,
        profit: 400.00,
        start_date: new Date(),
        end_date: new Date(),
        input_id: 1,
        output_id: 1,
        user_id: 1,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        most_sold: 'Product 2',
        total_sales_promotional: 700.00,
        total_sales: 1200.00,
        investment: 400.00,
        revenue: 800.00,
        profit: 400.00,
        start_date: new Date(),
        end_date: new Date(),
        input_id: 2,
        output_id: 2,
        user_id: 2,        
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('balancings', null, {});
  }
};
