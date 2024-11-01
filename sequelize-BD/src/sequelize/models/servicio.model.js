const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('servicio', {

        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true, 
        },
        nombreServicio: {
            type: DataTypes.VARCHAR,
            allowNull: false,
           
        },
        dniProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreinkey: true, 
        },
        decripcion: {
            type: DataTypes.VARCHAR,
            allowNull: false,
            
        },
    });
}