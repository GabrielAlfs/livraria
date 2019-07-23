'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Aluno extends Model {}
    Aluno.init({
        nome: {
            allowNull: false,
            type: DataTypes.STRING
        },
        matricula: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Aluno'
    });
    Aluno.associate = models => {
        Aluno.belongsTo(models.Curso, {
            foreignKey: 'cursoId', as: 'curso'
        });
    };
    return Aluno;
};