const express = require('express'); 
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController'); 
const bodyParser = require('body-parser');
// ancienne MAJ pour le put : const mongoose = require('mongoose');

//*Mise en place du middlware :
// ancinenne maj pour le put : mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500')); 

