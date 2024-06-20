'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('balancings', [
      {
        input_id: 11,
        output_id: 11,
        most_sold: 'Product One',
        total_sales_promotional: 90.00,
        total_sales: 100.00,
        investment: 500.00,
        revenue: 600.00,
        profit: 100.00,
        start_date: new Date(),
        end_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 6
      },
      {
        input_id: 12,
        output_id: 12,
        most_sold: 'Product Two',
        total_sales_promotional: 180.00,
        total_sales: 200.00,
        investment: 1000.00,
        revenue: 1200.00,
        profit: 200.00,
        start_date: new Date(),
        end_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 7
      },
      {
        input_id: 13,
        output_id: 13,
        most_sold: 'Product Three',
        total_sales_promotional: 135.00,
        total_sales: 150.00,
        investment: 750.00,
        revenue: 900.00,
        profit: 150.00,
        start_date: new Date(),
        end_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 8
      },
      {
        input_id: 14,
        output_id: 14,
        most_sold: 'Product Four',
        total_sales_promotional: 270.00,
        total_sales: 300.00,
        investment: 1500.00,
        revenue: 1800.00,
        profit: 300.00,
        start_date: new Date(),
        end_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 9
      },
      {
        input_id: 15,
        output_id: 15,
        most_sold: 'Product Five',
        total_sales_promotional: 112.50,
        total_sales: 125.00,
        investment: 625.00,
        revenue: 750.00,
        profit: 125.00,
        start_date: new Date(),
        end_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 10
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('balancings', null, {});
  }
};
