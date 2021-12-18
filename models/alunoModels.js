const Database = require('../db/config') //importa o arquivo config.js que contem as configurações do banco de dados

class Alunos{ //class Alunos que terá os métodos de CRUD envolvendo o banco de dados
     //Async será utilizado para aguardar a conclusão da função para continuar o fluxo do código
    async create(req,res){
        const db = await Database() //Abre a conexão com o banco de dados e armazena na variável db
        const aluno = req.body //Pega o corpo da requisição e armazena na variável aluno
        await db.run(`INSERT INTO alunos (nome_aluno, telefone_aluno, data_nascimento_aluno, endereco_aluno, bairro_aluno, cidade_aluno, UF_aluno, email_aluno) VALUES (?,?,?,?,?,?,?,?)`, [aluno.nome_aluno, aluno.telefone_aluno, aluno.data_nascimento_aluno, aluno.endereco_aluno, aluno.bairro_aluno, aluno.cidade_aluno, aluno.UF_aluno, aluno.email_aluno]) //Insere os dados na tabela alunos 
        await db.close() //Fecha a conexão com o banco de dados
        return res.status(200).json({ //Retorna uma resposta com o código 200 uma mensagem de sucesso
            message: 'Aluno cadastrado com sucesso!'
        })
    }

    async readAll(res){  //Método para listar todos os alunos
        const db = await Database() 
        const alunos = await db.all(`SELECT * FROM alunos`) //Seleciona todos os alunos da tabela alunos e armazena na variável alunos
        await db.close()
        return res.status(200).json(alunos) //Retorna uma resposta com o código 200 e os alunos que foram listados
    }

    async search(id,res){ //Método para buscar um aluno pelo id
        const db = await Database() 
        const aluno = await db.get(`SELECT * FROM alunos WHERE cod_aluno = ${id} `) //Seleciona o aluno da tabela alunos que tenha o id igual ao id passado como parâmetro
        await db.close() 
        return res.status(200).json(aluno) //Retorna uma resposta com o código 200 e o aluno que foi buscado
    }

    async update(id,req,res){ //Método para atualizar um aluno
        const db = await Database()
        const aluno = req.body //Pega o corpo da requisição e armazena na variável aluno
        await db.run(`UPDATE alunos SET nome_aluno = COALESCE(?,nome_aluno), telefone_aluno = COALESCE(?,telefone_aluno), data_nascimento_aluno = COALESCE(?,data_nascimento_aluno), endereco_aluno = COALESCE(?,endereco_aluno), bairro_aluno = COALESCE(?,bairro_aluno), cidade_aluno = COALESCE(?,cidade_aluno), UF_aluno = COALESCE(?,UF_aluno), email_aluno = COALESCE(?,email_aluno) WHERE cod_aluno = ?`, [aluno.nome_aluno, aluno.telefone_aluno, aluno.data_nascimento_aluno, aluno.endereco_aluno, aluno.bairro_aluno, aluno.cidade_aluno, aluno.UF_aluno, aluno.email_aluno, id]) //Atualiza os dados do aluno na tabela alunos que tenha o id igual ao id passado como parâmetro 
        await db.close()
        return res.status(200).json({ //Retorna uma resposta com o código 200 e uma mensagem de sucesso
            message: 'Aluno atualizado com sucesso!'
        }) 
    }

    async delete(id,res){ //Método para deletar um aluno
        const db = await Database()
        await db.run(`DELETE FROM alunos WHERE cod_aluno = ${id}`) //Deleta o aluno da tabela alunos que tenha o id igual ao id passado como parâmetro
        await db.close()
        return res.status(200).json({ //Retorna uma resposta com o código 200 e uma mensagem de sucesso
            message: 'Aluno deletado com sucesso!'
        })
    }




}

module.exports = new Alunos //Exporta a classe Alunos