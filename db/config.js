const sqlite3 = require('sqlite3') //importa o sqlite3
const {open} = require('sqlite') //importa o sqlite 



module.exports = () => { //exporta o método que vai criar o arquivo do banco de dados
  open({
    filename: 'db/alunos.sqlite', //caminho para o arquivo do banco de dados e nome do arquivo
    driver: sqlite3.Database, //driver de qual banco de dados vamos usar (sqlite3)
  })
}