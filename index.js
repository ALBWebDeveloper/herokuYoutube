const express = require("express")
const app = express()

app.get("/"), function(res,req){
    res.send("working app with node, gitHub, on Heroku server")
}

app.listen(process.env.PORT||5000)