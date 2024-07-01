'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('balancings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      most_sold: {
        type: Sequelize.STRING
      },
      total_sales_promotional: {
        type: Sequelize.DECIMAL
      },
      total_sales: {
        type: Sequelize.DECIMAL
      },
      investment: {
        type: Sequelize.DECIMAL
      },
      revenue: {
        type: Sequelize.DECIMAL
      },
      profit: {
        type: Sequelize.DECIMAL
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      input_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products_inputs',
          key: 'id'
        },
      },
      output_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products_outputs',
          key: 'id'
        },
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('balancings');
  }
};