const Sequelize = require('sequelize')
const instancia = require('../banco_dados/index')

const colunas = {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: true
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('Jogos', 'Mangá'),
        allowNull: true
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('produto', colunas, opcoes)