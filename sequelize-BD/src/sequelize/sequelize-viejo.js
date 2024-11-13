// src/sequelize.js
const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logQueryParameters: true,
  benchmark: true
});

sequelize.authenticate()
  .then(() => console.log('Database connection established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;

