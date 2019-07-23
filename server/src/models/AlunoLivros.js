'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class AlunoLivros extends Model {}
    AlunoLivros.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'AlunoLivros'
    });
    AlunoLivros.associate = models => {
        AlunoLivros.belongsTo(models.Aluno, {
            foreignKey: 'alunoId'
        });
        AlunoLivros.belongsTo(models.Livro, {
            foreignKey: 'livroId'
        });
    };
    return AlunoLivros;
};