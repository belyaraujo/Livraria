const express = require("express")
const session = require("express-session")
const bodyparser = require("body-parser")
const app = express()
const mongoose = require("mongoose")
const connecttodatabase = require("./db.js")
connecttodatabase()

app.use(session({secret:"aloaloalaoaoaalaoaoal"}))
app.use(bodyparser.urlencoded({extended:true}))

var email = "usuario@email.com"
var senha = "12345"

app.post("/", function(req,res){
    if(req.body.senha == senha && req.body.email == email){
        req.session.email = email
        res.sendFile(__dirname + "/html/lista.html")
    }else{
        res.sendFile(__dirname + "/html/login.html")
    }
    
})

app.get("/", function(req,res){
    if(req.session.email){
        res.sendFile(__dirname + "/html/lista.html")
    }else{
        res.sendFile(__dirname + "/html/login.html")
    }
    
    
})

app.get("/lista", function(req,res){
    
    res.sendFile(__dirname + "/html/lista.html")
})

app.get("/carrinho", function(req,res){
    res.sendFile(__dirname + "/html/carrinho.html")
})

app.listen(8081,function(){
    console.log("rodando")
})