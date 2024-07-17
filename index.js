const express = require("express");//Importando o express
const app = express();//Atribuindo todo o express na variavel app

//Rota inicial
app.get("/", function (req, res) {
    res.send("Bem vindo ao guia do programador.");
});
//Rota alternativa
app.get("/blog", function (req, res) {
    res.send("Bem vindo ao meu blog!");
})

app.listen(4000, function (erro) {//Abrindo o servidor e o App = express inicia na porta 400 e com a funcao erro de verificacao
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})