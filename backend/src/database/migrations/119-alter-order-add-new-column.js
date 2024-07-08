'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Renomear a coluna 'oldColumnName' para 'newColumnName'
    await queryInterface.renameColumn('orders', 'user_name', 'client');

    // Adicionar a nova coluna 'newColumn' à tabela 'products'
    await queryInterface.addColumn('orders', 'client_email', {
      type: Sequelize.STRING,
      allowNull: true, // ou false, dependendo da sua necessidade
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverter a adição da nova coluna
    await queryInterface.removeColumn('orders', 'client_email');

    // Reverter a renomeação da coluna
    await queryInterface.renameColumn('orders', 'client', 'user_name');
  }
};
