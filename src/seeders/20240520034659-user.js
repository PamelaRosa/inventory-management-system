'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 6,
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'hashedpassword1',
        profile_photo: 'https://example.com/photos/johndoe.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:7,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'hashedpassword2',
        profile_photo: 'https://example.com/photos/janesmith.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'hashedpassword3',
        profile_photo: 'https://example.com/photos/alicejohnson.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        password: 'hashedpassword4',
        profile_photo: 'https://example.com/photos/bobbrown.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
        password: 'hashedpassword5',
        profile_photo: 'https://example.com/photos/charliedavis.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
