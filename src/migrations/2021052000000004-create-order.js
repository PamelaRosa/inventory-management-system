'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplier: {
        type: Sequelize.STRING
      },
      order_date: {
        type: Sequelize.DATE
      },
      user_name: {
        type: Sequelize.STRING
      },
      delivery_date: {
        type: Sequelize.DATE
      },
      total_amount: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
      },
      cnpj: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'suppliers',
          key: 'cnpj'
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
    await queryInterface.dropTable('orders');
  }
};