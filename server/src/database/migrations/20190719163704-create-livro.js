'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      codigo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      autor: {
        type: Sequelize.STRING
      },
      editora: {
        type: Sequelize.STRING
      },
      assunto: {
        type: Sequelize.TEXT
      },
      quantidade: {
        allowNull: false,
        min: 0,
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Livros');
  }
};