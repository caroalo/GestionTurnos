const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('horario', {

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