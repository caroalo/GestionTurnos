function applyExtraSetup(sequelize) {
    const { profesional, cliente, evento, servicio, turno } = sequelize.models;
  
    profesional.hasMany(servicio);
  
    // Configurar las relaciones many-to-many usando 'through' y especificando foreign keys
    profesional.belongsToMany(turno, { 
      through: 'IdTurno',
      foreignKey: 'profesionalId', // Clave foránea de profesional en la tabla intermedia
      otherKey: 'turnoId'          // Clave foránea de turno en la tabla intermedia
    });
  
    cliente.belongsToMany(turno, { 
      through: 'IdTurno',
      foreignKey: 'clienteId',     // Clave foránea de cliente en la tabla intermedia
      otherKey: 'turnoId'
    });
  
    evento.belongsToMany(turno, { 
      through: 'IdTurno',
      foreignKey: 'eventoId',      // Clave foránea de evento en la tabla intermedia
      otherKey: 'turnoId'
    });
  }
  
  module.exports = { applyExtraSetup };
  