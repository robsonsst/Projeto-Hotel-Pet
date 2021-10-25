const crypto = require('crypto');
const connection = require('../dataBase/connection');


module.exports = {
    async list(req, res){
        const cliente = await connection('cliente').select('*');
        return res.json(cliente);
    },

    async show(req, res){
        const {id} = req.parametro;
        const cliente = await connection('cliente')
                    .where('id',id)
                    .select('*');
        return res.json(cliente);
    },
    


    async create(req,res){
        const {nome, sobrenome, email, telefone, caminhoImagem} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('cliente').insert({
            
            nome,
            sobrenome,
            email,
            telefone,
            caminhoImagem
        })
        return res.json({id})
    },

    async update(req, res){
        const {id} = req.parametro;
        const {nome, sobrenome, email, telefone, caminhoImagem} = req.body;
        await connection('cliente').where('id',id).update({
            
            nome,
            sobrenome,
            email,
            telefone,
            caminhoImagem
        })
        return res.status(204).send();
    },
    async delete(req, res){
        const {id} = req.parametro;
        await connection('cliente').where('id',id).delete();
        return res.status(204).send();

    }
}