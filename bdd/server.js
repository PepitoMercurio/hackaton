const express = require('express');
const sqlite3 = require('sqlite3').verbose();  // Correction pour utiliser SQLite3 correctement
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}));

const db = new sqlite3.Database('./hackaton.db', (err) => {  // Correction de la création de la base de données SQLite
  if (err)
      throw err;

  console.log('Database started on hackaton.db');  // Correction du message pour afficher le bon nom de la base de données
});

app.use(bodyParser.json());

app.post('/addUser', (req, res) => {
  const {id, name, lastname, age, address_id, email, phonenumber, password, user_type, co2_id } = req.body;

  const query = `INSERT INTO Users (id, name, lastname, age, address_id, email, phonenumber, password, user_type, co2_id)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.run(query, [id, name, lastname, age, address_id, email, phonenumber, password, user_type, co2_id], function(err) {
    if (err) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur', err.message);
      res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'utilisateur' });
    } else {
      console.log(`Utilisateur ajouté avec l'ID ${this.lastID}`);
      res.status(200).json({ message: 'Utilisateur ajouté avec succès' });
    }
  });
});

app.get('/getUsers', (req, res) => {
  const sqlQuery = 'SELECT * FROM Users';

  db.all(sqlQuery, (error, results) => {  // Utilisation de db.all() pour récupérer tous les résultats
    if (error) {
      console.error('Erreur lors de l\'exécution de la requête SQL :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      return;
    }

    res.json(results);
  });
});

app.post('/add-reservation', (req, res) => {
  const { id, user_id, station_id, reserv_date, total_price } = req.body;

  const query = `INSERT INTO reservation (id, user_id, station_id, reserv_date, total_price)
                 VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [id, user_id, station_id, reserv_date, total_price], function(err) {
    if (err) {
      console.error('Erreur lors de l\'ajout de la réservation', err.message);
      res.status(500).json({ error: 'Erreur lors de l\'ajout de la réservation' });
    } else {
      console.log(`Réservation ajoutée avec l'ID ${this.lastID}`);
      res.status(200).json({ message: 'Réservation ajoutée avec succès' });
    }
  });
});



app.get('/check-login/:email/:password', async (req, res) => {
  const { email, password } = req.params;

  // Recherchez l'utilisateur dans la base de données par email
  db.get('SELECT * FROM Users WHERE email = ?', [email], async (err, user) => {
    if (err) {
      console.error('Erreur lors de la recherche de l\'utilisateur : ' + err.message);
      res.status(500).json({ error: 'Erreur de serveur' });
    } else {
      if (!user) {
        // Aucun utilisateur trouvé avec cet email
        res.status(200).json({ result: 1 });  // Renvoie 1 si l'utilisateur n'est pas trouvé
      } else {
        // Comparez le mot de passe haché stocké avec le mot de passe fourni
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          // Mot de passe correct, correspondance trouvée
          res.status(200).json({ result: 0 });  // Renvoie 0 si l'utilisateur et le mot de passe correspondent
        } else {
          // Mot de passe incorrect
          res.status(200).json({ result: 1 });  // Renvoie 1 si le mot de passe est incorrect
        }
      }
    }
  });
});


app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
