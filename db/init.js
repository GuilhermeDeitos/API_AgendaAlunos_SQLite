const Database = require('./config') //importa o arquivo config.js

const initDB = { //Objeto para iniciar as tabelas do banco de dados
  async init() { //async é necessario para usar o await, async e await são como gemeos siameses, um precisa do outro para funcionar
    const db = await Database() //await vai fazer esperar retornar um resultado antes de executar a próxima linha

    //Criar o banco de dados e iniciar ele(.exec())
    await db.exec(`CREATE TABLE IF NOT EXISTS alunos ( 
        cod_aluno INTEGER PRIMARY KEY,
        nome_aluno TEXT NOT NULL,
        telefone_aluno TEXT NOT NULL,
        data_nascimento_aluno TEXT NOT NULL,
        endereco_aluno TEXT NOT NULL,
        bairro_aluno TEXT NOT NULL,
        cidade_aluno TEXT NOT NULL,
        UF_aluno TEXT NOT NULL,
        email_aluno TEXT NOT NULL
    )`);
    
    //No banco de dados os comandos em SQL devem ser em maiusculo e o que não estiver em SQL em minusculo
    /*
    CREATE TABLE (para criar a tabela) nome da tabela(
      itens da tabela(
        nome da coluna,tipo da coluna,restrição da coluna
      )
    )
    */
   
    await db.close() //fechar o banco de dados
  }
} 

initDB.init(); //chamar o método init()
