const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Nome do banco de dados
  process.env.DB_USERNAME, // Nome de usuário
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST, // Host
    dialect: 'postgres'
  }
);

module.exports = sequelize;
