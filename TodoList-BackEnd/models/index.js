// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const UserModel = require('./user')(sequelize, Sequelize);
const TaskModel = require('./task')(sequelize, Sequelize);
const CategoryModel = require('./category')(sequelize, Sequelize);
const TaskCategoryModel = require('./taskCategory')(sequelize, Sequelize);
// Importe outros modelos aqui

const db = {
  sequelize, // Adicione isto para exportar a instância sequelize
  Sequelize,
  User: UserModel,
  Task: TaskModel,
  Category: CategoryModel,
  TaskCategory: TaskCategoryModel,
  // Exporte outros modelos aqui
};

module.exports = db;
