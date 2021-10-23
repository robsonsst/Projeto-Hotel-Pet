const express = require('express');
const routes = express.Router();

routes.get('/users', (req, res)=>{ //metodo get da tela usuario clicando no botão pesquisar

    const parametro = req.query;

    res.json(parametro)
} ) //retorna recebendo todos os parametros

routes.post('/usuario/pesquisa', (req, res)=>{ //metodo get da tela usuario clicando no botão pesquisar

    const parametro = req.body;
    
    res.json(parametro)
    // inicia a pesquisa com o banco

} ) //retorna recebendo Id como query


module.exports = routes;