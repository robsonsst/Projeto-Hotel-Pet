const express = require('express');

const app = express();
app.use(express.json());



app.get('/users', (req, res) =>{
    const parametro = req.query;
    console.log(parametro)
    res.json(parametro)
})

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

app.listen(3001);