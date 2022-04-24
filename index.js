const express = require('express'); // lancer express
const app = express();

require('./models/dbConfig')

app.listen(5500, () => console.log('Server started: 5500')); // connexion et lancement serveur

