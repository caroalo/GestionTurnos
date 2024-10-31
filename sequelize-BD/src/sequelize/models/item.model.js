const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('profesional', {
        dni: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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

module.exports = (sequelize) => {
    sequelize.define('cliente', {
        dni: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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


module.exports = (sequelize) => {
    sequelize.define('turno', {
        idTurno: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            type: DataTypes.VARCHAR,
            allowNull: false,
            foreinkey: true, 
        },
    });
}
