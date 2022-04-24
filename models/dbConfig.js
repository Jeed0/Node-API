const mongoose = require('mongoose'); 

mongoose
.connect("mongodb://localhost:27017/node-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
        console.log("MongoDB Connecté!")
})
.catch(err => console.log("Connection error: " + err)
    );
