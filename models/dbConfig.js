const mongoose = require('mongoose'); 

mongoose
.connect("mongodb://localhost:27017/node-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
})
.then(() => {
        console.log("MongoDB Connecté!")
})
.catch(err => console.log("Connection error: " + err)
    );
