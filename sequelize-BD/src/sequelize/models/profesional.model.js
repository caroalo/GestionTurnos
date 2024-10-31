const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('profesional', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });//agregar atributos
}