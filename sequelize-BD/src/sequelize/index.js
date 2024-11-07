const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite',
  logQueryParameters: true,
  benchmark: true
});

const modelDefiners = [
  require('./models/profesional.model'),
  require('./models/cliente.model'),
  require('./models/turno.model'),
  require('./models/servicio.model'),
  require('./models/evento.model'),
  require('./models/horario.model'),
  require('./models/confirmacion.model'),
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;
