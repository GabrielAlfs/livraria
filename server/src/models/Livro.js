'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {}
  Livro.init({
    titulo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    codigo: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    autor: {
      type: DataTypes.STRING
    },
    editora: {
      type: DataTypes.STRING
    },
    assunto: {
      type: DataTypes.TEXT
    },
    quantidade: {
      allowNull: false,
      min: 0,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Livro'
  });
  return Livro;
};