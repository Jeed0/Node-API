const express = require('express');     
const router = express.Router();   
const ObjectID = require('mongoose').Types.ObjectId;    

const { PostsModel } = require('../models/postsModel'); 

//*CREATE
router.post('/', (req, res) => {          
    const newRecord = new PostsModel({
        author: req.body.author,  
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error creating new data : " + err);
    })
})

//*READ
router.get('/', (req, res) => {          
    PostsModel.find((err, docs) => {    
        if (!err) res.send(docs);
        else console.log("Error to get data : " + err); 
    })
});

//*UPDATE
router.put("/:id", (req, res) => {          
        if (!ObjectID.isValid(req.params.id)) 
            return res.status(400).send("ID unknow : " + req.params.id); 
        const updatedRecord = {
            author : req.body.author,
            message: req.body.message
        };

        PostsModel.findByIdAndUpdate(
            req.params.id, 
            { $set: updatedRecord },
            { new:true }, 
            (err, docs) => {
                if (!err) res.send(docs);
                else console.log("Update error : " + err);
            }
        )
})

//*DELETE
router.delete("/:id", (req, res) => {          
    if (!ObjectID.isValid(req.params.id)) 
        return res.status(400).send("ID unknow : " + req.params.id); 
    
    PostsModel.findByIdAndRemove( 
        req.params.id,
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("Delete error : " + err);
        } 
    );
})

module.exports = router;