# sql-cheat

Ceci est une Cheat-sheet (anti-sèche) sur SQL. Elle contient les commandes de base de SQL, des exemples d'usage de SQL et des informations sur les bases de données.

## Sommaire

### [1. Qu'est-ce qu'une base de données ?](#1-quest-ce-quune-base-de-données)

- [L'organisation des bases de données](#lorganisation-des-bases-de-données)
- [Les types de bases de données](#les-types-de-bases-de-données)
- [Les langages de bases de données](#les-langages-de-bases-de-données)

### [2. La conception d'une base de données](#2-la-conception-dune-base-de-données)

- [Le Modèle Conceptuel de Données (MCD)](#le-modèle-conceptuel-de-données-mcd)
- [Le Modèle Logique de Données (MLD)](#le-modèle-logique-de-données-mld)

### [3. Les notions de base](#3-les-notions-de-base)

- [Les clés primaires](#les-clés-primaires)
- [Les clés étrangères](#les-clés-étrangères)
- [Les cardinalités](#les-cardinalités)
- [Les tables de jointures](#les-tables-de-jointures)
- [ORM](#orm)
- [Les agrégations](#les-agrégations)

### [4. Le Modèle dans le MVC](#4-le-modèle-dans-le-mvc)

- [Le data mapper](#le-data-mapper)
- [L'active record](#lactive-record)

### [5. Les commandes de base de SQL](#5-les-commandes-de-base-de-sql)

- [SQL Commandes de manipulation des lignes](#sql-commandes-de-manipulation-des-lignes)
- [SQL Commandes de base de données](#sql-commandes-de-base-de-données)
- [SQL Commandes de manipulation de table](#sql-commandes-de-manipulation-de-table)
- [SQL Commandes de contraintes](#sql-commandes-de-contraintes)
- [SQL Commandes de requête](#sql-commandes-de-requête)
- [SQL Commandes de requête avancées](#sql-commandes-de-requête-avancées)
- [Les types de données en SQL](#les-types-de-données-en-sql)
- [IF EXISTS/IF NOT EXISTS](#if-existsif-not-exists)
- [POSTGRESQL SERIAL PRIMARY KEY](#postgresql-serial-primary-key)
- [REFERENCES](#references)
- [Les sous-requêtes](#les-sous-requêtes)

### [6. Initialiser une base de données avec PostgreSQL dans Node.js](#6-initialiser-une-base-de-données-avec-postgresql-dans-nodejs)

- [Installation de PostgreSQL](#installation-de-postgresql)
- [Initialiser une base de données avec PostgreSQL dans Node.js](#initialiser-une-base-de-données-avec-postgresql-dans-nodejs)

### [7. Quelques exemples d'usage de SQL](#7-quelques-exemples-dusage-de-sql)

- [Gestion des utilisateurs](#gestion-des-utilisateurs)

  - [Créer un utilisateur sur une base de données PostgreSQL](#créer-un-utilisateur-sur-une-base-de-données-postgresql)
  - [Pour se connecter à la base de données `exemple` avec l'utilisateur `trombi`:](#pour-se-connecter-à-la-base-de-données-exemple-avec-lutilisateur-trombi)
  - [Créer une table](#créer-une-table)
  - [Insérer des données dans la table users](#insérer-des-données-dans-la-table-users)
  - [Sélectionner notre utilisateur](#sélectionner-notre-utilisateur)
  - [Rows, rowCount dans le résultat d'une requête](#rows-rowcount-dans-le-résultat-dune-requête)

### [8. Les Outils](#8-les-outils)

- [TablePlus](#tableplus)
- [pgAdmin](#pgadmin)
- [urlencoded](#urlencoded)
- [Les commandes de PostgreSQL](#les-commandes-de-postgresql)

### [9. La sécurité](#9-la-sécurité)

- [Les injections SQL](#les-injections-sql)

## 1. Qu'est-ce qu'une base de données ?

Une base de données est un ensemble de données organisées de manière structurée. Une base de données est généralement stockée dans un système de gestion de base de données (SGBD), qui est un logiciel qui permet de stocker, organiser et récupérer des données.

Les bases de données peuvent être utilisées pour stocker des informations telles que des données client, des données de vente, des informations sur les produits, des données financières et bien plus encore.

L'intérêt d'utiliser une base de données, c'est d'avoir une single source of truth (source de vérité unique). Cela permet d'avoir une seule source de données qui est utilisée par plusieurs outils.

### L'organisation des bases de données

Les bases de données sont généralement organisées en tables. Une table est composée de lignes et de colonnes. Les colonnes contiennent les noms des champs et définissent le type de données qui seront stockées dans le champ. Les lignes contiennent les enregistrements ou les données pour les colonnes spécifiées.

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

une **table** ressemblera à ça:

| id  | name  | email             |
| --- | ----- | ----------------- |
| 1   | John  | john@example.com  |
| 2   | Jane  | Jane@example.com  |
| 3   | Bob   | Bob@example.com   |
| 4   | Alice | Alice@example.com |

### Les types de bases de données

Il existe plusieurs types de bases de données, mais les plus courants sont les bases de données relationnelles et les bases de données non relationnelles. Les bases de données relationnelles stockent les données dans des tables qui sont liées les unes aux autres par des clés. Les bases de données non relationnelles stockent les données dans des documents, des graphiques, des clés et des paires de valeurs ou des colonnes.

### Les langages de bases de données

Les bases de données sont généralement contrôlées à l'aide d'un langage de base de données. Les langages de base de données les plus courants sont SQL et NoSQL. SQL est un langage de base de données relationnelle qui est utilisé pour manipuler et récupérer des données dans des bases de données relationnelles. NoSQL est un langage de base de données non relationnel qui est utilisé pour manipuler et récupérer des données dans des bases de données non relationnelles.

---

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

### Le Modèle Logique de Données (MLD)

Le Modèle Logique de Données (MLD) sert a transcrire le MCD en un langage de base de données. Il permet de connaître les tables, les colonnes, les clés primaires et les clés étrangères qui seront utilisées dans la base de données.

---

## 3. Les notions de base

Il existe des notions de base qui sont utilisées dans les bases de données relationnelles. Ces notions sont les suivantes:

### Les clés primaires

Les clés primaires sont un champ ou plusieurs qui caractérisent de manière unique chaque enregistrement d'une table. Elles sont utilisées pour "discriminer" et donc identifier les données spécifiques.
Généralement, on utilise un champ qui s'appelle `id` et qui est un entier auto-incrémenté.
Cela peut aussi être un ensemble de champs qui forment une clé primaire composite.

### Les clés étrangères

Les clés étrangères sont des champs qui font référence à une clé primaire dans une autre table. Elles sont utilisées pour créer des **relations** entre nos données.

Par exemple, si nous avons une table `users` et une table `orders`, nous pouvons créer une relation entre les deux tables en ajoutant une clé étrangère `user_id` à la table `orders`. La clé étrangère `user_id` fait référence à la clé primaire `id` de la table `users`. Cela permet de lier les commandes à un utilisateur spécifique. Cela permet également de récupérer les données de l'utilisateur lors de la récupération des données de la commande.

Cela permet de rajouter des contraintes sur les données. Par exemple, si nous supprimons un utilisateur, nous pouvons supprimer toutes les commandes associées à cet utilisateur. Cela permet également de s'assurer que les données sont cohérentes.

### Les cardinalités

Les cardinalités sont utilisées pour définir les relations entre les tables. Elles sont utilisées pour définir le nombre d'occurrences dans une table qui peuvent être associées à un seul enregistrement dans une autre table.
Il existe 3 types de cardinalités:

- **One to One** - Une occurrence dans une table est associée à une seule occurrence dans une autre table. Très souvent les données en One to One sont dans une seule table.

  - **ex** : un utilisateur a une adresse.

- **One to Many** - Une occurrence dans une table est associée à plusieurs occurrences dans une autre table.

  - **ex** : un utilisateur a plusieurs commandes.

- **Many to Many** - Plusieurs occurrences dans une table sont associées à plusieurs occurrences dans une autre table. Cela nécessite une **table de jointure**. La table de jointure contient les clés primaires des deux tables.
  - **ex** : un utilisateur a plusieurs commandes et une commande a plusieurs produits.

### Les tables de jointures

Les tables de jointures en base de données sont des opérations qui permettent de combiner des données de deux tables ou plus, basées sur une relation commune. Elles sont essentielles dans le modèle relationnel pour exploiter efficacement les relations entre les différentes tables. Voici les types de jointures les plus courants :

| Type de Jointure                  | Description                                                                                                                                                                                                                                                                                  | Exemple                                                                                   |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Jointure Interne (Inner Join)     | Sélectionne les enregistrements qui ont des valeurs correspondantes dans les deux tables. Si un enregistrement est NULL, il ne sera pas renvoyé                                                                                                                                              | `sql SELECT \* FROM Table1 INNER JOIN Table2 ON Table1.column_name = Table2.column_name;` |
| Jointure Externe (Outer Join)     | Peut être de trois types - **gauche** (**Left**), **droite** (**Right**), ou **complète** (**Full**). Elle sélectionne tous les enregistrements d'une table et ceux correspondants de l'autre table. Les résultats incluent des valeurs nulles pour les enregistrements sans correspondance. | `sql SELECT \* FROM Table1 LEFT JOIN Table2 ON Table1.column_name = Table2.column_name; ` |
| Jointure Croisée (Cross Join)     | Produit le produit cartésien des deux tables, combinant chaque enregistrement de la première table avec chaque enregistrement de la seconde.                                                                                                                                                 | `sql SELECT \* FROM Table1 CROSS JOIN Table2;                                          `  |
| Jointure Naturelle (Natural Join) | Jointure interne basée sur toutes les colonnes ayant le même nom dans les deux tables.                                                                                                                                                                                                       | `sql SELECT \* FROM Table1 NATURAL JOIN Table2;                                        `  |
| Jointure Auto (Self Join)         | Jointure d'une table avec elle-même.                                                                                                                                                                                                                                                         | `sql SELECT \* FROM Table1 T1, Table1 T2 WHERE condition;                               ` |

Le type de jointure le plus commun est le LEFT JOIN, car il permet de récupérer toutes les données d'une table et les données correspondantes d'une autre table.

Ces jointures sont fondamentales pour la récupération et l'analyse des données dans des systèmes de gestion de bases de données relationnelles. Elles permettent de créer des requêtes complexes et de tirer des informations significatives à partir de données réparties dans différentes tables.

**ex :**

> **_Table Etudiants_**
>
> | etudiant_id | nom    | prenom |
> | ----------- | ------ | ------ |
> | 1           | Dupont | Jean   |
> | 2           | Martin | Alice  |
> | 3           | Durand | Marc   |
>
> **_Table Cours_**
>
> | cours_id | nom_du_cours  |
> | -------- | ------------- |
> | 101      | Mathématiques |
> | 102      | Informatique  |
> | 103      | Littérature   |
>
> **_Table Inscriptions_**
>
> | inscription_id | etudiant_id | cours_id |
> | -------------- | ----------- | -------- |
> | 1              | 1           | 101      |
> | 2              | 1           | 102      |
> | 3              | 2           | 102      |
> | 4              | 3           | 103      |

Ici l'étudiant **Jean Dupont**(`etudiant_id = 1`) est inscrit à deux cours, **Mathématiques**(`cours_id = 101`) et **Informatique**(`cours_id = 102`). Alice Martin est inscrite à un seul cours, Informatique. Marc Durand est inscrit à un seul cours, Littérature.

Requête SQL qui correspond :

```sql
-- Requête SQL qui permet de récupérer les étudiants et les cours auxquels ils sont inscrits
SELECT
-- On sélectionne les colonnes que l'on veut récupérer
etudiants.nom,
etudiants.prenom,
cours.nom_du_cours
-- On sélectionne les tables que l'on veut récupérer
FROM etudiants
-- On fait une jointure entre les tables etudiants et inscriptions
LEFT JOIN inscriptions ON etudiants.etudiant_id = inscriptions.etudiant_id
-- On fait une jointure entre les tables inscriptions et cours
LEFT JOIN cours ON inscriptions.cours_id = cours.cours_id;
-- le resultat sera : Jean Dupont, Mathématiques, Jean Dupont, Informatique, Alice Martin, Informatique, Marc Durand, Littérature

```

Autre exemple de requête SQL avec LEFT JOIN :

```sql
-- Sélection des colonnes à afficher : nom, rue, numéro de rue de la personne, et le témoignage associé
SELECT personne.nom, personne.rue, personne.numero_rue, temoignage.temoignage

-- Jointure des tables 'temoignage' et 'personne'
FROM temoignage JOIN personne

-- La condition de jointure : relier les deux tables via les identifiants de la personne
ON temoignage.personne_id = personne.id

-- Filtrer pour ne sélectionner que les personnes habitant 'rue Sadi Carnot'
WHERE personne.rue LIKE 'rue Sadi Carnot'

-- Ordonner les résultats par le numéro de rue de la personne, en ordre décroissant
ORDER BY personne.numero_rue DESC

-- Limiter les résultats à une seule entrée
LIMIT 1;
```

Dans le cadre d'une double jointure LEFT :

```sql
-- Sélection des colonnes à afficher : nom de l'employé, nom du département et titre du projet
SELECT Employes.nom, Departements.nom_departement, Projets.titre_projet

-- De la table Employes
FROM Employes

-- Premier LEFT JOIN pour inclure tous les employés, même ceux sans département
LEFT JOIN Departements
-- Condition de jointure : relier les employés à leur département
ON Employes.id_departement = Departements.id

-- Deuxième LEFT JOIN pour inclure tous les employés, même ceux sans projet
LEFT JOIN Projets
-- Condition de jointure : relier les employés à leurs projets
ON Employes.id_projet = Projets.id;

-- Optionnel : ajouter une clause WHERE, ORDER BY, etc., si nécessaire
WHERE Employes.nom = 'Dupont';
```

Schéma :

![Schéma](img/sql-join.jpg)

### ORM

Un ORM (Object-Relational Mapping) est un outil qui permet de traduire les données entre un langage de programmation et une base de données. Sequelize est un ORM populaire pour Node.js, facilitant l'interaction avec des bases de données SQL comme PostgreSQL, MySQL, SQLite, et MSSQL. Avec Sequelize, les développeurs peuvent gérer les données de base de données via des objets de programmation, simplifiant ainsi le développement et la maintenance des applications.

### Les agrégations

A l'origine, on travaille plutôt ligne par ligne. Mais on peut travailler en faisant des **agrégations**. Cela permet de faire des calculs sur plusieurs lignes. Par exemple, on peut faire la somme de toutes les lignes d'une colonne. Il existe plusieurs types d'agrégations :

- `COUNT` - permet de compter le nombre de lignes dans une colonne. Exemple: `SELECT COUNT(*) FROM users;`
- `SUM` - permet de calculer la somme des valeurs dans une colonne. Exemple: `SELECT SUM(price) FROM orders;`
- `MAX` - permet de récupérer la valeur maximale dans une colonne. Exemple: `SELECT MAX(price) FROM orders;`
- `MIN` - permet de récupérer la valeur minimale dans une colonne. Exemple: `SELECT MIN(price) FROM orders;`
- `AVG` - permet de calculer la moyenne des valeurs dans une colonne. Exemple: `SELECT AVG(price) FROM orders;`

exemple de requête SQL avec agrégation AVG :

```sql
-- colonne 'age' de la table 'personnes'
SELECT AVG(age) FROM personnes;
-- données en sortie = moyenne des âges de toutes les personnes de la table personnes
```

## 4. Le Modèle dans le MVC

Le Modèle dans le MVC est la partie de l'application qui gère les données. Il est généralement utilisé pour récupérer et stocker des données dans une base de données Il est notre seul point d'entrée pour accéder aux données.

Dans le fichier models/, il y aura plusieurs fichier qui correspondent à chaque model métier de l'application. Par exemple, si nous avons une table `users` et une table `orders`, nous aurons un fichier `userModel.js` et un fichier `orderModel.js` dans le dossier models/. Ces fichiers contiendront les fonctions qui permettent de récupérer et de stocker des données dans la base de données pour chaque logique métier.

Il faut bien utiliser les promesses et les fonctions asynchrones pour éviter de bloquer le serveur dans l'attente d'une réponse de la base de données. Il faut attendre que la promesse soit **Fullfilled**, soit **Rejected** si rejetée, soit **Pending** si elle est en attente.

On n'utilise pas de try catch dans le modèle, on le fait dans le controller, ce n'est pas le but du modèle de gérer les erreurs.

Il existe 2 design pattern principaux pour faire ça : le **_data mapper_** et l'**_active record_**.

### Le data mapper

> Ceci est un design pattern. Un design pattern est un patron de conception permettant de résoudre un problème récurrent. Il permet de résoudre un problème récurrent de manière optimale.

Un data mapper est une fonction qui va faire une requête et retourner les resultats. Sa structure dans un modèle orderModel.js serait la suivante :

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

Pour éviter de multiplier les connexions à la base de données, on crée un fichier client.js qui va se connecter à la base de données et exporter le client. Ce fichier sera importé dans les modèles :

```js
const { Client } = require('pg');

// Attention, à chaque appel de new Client, on crée une nouvelle instance de client et on se connecte à la base de données

const client = new Client(process.env.PG_URL);

// Export du client pour le mettre à disposition des autres, pour éviter de multiplier les connexions à la base de données

module.exports = client;
```

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

### SQL Commandes de manipulation des lignes

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
- `REFERENCES` - indique la table et la colonne à laquelle la clé étrangère fait référence. Exemple: `CREATE TABLE orders (id INT NOT NULL, product_id INT, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES products(id));`

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

#### POSTGRESQL SERIAL PRIMARY KEY

Le type de données `SERIAL` est utilisé pour générer automatiquement des valeurs numériques uniques. Il est généralement utilisé pour les clés primaires. C'est un entier auto-incrémenté.

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

#### Les sous-requêtes

Une sous-requête est une requête imbriquée dans une autre requête. Elle est utilisée pour récupérer des données à partir d'une table en fonction des valeurs d'une autre table.

```sql
-- Sélectionner les produits qui ont été commandés
SELECT * FROM products
WHERE id
IN (SELECT product_id FROM orders); -- La sous-requête récupère les product_id de la table orders
```

---

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

---

## 6. Initialiser une base de données avec PostgreSQL dans Node.js

### Installation de PostgreSQL

- Télécharger et installer PostgreSQL: https://www.postgresql.org/download/
- créer un utilisateur et un mot de passe pour PostgreSQL

### Initialiser une base de données avec PostgreSQL dans Node.js

- Installer le module `pg` avec npm: `npm install pg`
- Dans votre fichier .env ajouter les variables d'environnement de la chaîne de connexion à la base de données:

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

**_Précisions:_**

- **Async** et **await** seront utilisés pour créer des fonctions **asynchrones**. Les fonctions asynchrones sont des fonctions qui peuvent être suspendues et reprises plus tard. Elles permettent d'attendre des opérations asynchrones comme les requêtes de bdd qui peuvent prendre du temps.

- **Await** permet d'attendre la résolution d'une **promesse**. Une **promesse** est un objet qui représente la résolution ou le rejet éventuel d'une opération asynchrone. **Await** ne peut être utilisé que dans les fonctions asynchrones.
  Il est courant d'utiliser **await** devant une **promesse** qui renvoie le résultat d'une requête de base de données.

- La structure **try et catch**, permet de gérer les erreurs. Le code à l'intérieur du bloc try sera exécuté, si une erreur se produit, le bloc catch sera exécuté. Le try et catch **doit** être utilisé avec les fonctions asynchrones.

- then et catch:

```js
function getUsers() {
  client
    // On exécute la requête
    .query('SELECT * FROM "users";')
    // Si la requête est résolue, on récupère les données
    .then((res) => console.log(res.rows))
    // Si la requête est rejetée, on récupère l'erreur
    .catch((err) => console.log(err.stack));
}
```

**_Précisions:_**

- **then** et **catch** sont une autre façon de faire des requêtes asynchrones. **then** est utilisé pour récupérer les données si la requête est résolue. **catch** est utilisé pour récupérer l'erreur si la requête est rejetée.

- l'avantage est que le code est non bloquant. Alors qu'avec async et await, le code est bloquant et il

**_Les commandes node pour faire des requêtes SQL:_**

- query() - permet d'exécuter une requête SQL. Exemple: `client.query('SELECT * FROM "users";');`
- connect() - permet de connecter le client à la base de données. Exemple: `client.connect();`
- end() - permet de terminer la connexion avec la base de données. Exemple: `client.end();`

---

## 7. Quelques exemples d'usage de SQL

### Gestion des utilisateurs

#### Créer un utilisateur sur une base de données PostgreSQL

- Avant toute chose il faut lancer psql, pour cela il faut ouvrir le terminal et taper la commande suivante:

```bash
sudo -i -u postgres psql
```

- on se retrouve alors dans l'invite de commande de psql avec le prompt suivant:

```bash
postgres=#
```

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

- pour ajouter créer différents éléments à partir d'un fichier sql :

```bash
psql -U trombi -d exemple -a -f ./sql/creation_dbfichier.sql
```

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

#### Insérer des données dans la table users

```sql
INSERT INTO clients (name, email, password) VALUES
('John', 'john@example.com', '1234'),
('Jane', 'jane@example.com', '4567'),
('Bob', 'Bob@example.com', '8910'),
('Alice', 'Alice@example.com', '1112');
```

#### Sélectionner notre utilisateur

```sql
SELECT * FROM clients WHERE email = 'john@example.com';
```

### Rows, rowCount dans le résultat d'une requête

- rows - contient les données retournées par la requête. Les données sont stockées dans un tableau. Chaque élément du tableau est un objet qui contient les données d'une ligne.

- rowCount - contient le nombre de lignes retournées par la requête. C'est un nombre entier. Il est généralement utilisé pour vérifier si la requête a retourné des données car il est égal à 0 si la requête n'a retourné aucune donnée.

## 8. Les Outils

### TablePlus

TablePlus est un outil qui permet de gérer les bases de données en GUI. Il est disponible sur Mac, Windows et Linux. Il permet de se connecter à plusieurs types de bases de données.

### pgAdmin

pgAdmin est un outil qui permet de gérer les bases de données PostgreSQL en GUI. Il est disponible sur Mac, Windows et Linux.

### urlencoded

urlencoded est un middleware qui permet de parser les données envoyées par un formulaire. Il est utilisé avec express. Il permet de récupérer les données envoyées par un formulaire dans `req.body`.

```js
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
```

Le extended permet de spécifier quel module utiliser pour parser les données. Si extended est à true, il utilisera le module `qs`, si extended est à false, il utilisera le module `querystring`.

### Les commandes de PostgreSQL

- `\l` - permet de lister les bases de données.
- `\c` - permet de se connecter à une base de données.
- `\dt` - permet de lister les tables.
- `\d` - permet de décrire une table.
- `\q` - permet de quitter PostgreSQL.
- `\du` - permet de lister les utilisateurs.

## 9. La sécurité

### Les injections SQL

**_Très important pour le titre pro._**

Pour éviter les injections SQL, dans le cadre d'une concaténation de chaînes de caractères, il faut utiliser des requêtes paramétrées/préparées, les données seront remplacées par des $1 et passeront en paramètre de la fonction query. $x permet de nettoyer les données.

**Exemple:**

```js
const name = 'John';
const email = 'John@example.com';
const password = '1234';

client.query(
  'INSERT INTO clients (name, email, password) VALUES ($1, $2, $3)',
  [name, email, password],
  (err, res) => {
    console.log(err, res);
    client.end();
  }
);
```
