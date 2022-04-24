//*  1 - creation d"une data base avec Mongo DB compass ( DL ok) 1er tableau "posts"
//* 2- installation "npm i -s mongoose"

const mongoose = require('mongoose'); //* 3- appel des methodes de mangoose


mongoose //*4 connection ( faire le .env, gitignore, etc..)
.connect("mongodb://localhost:27017/node-api", {
    useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(() => {
        console.log("MongoDB Connecté!")
})
.catch(err => console.log(err)
    );
