const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize-client');

class Level extends Model {}

Level.init(
  {
    // les attributs de notre model
    // pas besoin de préciser l'attribut id, Sequelize le fait tout seul
    // pas besoin de createdAt et updatedAt non plus
    name: DataTypes.Text,
    level: DataTypes.Integer,
    description: DataTypes.Text,

    // une autre façon de définir un attribut qui permet de préciser des options
    date: {
      type: DataTypes.Date,
      allowNull: false,
    },
    color: {
      type: DataTypes.String, // on précise le type de données
      allowNull: false, // on précise que l'attribut ne peut pas être null
      unique: true, // valeur de l'attribut doit être unique
      values: [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'purple',
        'pink',
        'brown',
        'grey',
        'black',
      ], // les valeurs possibles
      default: 'grey', // valeur par défaut
    },
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
