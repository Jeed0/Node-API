const express = require('express'); 
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController'); 
const bodyParser = require('body-parser');
// ancienne MAJ pour le put : const mongoose = require('mongoose');
const cors = require('cors'); //! appel du cors apres npm i -s cors

//*Mise en place du middlware :
// ancinenne maj pour le put : mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());
app.use(cors({origin: 'https://cdpn.io'})); //! mettre cors avant les routes pour ouvrir l'API aux autre sites sur internet
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500')); 

