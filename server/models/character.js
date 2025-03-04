const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
// import DB ^

class Character extends Model { }

Character.init(
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
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mana: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Character",
    }
  );

  Character.belongsTo(User, { foreignKey: 'userId' });
  Character.belongsTo(Race, { foreignKey: 'raceId' });
  Character.belongsTo(Class, { foreignKey: 'classId' });

  module.exports = Character;