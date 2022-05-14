const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'.env'})


// creating Data base 

mongoose.connect(`${process.env.MONGO_KEY}`)
.then(() => {
    console.log("Database Connected");
})
    .catch(() => {
        console.log("Database Not Connected");
    })