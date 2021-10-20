const express = require('express');

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('db.sqlite', (err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('conectado com sucesso')
});

const app = express();
app.use(express.json());

// aqui começa a criar as solicitações post get, pot, delet
//criação das rotas da tela usuario



app.get('/users', (req, res)=>{ //metodo get da tela usuario clicando no botão pesquisar

    const parametro = req.query;

    res.json(parametro)
} ) //retorna recebendo todos os parametros

app.get('/users/:id', (req, res)=>{ //metodo get da tela usuario clicando no botão pesquisar

    const parametro = req.query;

    res.json(parametro)
} ) //retorna recebendo Id como query

app.listen(3001);