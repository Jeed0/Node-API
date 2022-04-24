const express = require('express'); 
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController'); 

//*Mise en place du middlware : 
app.use('/', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500')); 

