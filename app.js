const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const handlebars =  require("express-handlebars").engine
const post = require("./models/post")

app.engine("handlebars", handlebars({defaultLayout : "main"}))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({extended : false}))
app.set(bodyParser.json())



app.get("/", function(req, res){
    res.render("primeira_pagina")
})

/*app.get("/cadastrar", function(req, res){
    res.render("")
})2*/

/*app.post("/cadastrar", function(req, res){ // aprimoramento para gravar em banco
    res.send("nome"+ req.body.nome )
})2*/

app.post("/cadastrar", function(req, res){  //insert 
    post.create({
        nome: req.body.name // referencia o butto9m htmk
}).then(function(){
    res.send("Dados enviados com sucesso!")
}).catch(function(erro){
    res.send("Falha ao enviar" + erro)
})
})

app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

