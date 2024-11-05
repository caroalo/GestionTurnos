const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
    sequelize.define('cliente', {
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
        telefono: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
    });
}



