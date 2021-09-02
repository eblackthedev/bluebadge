const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:4dcfdd579ccd43a78e44935f84527e55@localhost:5432/dadjokes")
module.exports = sequelize;
