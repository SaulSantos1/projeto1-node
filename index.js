const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<div style = 'display:flex;flex-direction: column;align-items: center; justify-content:center'><h1 style ='padding=2px;'>Bem</h1><h1 style ='padding=2px;'>Vindo</h1><h1 style ='padding=2px;'>Ao</h1><h1 style ='padding=2px;'>Meu</h1><h1 style ='padding=2px;'>Site!</h1><a href='/produtos'>Lista de produtos</a>")
})

app.get("/produtos", function(req,res){
    res.send("<div style = 'display:flex;flex-direction: column;align-items: center; justify-content:center'><h1 style ='padding=2px;'>Lista</h1><h1 style ='padding=2px;'>De</h1><h1 style ='padding=2px;'>Produtos</h1><a href='/'>Bem vindo ao meu site!</a>")
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Erro ao Iniciar.")
    }else{
        console.log("Servidor Iniciado.")
    }
})