const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user');
const Character = require('./character');

class Class extends Model {}

Class.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        abilities: {
            type: DataTypes.JSON, 
            // Stores class-specific abilities
            allowNull: true,
        },
    },
    {
        sequelize, modelName: "Class"
    }
);

module.exports = Class;