const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.send("working app with node, gitHub, on Heroku server. How is it working now?")
})

app.listen(process.env.PORT||5000)