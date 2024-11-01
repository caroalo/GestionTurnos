const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('evento', {

        idEvento: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true, 
            autoIncrement: true
        },
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