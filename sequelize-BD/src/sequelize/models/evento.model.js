const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('evento', {

        
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
           
        },
        horaInicio: {
            type: DataTypes.TIME,
            allowNull: false,
            
        },
        horaFin: {
            type: DataTypes.TIME,
            allowNull: false,
            
        },
    });
}