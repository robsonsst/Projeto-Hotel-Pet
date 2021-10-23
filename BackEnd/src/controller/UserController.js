const crypto = require('crypto');
const connetion = require('../dataBase/connection');


module.exports = {
    async list(req, res){
        const users = await connection('users').select('*');
        return res.json(users);
    },

    async show(req, res){
        const {id} = req.parametro;
        const user = await connection('users')
                    .where('id',id)
                    .select('*');
        return res.json(user);
    },
    


    async create(req,res){
        const {nome, email, idade, empresa} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('users').insert({
            id,
            nome,
            email,
            idade,
            empresa
        })
        return res.json({id})
    },

    async update(req, res){
        const {id} = req.parametro;
        const {nome, email, idade, empresa} = req.body;
        await connection('users').where('id',id).update({
            id,
            nome,
            email,
            idade,
            empresa
        })
        return res.status(204).send();
    },
    async delete(req, res){
        const {id} = req.parametro;
        await connection('users').where('id',id).delete();
        return res.status(204).send();

    }
}