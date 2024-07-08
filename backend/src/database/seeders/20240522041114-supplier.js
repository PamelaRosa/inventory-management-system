'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suppliers', [
      {
        cnpj: '12345678000100',
        company: 'Supplier Company 1',
        email: 'supplier1@example.com',
        contact: 'John Doe',
        address: '123 Supplier St',
        city: 'Supplier City',
        state: 'Supplier State',
        country: 'Supplier Country',
        postal_code: '12345',
        status: true,
        user_id: 1,       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cnpj: '12345678000101',
        company: 'Supplier Company 2',
        email: 'supplier2@example.com',
        contact: 'Jane Smith',
        address: '456 Supplier St',
        city: 'Supplier City',
        state: 'Supplier State',
        country: 'Supplier Country',
        postal_code: '54321',
        status: true,
        user_id: 2,      
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suppliers', null, {});
  }
};
