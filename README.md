# sql-cheat

Ceci est une Cheat-sheet (anti-sèche) sur SQL. Elle contient les commandes de base de SQL, des exemples d'usage de SQL et des informations sur les bases de données.

## Sommaire

[1. Qu'est-ce qu'une base de données ?](#1-quest-ce-quune-base-de-données)

- [L'organisation des bases de données](#lorganisation-des-bases-de-données)
- [Les types de bases de données](#les-types-de-bases-de-données)
- [Les langages de bases de données](#les-langages-de-bases-de-données)

[2. La conception d'une base de données](#2-la-conception-dune-base-de-données)

- [Le Modèle Conceptuel de Données (MCD)](#le-modèle-conceptuel-de-données-mcd)
- [Le Modèle Logique de Données (MLD)](#le-modèle-logique-de-données-mld)

[3. Les notions de base](#3-les-notions-de-base)

- [Les clés primaires](#les-clés-primaires)
- [Les clés étrangères](#les-clés-étrangères)
- [Les cardinalités](#les-cardinalités)
- [ORM](#orm)

[4. Le Modèle dans le MVC](#4-le-modèle-dans-le-mvc)

- [Le data mapper](#le-data-mapper)
- [L'active record](#lactive-record)

[5. Les commandes de base de SQL](#5-les-commandes-de-base-de-sql)

- [SQL Commandes de manipulation des lignes](#sql-commandes-de-manipulation-des-lignes)
- [SQL Commandes de base de données](#sql-commandes-de-base-de-données)
- [SQL Commandes de manipulation de table](#sql-commandes-de-manipulation-de-table)
- [SQL Commandes de contraintes](#sql-commandes-de-contraintes)
- [SQL Commandes de requête](#sql-commandes-de-requête)
- [SQL Commandes de requête avancées](#sql-commandes-de-requête-avancées)
- [Les types de données en SQL](#les-types-de-données-en-sql)

[6. Initialiser une base de données avec PostgreSQL dans Node.js](#6-initialiser-une-base-de-données-avec-postgresql-dans-nodejs)

- [Installation de PostgreSQL](#installation-de-postgresql)
- [Initialiser une base de données avec PostgreSQL dans Node.js](#initialiser-une-base-de-données-avec-postgresql-dans-nodejs)

[7. Quelques exemples d'usage de SQL](#7-quelques-exemples-dusage-de-sql)

- [Gestion des utilisateurs](#gestion-des-utilisateurs)
  - [Créer un utilisateur sur une base de données PostgreSQL](#créer-un-utilisateur-sur-une-base-de-données-postgresql)
  - [Pour se connecter à la base de données `exemple` avec l'utilisateur `trombi`:](#pour-se-connecter-à-la-base-de-données-exemple-avec-lutilisateur-trombi)
  - [Créer une table](#créer-une-table)
  - [Insérer des données dans la table users](#insérer-des-données-dans-la-table-users)
  - [Sélectionner notre utilisateur](#sélectionner-notre-utilisateur)
  - [IF EXISTS/IF NOT EXISTS](#if-existsif-not-exists)
  - [POSTGRESQL SERIAL PRIMARY KEY](#postgresql-serial-primary-key)
  - [REFERENCES](#references)

[8. Les Outils](#8-les-outils)

- [TablePlus](#tableplus)
- [pgAdmin](#pgadmin)

## 1. Qu'est-ce qu'une base de données ?

Une base de données est un ensemble de données organisées de manière structurée. Une base de données est généralement stockée dans un système de gestion de base de données (SGBD), qui est un logiciel qui permet de stocker, organiser et récupérer des données. Les bases de données peuvent être utilisées pour stocker des informations telles que des données client, des données de vente, des informations sur les produits, des données financières et bien plus encore.

</br >

### L'organisation des bases de données

Les bases de données sont généralement organisées en tables. Une table est composée de lignes et de colonnes. Les colonnes contiennent les noms des champs et définissent le type de données qui seront stockées dans le champ. Les lignes contiennent les enregistrements ou les données pour les colonnes spécifiées.
</br >
</br >
</br >
**Schéma d'une base de données:**

<ul>
  <li>SGBD
    <ul>
      <li>db 1
        <ul>
          <li>table 1
            <ul>
              <li>column 1</li>
              <li>column 2</li>
              <li>column 3</li>
            </ul>
          </li>
          <li>table 2
            <ul>
              <li>column 1</li>
              <li>column 2</li>
              <li>column 3</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>db 2 
        <ul>
          <li>table 1
            <ul>
              <li>column 1</li>
              <li>column 2</li>
              <li>column 3</li>
            </ul>
          </li>
          <li>table 2
            <ul>
              <li>column 1</li>
              <li>column 2</li>
              <li>column 3</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

</br >
</br >

### Les types de bases de données

Il existe plusieurs types de bases de données, mais les plus courants sont les bases de données relationnelles et les bases de données non relationnelles. Les bases de données relationnelles stockent les données dans des tables qui sont liées les unes aux autres par des clés. Les bases de données non relationnelles stockent les données dans des documents, des graphiques, des clés et des paires de valeurs ou des colonnes.

</br >

### Les langages de bases de données

Les bases de données sont généralement contrôlées à l'aide d'un langage de base de données. Les langages de base de données les plus courants sont SQL et NoSQL. SQL est un langage de base de données relationnelle qui est utilisé pour manipuler et récupérer des données dans des bases de données relationnelles. NoSQL est un langage de base de données non relationnel qui est utilisé pour manipuler et récupérer des données dans des bases de données non relationnelles.

</br >

---

</br >

## 2. La conception d'une base de données

### Le Modèle Conceptuel de Données (MCD)

En MCD, on ne parle pas de base de données directement, mais d'une **_abstraction_**.

Le Modèle Conceptuel de Données (MCD) est un modèle de données qui permet de représenter les données d'une manière **_abstraite_**. Il est utilisé pour décrire les données et les relations entre les données. Il est généralement utilisé pour la conception de bases de données relationnelles.

Les éléments suivants sont utilisés pour créer un MCD:

- Dessiner nos entités.
- Répartir leurs attributs.
- Définir un ou plusieurs déterminant (ou discriminant). On parle de clé primaire uniquement quand on parle de la base de données.
- Identifier les relations entre les entités et les nommer par un verbe à l’infinitif.
- Définir les cardinalités.

</br >

### Le Modèle Logique de Données (MLD)

Le Modèle Logique de Données (MLD) sert a transcrire le MCD en un langage de base de données. Il permet de connaître les tables, les colonnes, les clés primaires et les clés étrangères qui seront utilisées dans la base de données.

</br >

---

</br >

## 3. Les notions de base

Il existe des notions de base qui sont utilisées dans les bases de données relationnelles. Ces notions sont les suivantes:

### Les clés primaires

Les clés primaires sont un champ ou plusieurs qui caractérisent de manière unique chaque enregistrement d'une table. Elles sont utilisées pour "discriminer" et donc identifier les données spécifiques.
Généralement, on utilise un champ qui s'appelle `id` et qui est un entier auto-incrémenté.
Cela peut aussi être un ensemble de champs qui forment une clé primaire composite.

</br >

### Les clés étrangères

Les clés étrangères sont des champs qui font référence à une clé primaire dans une autre table. Elles sont utilisées pour créer des **relations** entre nos données.

Par exemple, si nous avons une table `users` et une table `orders`, nous pouvons créer une relation entre les deux tables en ajoutant une clé étrangère `user_id` à la table `orders`. La clé étrangère `user_id` fait référence à la clé primaire `id` de la table `users`. Cela permet de lier les commandes à un utilisateur spécifique. Cela permet également de récupérer les données de l'utilisateur lors de la récupération des données de la commande.

Cela permet de rajouter des contraintes sur les données. Par exemple, si nous supprimons un utilisateur, nous pouvons supprimer toutes les commandes associées à cet utilisateur. Cela permet également de s'assurer que les données sont cohérentes.

</br >

### Les cardinalités

Les cardinalités sont utilisées pour définir les relations entre les tables. Elles sont utilisées pour définir le nombre d'occurrences dans une table qui peuvent être associées à un seul enregistrement dans une autre table.

</br >

### ORM

</br >

## 4. Le Modèle dans le MVC

Le Modèle dans le MVC est la partie de l'application qui gère les données. Il est généralement utilisé pour récupérer et stocker des données dans une base de données Il est notre seul point d'entrée pour accéder aux données.

Dans le fichier models/, il y aura plusieurs fichier qui correspondent à chaque model métier de l'application. Par exemple, si nous avons une table `users` et une table `orders`, nous aurons un fichier `userModel.js` et un fichier `orderModel.js` dans le dossier models/. Ces fichiers contiendront les fonctions qui permettent de récupérer et de stocker des données dans la base de données pour chaque logique métier.

Il existe 2 design pattern principaux pour faire ça : le **_data mapper_** et l'**_active record_**.

### Le data mapper

</br >

> Ceci est un design pattern. Un design pattern est un patron de conception permettant de résoudre un problème récurrent. Il permet de résoudre un problème récurrent de manière optimale.

</br >

Un data mapper est une fonction qui va faire une requête et retourner les resultats. Sa structure dans un modèle orderModel.js serait la suivante :

</br >

```js
// Import du client pour se connecter à la base de données

const client = require('../client');

const orderModel = {
  async findAll() {
    const orders = await client.query('SELECT * FROM "orders";');
    return orders.rows;
  },
  async findOne(id) {
    const order = await client.query('SELECT * FROM "orders" WHERE id = $1;', [
      id,
    ]);
    return order.rows[0];
  },
};

module.exports = orderModel;
```

</br >

Pour éviter de multiplier les connexions à la base de données, on crée un fichier client.js qui va se connecter à la base de données et exporter le client. Ce fichier sera importé dans les modèles :

</br >

```js
const { Client } = require('pg');

// Attention, à chaque appel de new Client, on crée une nouvelle instance de client et on se connecte à la base de données

const client = new Client(process.env.PG_URL);

// Export du client pour le mettre à disposition des autres, pour éviter de multiplier les connexions à la base de données

module.exports = client;
```

</br >

### L'active record

> Ceci est un design pattern. Un design pattern est un patron de conception permettant de résoudre un problème récurrent. Il permet de résoudre un problème récurrent de manière optimale.

En construction.

## 5. Les commandes de base de SQL

Ici sont listées les commandes de base de SQL. Elles sont divisées en plusieurs catégories: les commandes de manipulation des lignes, les commandes de base de données, les commandes de manipulation de table, les commandes de contraintes, les commandes de requête et les commandes de requête avancées.

**CRUD** est un acronyme qui signifie Create, Read, Update et Delete. Il est utilisé pour décrire les opérations de base de la base de données.

- `CREATE` - permet de créer de nouvelles données dans une base de données.
- `READ` - commande `SELECT` en sql permet de lire des données dans une base de données.
- `UPDATE` - permet de mettre à jour des données dans une base de données.
- `DELETE` - permet de supprimer des données dans une base de données.

</br >

### SQL Commandes de manipulation des lignes

- `SELECT` - permet de selectionner des données dans une base de données. Exemple: `SELECT * FROM users;`
- `UPDATE` - permet de mettre à jour des données dans une base de données. Exemple: `UPDATE users SET name = 'John' WHERE id = 1;`
- `DELETE` - permet de supprimer des données dans une base de données. Exemple: `DELETE FROM users WHERE id = 1;`
- `INSERT INTO` - permet d'insérer de nouvelles données dans une base de données. Exemple: `INSERT INTO users (name) VALUES ('John');`

</br >

### SQL Commandes de base de données

- `CREATE DATABASE` - permet de créer une nouvelle base de données. Exemple: `CREATE DATABASE my_database;`
- `ALTER DATABASE` - permet de modifier une base de données. Exemple: `ALTER DATABASE my_database RENAME TO your_database;`

</br >

### SQL Commandes de manipulation de table

- `CREATE TABLE` - permet de créer une nouvelle table. Exemple: `CREATE TABLE users (id INT, name VARCHAR(255));`
- `ALTER TABLE` - permet de modifier une table. Exemple: `ALTER TABLE users ADD email VARCHAR(255);`
- `DROP TABLE` - permet de supprimer une table. Exemple: `DROP TABLE users;`

</br >

### SQL Commandes de contraintes

- `NOT NULL` - indique que le champ ne peut pas être NULL. Exemple: `CREATE TABLE users (id INT NOT NULL, name VARCHAR(255) NOT NULL);`
- `UNIQUE` - indique que les valeurs de champ doivent être uniques. Exemple: `CREATE TABLE users (id INT UNIQUE, name VARCHAR(255) UNIQUE);`
- `PRIMARY KEY` - indique que le champ est une clé primaire. Exemple: `CREATE TABLE users (id INT NOT NULL PRIMARY KEY, name VARCHAR(255));`
- `FOREIGN KEY` - indique que le champ est une clé étrangère. Exemple: `CREATE TABLE orders (id INT NOT NULL, product_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES products(id));`
- `REFERENCES` - indique la table et la colonne à laquelle la clé étrangère fait référence. Exemple: `CREATE TABLE orders (id INT NOT NULL, product_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES products(id));`

</br >

### SQL Commandes de requête

- `WHERE` - permet de spécifier des critères de sélection. Exemple: `SELECT * FROM users WHERE country = 'France';`
- `LIKE` - permet de rechercher un motif dans une colonne. Exemple: `SELECT * FROM users WHERE name LIKE 'A%';`
- `ILIKE` - permet de rechercher un motif dans une colonne sans tenir compte de la casse. Exemple: `SELECT * FROM users WHERE name ILIKE 'a%';`
- `ORDER BY` - permet de trier les résultats par ordre croissant ou décroissant. Exemple: `SELECT * FROM users ORDER BY name ASC;`
- `ASC` - permet de trier les résultats par ordre croissant. Exemple: `SELECT * FROM users ORDER BY name ASC;`
- `DESC` - permet de trier les résultats par ordre décroissant. Exemple: `SELECT * FROM users ORDER BY name DESC;`

</br >

### SQL Commandes de requête avancées

- `GROUP BY` - permet de regrouper les résultats par une ou plusieurs colonnes. Exemple: `SELECT COUNT(*) FROM users GROUP BY country;`
- `HAVING` - permet de spécifier des critères de sélection pour les groupes. Exemple: `SELECT COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 10;`
- `LIMIT` - permet de limiter le nombre de résultats retournés. Exemple: `SELECT * FROM users LIMIT 10;`
- `OFFSET` - permet de spécifier le nombre de lignes à ignorer avant de commencer à renvoyer les résultats. Exemple: `SELECT * FROM users LIMIT 10 OFFSET 10;`

</br >

---

</br >

### Les types de données en SQL

SQL utilise des données très structurées. Il faut donc spécifier le type de données de chaque colonne lors de la création d'une table. Les types de données les plus courants sont les suivants:

| Type de Donnée    | Description                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `VARCHAR(taille)` | Permet de spécifier une chaîne de caractères de taille variable. La taille maximale est spécifiée dans les parenthèses.    |
| `CHAR(taille)`    | Permet de spécifier une chaîne de caractères de taille fixe. La taille maximale est spécifiée dans les parenthèses.        |
| `DOUBLE`          | Permet de spécifier un double.                                                                                             |
| `INT`             | Permet de spécifier un nombre entier.                                                                                      |
| `SMALLINT`        | Permet de spécifier un nombre entier plus petit.                                                                           |
| `BIGINT`          | Permet de spécifier un nombre entier plus grand.                                                                           |
| `DECIMAL(s, d)`   | Permet de spécifier un nombre décimal. Le paramètre `s` est le nombre total de chiffres et `d` est le nombre de décimales. |
| `DATE`            | Permet de spécifier une date.                                                                                              |
| `TIME`            | Permet de spécifier une heure.                                                                                             |
| `DATETIME`        | Permet de spécifier une date et une heure.                                                                                 |
| `TIMESTAMP`       | Permet de spécifier une date et une heure.                                                                                 |
| `TIMESTAMPZ`      | Permet de spécifier une date et une heure avec une timezone.                                                               |
| `BOOLEAN`         | Permet de spécifier une valeur booléenne.                                                                                  |
| `TEXT`            | Permet de spécifier un texte.                                                                                              |
| `ARRAY`           | Permet de spécifier un tableau.                                                                                            |
| `SERIAL`          | Permet de générer des entiers auto-incrémentés (usage = ID)                                                                |

</br >

---

</br >

## 6. Initialiser une base de données avec PostgreSQL dans Node.js

</br >

### Installation de PostgreSQL

- Télécharger et installer PostgreSQL: https://www.postgresql.org/download/
- créer un utilisateur et un mot de passe pour PostgreSQL

</br >

### Initialiser une base de données avec PostgreSQL dans Node.js

- Installer le module `pg` avec npm: `npm install pg`
- Dans votre fichier .env ajouter les variables d'environnement suivantes:

```

PG_URL=postgres://username:password@localhost:5432/database_name

```

- Créer un fichier `database.js` et y ajouter le code suivant:

```js
const { Client } = require('pg');
```

- Créer une nouvelle instance de client avec la variable d'environnement PG_URL:

```js
const client = new Client(process.env.PG_URL);
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

</br >

**_Précisions:_**

- **Async** et **await** seront utilisés pour créer des fonctions **asynchrones**. Les fonctions asynchrones sont des fonctions qui peuvent être suspendues et reprises plus tard. Elles permettent d'attendre des opérations asynchrones comme les requêtes de bdd qui peuvent prendre du temps.

- **Await** permet d'attendre la résolution d'une **promesse**. Une **promesse** est un objet qui représente la résolution ou le rejet éventuel d'une opération asynchrone. **Await** ne peut être utilisé que dans les fonctions asynchrones.
  Il est courant d'utiliser **await** devant une **promesse** qui renvoie le résultat d'une requête de base de données.

- La structure **try et catch**, permet de gérer les erreurs. Le code à l'intérieur du bloc try sera exécuté, si une erreur se produit, le bloc catch sera exécuté. Le try et catch **doit** être utilisé avec les fonctions asynchrones.

</br >

**_Les commandes node pour faire des requêtes SQL:_**

- query() - permet d'exécuter une requête SQL. Exemple: `client.query('SELECT * FROM "users";');`
- connect() - permet de connecter le client à la base de données. Exemple: `client.connect();`
- end() - permet de terminer la connexion avec la base de données. Exemple: `client.end();`

</br >

---

</br >

## 7. Quelques exemples d'usage de SQL

### Gestion des utilisateurs

#### Créer un utilisateur sur une base de données PostgreSQL

</br >

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

</br >

#### Pour se connecter à la base de données `exemple` avec l'utilisateur `trombi`:

```sql
psql -d exemple -U trombi
```

Expliquons cette commande:

- `psql` - permet de se connecter à une base de données PostgreSQL.
- `-d` - permet de spécifier la base de données à laquelle se connecter.
- `exemple` - est le nom de la base de données.
- `-U` - permet de spécifier l'utilisateur avec lequel se connecter.
- `trombi` - est le nom de l'utilisateur.

</br >

#### Créer une table

```sql
-- Créer une table clients
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  -- SERIAL est un type de données qui permet de générer automatiquement des valeurs numériques uniques.
  -- PRIMARY KEY indique que le champ est une clé primaire.
  -- Auto-incrementation de l'id
  name VARCHAR(255) NOT NULL,
  -- VARCHAR(255) est un type de données qui permet de stocker des chaînes de caractères.
  email VARCHAR(255) NOT NULL UNIQUE,
  -- UNIQUE indique que les valeurs de champ doivent être uniques.
  -- NOT NULL indique que le champ ne peut pas être NULL.
  password VARCHAR(255) NOT NULL
);
```

</br >

#### Insérer des données dans la table users

```sql
INSERT INTO clients (name, email, password) VALUES
('John', 'john@example.com', '1234'),
('Jane', 'jane@example.com', '4567'),
('Bob', 'Bob@example.com', '8910'),
('Alice', 'Alice@example.com', '1112');
```

</br >

#### Sélectionner notre utilisateur

```sql
SELECT * FROM clients WHERE email = 'john@example.com';
```

</br >

#### IF EXISTS/IF NOT EXISTS

Les mots-clés `IF EXISTS` et `IF NOT EXISTS` permettent de vérifier si une table existe avant de la créer ou de la supprimer.

```sql
-- Créer une table clients si elle n'existe pas
CREATE TABLE IF NOT EXISTS clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

```sql
-- Supprimer la table clients si elle existe
DROP TABLE IF EXISTS clients;
```

</br >

#### POSTGRESQL SERIAL PRIMARY KEY

Le type de données `SERIAL` est utilisé pour générer automatiquement des valeurs numériques uniques. Il est généralement utilisé pour les clés primaires. C'est un entier auto-incrémenté.

</br >

#### REFERENCES

Le mot-clé `REFERENCES` permet de créer une clé étrangère. Une clé étrangère est une colonne ou un groupe de colonnes dans une table qui fait référence à une colonne ou un groupe de colonnes dans une autre table.

```sql
-- Créer une table orders
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  product_id INT,
  -- INT est un type de données qui permet de stocker des nombres entiers.
  FOREIGN KEY(product_id) REFERENCES products(id)
  -- FOREIGN KEY indique que le champ est une clé étrangère.
  -- REFERENCES indique la table et la colonne à laquelle la clé étrangère fait référence.
);
```

</br >

## 8. Les Outils

### TablePlus

TablePlus est un outil qui permet de gérer les bases de données en GUI. Il est disponible sur Mac, Windows et Linux. Il permet de se connecter à plusieurs types de bases de données.

</br >

### pgAdmin

pgAdmin est un outil qui permet de gérer les bases de données PostgreSQL en GUI. Il est disponible sur Mac, Windows et Linux.

</br >
