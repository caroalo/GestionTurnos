const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('servicio', {

        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        nombreServicio: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },
        dniProfesional: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreinkey: true, 
        },
        decripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
    });
}