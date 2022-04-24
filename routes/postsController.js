//! mise en place d un controleur
const express = require('express');     //*1 appel de la methode express dans le framework
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const router = express.Router();        //*2  mise en place de la methode -> creation de la route

const { PostsModel} = require('../models/postsModel'); //* initier l appel de la base de donnée

route.get('/', (req, res) => {          //*3 methode affichée / dans url pour requete et reponse
    PostsModel.find((err, docs) => {    //*4  trouve les données nommées docs par convention si pas d erreur
        console.log(docs); //* 5 
    })
})


module.exports = router ; //*5 exporter la methode

//*6  --> appeler la methode dans l'index
