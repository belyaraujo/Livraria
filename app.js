const express = require("express")
const app = express()

app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/login.html")
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