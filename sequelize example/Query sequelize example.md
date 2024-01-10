# Exemple de requête Sequelize

## Décomposer une requête Sequelize

```javascript
User.findAll({
  attributes: ['id', 'name', 'email'], // Champs à récupérer dans la table User = SELECT id, name, email
  limit: 1, // LIMIT 1
  order: [['id', 'DESC']], // ORDER BY id DESC
  where: {
    id: 1,
  }, // WHERE id = 1
  include: [
    {
      model: User,
      as: 'friends',
      attributes: ['id', 'name', 'email'],
      through: {
        attributes: [],
      },
    },
  ], // LEFT JOIN User AS friends ON friends.id = User.id = C'est un LEFT JOIN car on veut récupérer les utilisateurs qui n'ont pas d'amis
});
```

## Décomposer une requête Sequelize avec association

```javascript
User.findAll({
  association: 'friends', // LEFT JOIN User AS friends ON friends.id = User.id => association est le nom de l'association défini dans le model User ce qui permet de faire le LEFT JOIN sur la table User sans avoir à la définir dans le include (voir exemple précédent)
  attributes: ['id', 'name', 'email'], // Champs à récupérer dans la table User = SELECT id, name, email
  limit: 1, // LIMIT 1
  order: [['id', 'DESC']], // ORDER BY id DESC
  where: {
    id: 1,
  }, // WHERE id = 1
});
```
