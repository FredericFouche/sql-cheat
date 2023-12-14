# sql-cheat

### Qu'est-ce qu'une base de données ?

Une base de données est un ensemble de données organisées de manière structurée. Une base de données est généralement stockée dans un système de gestion de base de données (SGBD), qui est un logiciel qui permet de stocker, organiser et récupérer des données. Les bases de données peuvent être utilisées pour stocker des informations telles que des données client, des données de vente, des informations sur les produits, des données financières et bien plus encore.

### L'organisation des bases de données

Les bases de données sont généralement organisées en tables. Une table est composée de lignes et de colonnes. Les colonnes contiennent les noms des champs et définissent le type de données qui seront stockées dans le champ. Les lignes contiennent les enregistrements ou les données pour les colonnes spécifiées.

### Les types de bases de données

Il existe plusieurs types de bases de données, mais les plus courants sont les bases de données relationnelles et les bases de données non relationnelles. Les bases de données relationnelles stockent les données dans des tables qui sont liées les unes aux autres par des clés. Les bases de données non relationnelles stockent les données dans des documents, des graphiques, des clés et des paires de valeurs ou des colonnes.

### Les langages de bases de données

Les bases de données sont généralement contrôlées à l'aide d'un langage de base de données. Les langages de base de données les plus courants sont SQL et NoSQL. SQL est un langage de base de données relationnelle qui est utilisé pour manipuler et récupérer des données dans des bases de données relationnelles. NoSQL est un langage de base de données non relationnel qui est utilisé pour manipuler et récupérer des données dans des bases de données non relationnelles.

---

## La conception d'une base de données

### Le Modèle Conceptuel de Données (MCD)

En MCD, on ne parle pas de base de données directement, mais d'une **_abstraction_**.

Le Modèle Conceptuel de Données (MCD) est un modèle de données qui permet de représenter les données d'une manière **_abstraite_**. Il est utilisé pour décrire les données et les relations entre les données. Il est généralement utilisé pour la conception de bases de données relationnelles.

Les éléments suivants sont utilisés pour créer un MCD:

- Dessiner nos entités.
- Répartir leurs attributs.
- Définir un ou plusieurs déterminant (ou discriminant). On parle de clé primaire uniquement quand on parle de la base de données.
- Identifier les relations entre les entités et les nommer par un verbe à l’infinitif.
- Définir les cardinalités.

### Le Modèle Logique de Données (MLD)

Le Modèle Logique de Données (MLD) sert a transcrire le MCD en un langage de base de données. Il permet de connaître les tables, les colonnes, les clés primaires et les clés étrangères qui seront utilisées dans la base de données.

---

## Les commandes de base de SQL

Ici sont listées les commandes de base de SQL. Elles sont divisées en plusieurs catégories: les commandes de manipulation des champs, les commandes de base de données, les commandes de manipulation de table, les commandes de contraintes, les commandes de requête et les commandes de requête avancées.

### SQL Commandes de manipulation des champs

- `SELECT` - permet de selectionner des données dans une base de données. Exemple: `SELECT * FROM users;`
- `UPDATE` - permet de mettre à jour des données dans une base de données. Exemple: `UPDATE users SET name = 'John' WHERE id = 1;`
- `DELETE` - permet de supprimer des données dans une base de données. Exemple: `DELETE FROM users WHERE id = 1;`
- `INSERT INTO` - permet d'insérer de nouvelles données dans une base de données. Exemple: `INSERT INTO users (name) VALUES ('John');`

### SQL Commandes de base de données

- `CREATE DATABASE` - permet de créer une nouvelle base de données. Exemple: `CREATE DATABASE my_database;`
- `ALTER DATABASE` - permet de modifier une base de données. Exemple: `ALTER DATABASE my_database RENAME TO your_database;`

### SQL Commandes de manipulation de table

- `CREATE TABLE` - permet de créer une nouvelle table. Exemple: `CREATE TABLE users (id INT, name VARCHAR(255));`
- `ALTER TABLE` - permet de modifier une table. Exemple: `ALTER TABLE users ADD email VARCHAR(255);`
- `DROP TABLE` - permet de supprimer une table. Exemple: `DROP TABLE users;`

### SQL Commandes de contraintes

- `NOT NULL` - indique que le champ ne peut pas être NULL. Exemple: `CREATE TABLE users (id INT NOT NULL, name VARCHAR(255) NOT NULL);`
- `UNIQUE` - indique que les valeurs de champ doivent être uniques. Exemple: `CREATE TABLE users (id INT UNIQUE, name VARCHAR(255) UNIQUE);`
- `PRIMARY KEY` - indique que le champ est une clé primaire. Exemple: `CREATE TABLE users (id INT NOT NULL PRIMARY KEY, name VARCHAR(255));`
- `FOREIGN KEY` - indique que le champ est une clé étrangère. Exemple: `CREATE TABLE orders (id INT NOT NULL, product_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES products(id));`

### SQL Commandes de requête

- `WHERE` - permet de spécifier des critères de sélection. Exemple: `SELECT * FROM users WHERE country = 'France';`
- `LIKE` - permet de rechercher un motif dans une colonne. Exemple: `SELECT * FROM users WHERE name LIKE 'A%';`
- `ILIKE` - permet de rechercher un motif dans une colonne sans tenir compte de la casse. Exemple: `SELECT * FROM users WHERE name ILIKE 'a%';`
- `ORDER BY` - permet de trier les résultats par ordre croissant ou décroissant. Exemple: `SELECT * FROM users ORDER BY name ASC;`
- `ASC` - permet de trier les résultats par ordre croissant. Exemple: `SELECT * FROM users ORDER BY name ASC;`
- `DESC` - permet de trier les résultats par ordre décroissant. Exemple: `SELECT * FROM users ORDER BY name DESC;`

### SQL Commandes de requête avancées

- `GROUP BY` - permet de regrouper les résultats par une ou plusieurs colonnes. Exemple: `SELECT COUNT(*) FROM users GROUP BY country;`
- `HAVING` - permet de spécifier des critères de sélection pour les groupes. Exemple: `SELECT COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 10;`
- `LIMIT` - permet de limiter le nombre de résultats retournés. Exemple: `SELECT * FROM users LIMIT 10;`
- `OFFSET` - permet de spécifier le nombre de lignes à ignorer avant de commencer à renvoyer les résultats. Exemple: `SELECT * FROM users LIMIT 10 OFFSET 10;`

---

## Initialiser une base de données avec PostgreSQL dans Node.js

### Installation de PostgreSQL

- Télécharger et installer PostgreSQL: https://www.postgresql.org/download/
- créer un utilisateur et un mot de passe pour PostgreSQL

### Initialiser une base de données avec PostgreSQL dans Node.js

- Installer le module `pg` avec npm: `npm install pg`
- Créer un fichier `database.js` et y ajouter le code suivant:

```js
const { Client } = require('pg');
```

- Créer une nouvelle instance de client:

```js
const client = new Client({
  user: 'VOTRE_UTILISATEUR',
  host: 'VOTRE_HOST',
  database: 'VOTRE_DATABASE',
  password: 'VOTRE_MOT_DE_PASSE',
  port: LE_PORT_DE_VOTRE_DATABASE,
});
```

- Connecter le client à la base de données:

```js
client.connect();
```

- Exécuter une requête SQL:

```js
client.query('SELECT * FROM "users";', (err, res) => {
  console.log(err, res);
  client.end();
});
```

- Async et await:

```js
async function getUsers() {
  try {
    const res = await client.query('SELECT * FROM "users";');
    // Ce que vous voulez faire avec vos données
    console.log(res.rows);
  } catch (err) {
    console.log(err.stack);
  }
}
```

**_Précisions:_**

- **Async** et **await** seront utilisés pour créer des fonctions **asynchrones**. Les fonctions asynchrones sont des fonctions qui peuvent être suspendues et reprises plus tard. Elles permettent d'attendre des opérations asynchrones comme les requêtes de bdd qui peuvent prendre du temps.

- **Await** permet d'attendre la résolution d'une **promesse**. Une **promesse** est un objet qui représente la résolution ou le rejet éventuel d'une opération asynchrone. **Await** ne peut être utilisé que dans les fonctions asynchrones.
  Il est courant d'utiliser **await** devant une **promesse** qui renvoie le résultat d'une requête de base de données.

- La structure **try et catch**, permet de gérer les erreurs. Le code à l'intérieur du bloc try sera exécuté, si une erreur se produit, le bloc catch sera exécuté. Le try et catch **doit** être utilisé avec les fonctions asynchrones.

**_Les commandes node pour faire des requêtes SQL:_**

- query() - permet d'exécuter une requête SQL. Exemple: `client.query('SELECT * FROM "users";');`
- connect() - permet de connecter le client à la base de données. Exemple: `client.connect();`
- end() - permet de terminer la connexion avec la base de données. Exemple: `client.end();`

---

## Gestion des utilisateurs

### Créer un utilisateur sur une base de données PostgreSQL

- Pour créer l'utilisateur `trombi` sur la base de données `exemple` avec le mot de passe `1234`, exécuter la commande suivante:

```sql
CREATE USER trombi WITH PASSWORD '1234';
```

- Création de la DB associée à l'utilisateur `trombi`:

```sql
CREATE DATABASE exemple OWNER trombi;
```

- Pour supprimer la DB `exemple`:

```sql
DROP DATABASE exemple;
```

- Pour supprimer l'utilisateur `trombi`:

```sql
DROP USER trombi;
```

### Pour se connecter à la base de données `exemple` avec l'utilisateur `trombi`:

```sql
psql -d exemple -U trombi
```
