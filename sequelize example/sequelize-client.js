const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    // permet d'ajouter le mapping createdAt et updatedAt à tout nos modeles
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = sequelize;

// ce Fichier va nous permettre de nous connecter à notre base de données. Nous allons utiliser l'ORM Sequelize pour cela. Nous allons créer une instance de Sequelize en lui passant l'URL de notre base de données. Nous allons ensuite exporter cette instance pour pouvoir l'utiliser dans nos autres fichiers.
// il instancie la connexion à la base de données en utilisant sequelize
