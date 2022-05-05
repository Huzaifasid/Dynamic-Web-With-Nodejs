const mongoose = require('mongoose')


// creating Data base 

mongoose.connect("mongodb://localhost:27017/dynamicweb")
.then(() => {
    console.log("Database Connected");
})
    .catch(() => {
        console.log("Database Not Connected");
    })