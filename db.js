const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:");
module.exports = sequelize;
