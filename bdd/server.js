const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'hackaton',
});

// Middleware pour analyser les données JSON
app.use(bodyParser.json());

// Connectez-vous à la base de données MySQL
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.message);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Endpoint pour gérer l'inscription
app.post('/sign-up', async (req, res) => {
  const { name, lastname, email, password } = req.body;

  // Hachez le mot de passe avant de le stocker dans la base de données
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO Users (name, lastname, email, password) VALUES (?, ?, ?, ?)';
  db.query(query, [name, lastname, email, hashedPassword], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'inscription : ' + err.message);
      res.status(500).json({ error: 'Erreur lors de l\'inscription' });
    } else {
      console.log('Inscription réussie');
      res.status(200).json({ message: 'Inscription réussie' });
    }
  });
});

app.get('/test', (req, res) => {
  const sqlQuery = 'SELECT * FROM users';

  // Exécutez la requête SQL
  db.query(sqlQuery, (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'exécution de la requête SQL :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      return;
    }

    // Envoie les résultats en tant que réponse
    res.json(results);
  });
});

// Endpoint pour gérer la connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Recherchez l'utilisateur dans la base de données par email
  db.query('SELECT * FROM Users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Erreur lors de la recherche de l\'utilisateur : ' + err.message);
      res.status(500).json({ error: 'Erreur de serveur' });
    } else {
      if (results.length === 0) {
        // Aucun utilisateur trouvé avec cet email
        res.status(401).json({ error: 'Utilisateur non trouvé' });
      } else {
        // Comparez le mot de passe haché stocké avec le mot de passe fourni
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // Authentification réussie
          res.status(200).json({ message: 'Connexion réussie' });
        } else {
          // Mot de passe incorrect
          res.status(401).json({ error: 'Mot de passe incorrect' });
        }
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
