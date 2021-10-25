const crypto = require('crypto');
const connection = require('../dataBase/connection');


module.exports = {
    async list(req, res){
        const usuario = await connection('usuario').select('*');
        return res.json(usuario);
    },

    async show(req, res){
        const {id} = req.params;
        const usuario = await connection('usuario')
                    .where('id',id)
                    .select('*');
        return res.json(usuario);
    },
    


    async create(req,res){
        const {nome, sobrenome, email, telefone, status, criado_em, funcao, usuario, senha} = req.body;
       
        await connection('usuario').insert({
            nome,
            sobrenome,
            email,
            telefone,
            status,
            criado_em,
            funcao,
            usuario,
            senha
        })
        return  res.status(200).send();
    },

    async update(req, res){
        const {id} = req.params;
        const {nome, sobrenome, email, telefone, status, criado_em, funcao, usuario, senha} = req.body;
        await connection('usuario').where('id',id).update({
            nome,
            sobrenome,
            email,
            telefone,
            status,
            criado_em,
            funcao,
            usuario,
            senha
        })
        return res.status(204).send();
    },
    async delete(req, res){
        const {id} = req.params;
        await connection('usuario').where('id',id).delete();
        return res.status(204).send();

    }
}