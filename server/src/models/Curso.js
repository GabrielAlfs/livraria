'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Curso extends Model {}
    Curso.init({
        nome: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Curso'
    });
    return Curso;
};