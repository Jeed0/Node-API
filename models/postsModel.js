//! Création d'un modele par etape : 
const mongoose = require("mongoose"); //*1 appel de mongoose

const PostsModel = mangoose.model( //*2 Majuscule par convention -> Modele de base de données

    "node-api", //*3 dans quelle base de donnée on travaille
    { //*5 quelles données
            author:{
                type : String,
                required:true
            },
            message:{
                type : String,
                required:true
            },
            date:{
                type : Date,
                default: Date.now, //*6 prendra la date et heure de création auto
            },
    }, 
    "posts" //*4 dans quelle table
);

module.exports = {PostsModel}; //* Exportation du modele


