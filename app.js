const routes = require('./routes/routes') //importa o arquivo routes.js
const express = require('express') //importa o express
const sqlite3 = require('sqlite3').verbose() //importa o sqlite3
const server = express() //cria o servidor

const DBSOURCE = 'db/alunos.sqlite' //caminho para o arquivo do banco de dados

const db = new sqlite3.Database(DBSOURCE, (err) => { //Inicia o banco de dados
    //Verifica se o banco de dados foi iniciado, caso não tenha sido, retorna um erro
    if (err) {
        console.error(err.message) //Mensagem de erro
        throw err //lança o erro
    } else{ //caso tenha sido iniciado, executa os comandos abaixo
        console.log('Conectado ao banco de dados') //mensagem de conexão com o banco de dados
        server.use(express.urlencoded({extended: true})) //habilita o express para receber dados da url
        server.use(express.json()) //habilita o express para receber dados JSON

        server.use(routes) //Usa o arquivo routes.js
        server.listen(3000, () => console.log("Rodando na porta 3000")) //Inicia o servidor na porta 3000

    }
})

