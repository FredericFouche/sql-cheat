const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize-client');

class Level extends Model {}

Level.init(
  {
    // les attributs de notre model
    // pas besoin de préciser l'attribut id, Sequelize le fait tout seul
    // pas besoin de createdAt et updatedAt non plus
    name: DataTypes.Text,
  },
  {
    // les options de notre model
    // L'instance de connexion à la base de données
    sequelize,
    // Nous donnons le nom de notre table
    tableName: 'level',
  }
);

module.exports = Level;
