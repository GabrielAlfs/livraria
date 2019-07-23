'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AlunoLivros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alunoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Aluno',
          key: 'id'
        }
      },
      livroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Livro',
          key: 'id'
        }
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
    return queryInterface.dropTable('AlunoLivros');
  }
};
