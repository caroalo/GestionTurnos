const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('profesional', {
        dni: {
            type: DataTypes.INTEGER,
            
            
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        profesion: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        domicilioLaboral: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        telefonoLaboral: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        CP: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            foreinkey: true,
        },
    });
}
