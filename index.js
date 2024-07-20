const express = require("express");//Importando o express
const app = express();//Atribuindo todo o express na variavel app

// REQ => Dados que serao envidados pelo usuario
// RES => Dados que serao enviados pelo servidor

//Rota inicial
app.get("/", function (req, res) {
    res.send("Bem vindo ao guia do programador.");
});

//Rota utilizando parametro opcional e tratando
app.get("/blog/:artigo?", function (req, res) {
    var artigo = req.params.artigo;

    if (artigo) {
        res.send(artigo);
    } else {
        res.send("Bem vindo ao meu blog!")
    }
});

//Rota utilizando queryParams e tratando
app.get("/canal/youtube", function (req, res) {
    var canal = req.query["canal"];
    
    if (canal) {
        res.send(canal);
    } else {
        res.send("Nenhum canal foi fornecido!");
    }
});

//Abrindo o servidor e iniciando-o na porta 4000 e com a funcao erro de verificacao
app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
});