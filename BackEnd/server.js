const express = require('express');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());
const app = express();
app.use(express.json());

// aqui começa a criar as solicitações post get, pot, delet
//criação das rotas da tela usuario

app.get('/users', (req, res) =>{//metodo get da tela usuario clicando no botão pesquisar
    const parametro = req.query;
    console.log(parametro)
    res.json(parametro)
})//retorna recebendo todos os parametros

app.post('/users/:id', (req, res) =>{
    const parametro = req.params;
    console.log(parametro)
    res.json(parametro)
})

app.post('/users/', (req, res) =>{
    const parametro = req.body;
    console.log(parametro)
    res.json(parametro)
})

app.put('/users', (req, res) =>{
    res.json(parametro)
})

app.use(routes);

app.listen(3001);