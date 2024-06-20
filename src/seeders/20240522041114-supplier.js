'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suppliers', [
      {
        cnpj: '12345678901234',
        company: 'Supplier One',
        email: 'contact@supplierone.com',
        contact: '123-456-7890',
        address: '123 Supplier St',
        city: 'Supplier City',
        state: 'SC',
        country: 'Supplier Country',
        postal_code: '12345',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 6
      },
      {
        cnpj: '23456789012345',
        company: 'Supplier Two',
        email: 'contact@suppliertwo.com',
        contact: '234-567-8901',
        address: '456 Supplier Ave',
        city: 'Supplier City',
        state: 'SC',
        country: 'Supplier Country',
        postal_code: '23456',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 7
      },
      {
        cnpj: '34567890123456',
        company: 'Supplier Three',
        email: 'contact@supplierthree.com',
        contact: '345-678-9012',
        address: '789 Supplier Blvd',
        city: 'Supplier City',
        state: 'SC',
        country: 'Supplier Country',
        postal_code: '34567',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 8
      },
      {
        cnpj: '45678901234567',
        company: 'Supplier Four',
        email: 'contact@supplierfour.com',
        contact: '456-789-0123',
        address: '101 Supplier Ln',
        city: 'Supplier City',
        state: 'SC',
        country: 'Supplier Country',
        postal_code: '45678',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 9
      },
      {
        cnpj: '56789012345678',
        company: 'Supplier Five',
        email: 'contact@supplierfive.com',
        contact: '567-890-1234',
        address: '202 Supplier Rd',
        city: 'Supplier City',
        state: 'SC',
        country: 'Supplier Country',
        postal_code: '56789',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 10
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suppliers', null, {});
  }
};
