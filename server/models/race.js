const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Race extends Model { }

Race.init(

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
        baseStats: {
            type: DataTypes.JSON,
            allowNull: false,
        },
    },
    {
        sequelize, modelName: "Race"
    }
);
