// src/sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // o el dialecto que uses
  logging: false, // Desactivar el registro SQL para menos ruido
});

module.exports = sequelize;

