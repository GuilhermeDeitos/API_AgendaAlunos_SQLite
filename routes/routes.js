const express = require('express') //importa o express
const routes = express.Router() 
const Alunos = require('../models/alunoModels') //importa o arquivo com os metodos de manipulação de dados do banco de dados

routes.get('/alunos', (req,res) => { //Rota get para pegar os alunos do banco de dados
    Alunos.readAll(res) //listar todos os alunos do banco de dados
})

routes.get('/alunos/:id', (req, res) => {  //Rota get para pegar um aluno especifico do banco de dados a partir do id passado pela url
    const id = req.params.id //pega o id passado pela url

    Alunos.search(id, res) //buscar o aluno pelo código presente na rota pelo id
})
   
routes.post('/alunos', (req, res) => {  //Rota post para inserir um aluno no banco de dados
    Alunos.create(req, res) //adicionar o aluno no banco de dados  
}) 

routes.patch('/alunos/:id', (req, res) => { //Rota patch para atualizar um aluno no banco de dados a partir do id passado pela url
    const id = req.params.id //pega o id passado pela url
    Alunos.update(id,req, res) //atualizar o aluno no banco de dados a partir do id
})

routes.delete('/alunos/:id', (req, res) => { //Rota delete para deletar um aluno no banco de dados a partir do id passado pela url
    const id = req.params.id //pega o id passado pela url
    Alunos.delete(id, res) //deletar o aluno no banco de dados a partir do id
})

module.exports = routes //exporta as rotas para o arquivo routes.js