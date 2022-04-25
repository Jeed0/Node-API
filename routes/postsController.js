const express = require('express');     
const router = express.Router();   
const ObjectID = require('mongoose').Types.ObjectId;    

const { PostsModel } = require('../models/postsModel'); 

router.get('/', (req, res) => {          
    PostsModel.find((err, docs) => {    
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err); 
    })
});

router.post('/', (req, res) => {          
    const newRecord = new PostsModel({
        author: req.body.author, // req.body ne marche qu avec body parser : 
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error creating new data : " + err);
    })
})

router.put("/:id", (req, res) => {          //on doit pointer l'id et inclure object ID
        if (!ObjectID.isValid(req.params.id)) // si id n est pas connu
            return res.status(400).send("ID unknow : " + req.params.id); // tu me retourne l erreur d'id
        const updatedRecord = {
            author : req.body.author,
            message: req.body.message
        };

        PostsModel.findByIdAndUpdate(
            req.params.id, //on recupere l'id de la donnée
            { $set: updatedRecord },
            { new:true }, //on met à jour la modification
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log("Update error : " + err);
            }
        )
})



module.exports = router;