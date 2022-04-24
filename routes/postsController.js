const express = require('express');     
const router = express.Router();       

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
    })
});

module.exports = router