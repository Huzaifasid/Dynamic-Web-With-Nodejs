const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
require("./db/conn")
const User = require('./models/userSchema')
const res = require('express/lib/response')
const port = process.env.PORT || 8000

// paths
const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")



// middleware
// app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstap/dist/css")))
// app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))
app.set("view engine", "hbs")
app.set("views", templatePath)
hbs.registerPartials(partialsPath)


// routing 
app.get("/", (req, res) => {
    res.render("index")
})


app.post("/contact", async(req,res)=>{

    try {

        // res.send(req.body) 
        const userData = new User(req.body)
         await userData.save()
         res.status(201).render("index")
        
    } catch (error) {
        res.status(500).send(error)
    }
})





// server creation 
app.listen(port, () => {
    console.log(`port is running on http://localhost:${port}`);
})