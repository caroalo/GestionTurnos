const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('turno', {
        idTurno: {
            type: DataTypes.INTEGER,
            
            
        },
        dniProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            foreinkey: true,
        },
        dniCliente: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            foreinkey: true,
        },
        idTurno: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreinkey: true, 
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreinkey: true, 
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
             
        },
    });
}