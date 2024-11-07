const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('confirmacion', {

        codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoincrement: true,

        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false,
            
            
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: false,
           
        }
    });
}