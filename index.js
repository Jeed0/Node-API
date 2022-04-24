const express = require('express'); 
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController'); 
const bodyParser = require('body-parser');

//*Mise en place du middlware : 
app.use(bodyParser.json());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500')); 

