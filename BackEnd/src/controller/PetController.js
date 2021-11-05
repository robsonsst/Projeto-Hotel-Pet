const crypto = require('crypto');
const connection = require('../dataBase/connection');

module.exports = {
    async list(req, res) {
        const pet = await connection('pet').select('*');
        return res.json(pet);
    },

    async show(req, res) {
        const { id } = req.params;
        const pet = await connection('pet')
            .where('id', id)
            .select('*');
        return res.json(pet);
    },

    async create(req, res) {
        const { nome, tipo, raça, tamanho, imagemCaminho, idUsuario } = req.body;

        await connection('pet').insert({

            nome,
            tipo,
            raça,
            tamanho,
            imagemCaminho,
            idUsuario
        })
        return res.status(200).send();
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome, tipo, raça, tamanho, imagemCaminho, idUsuario } = req.body;
        await connection('pet').where('id', id).update({

            nome,
            tipo,
            raça,
            tamanho,
            imagemCaminho,
            idUsuario
        })
        return res.status(204).send();
    },

    async delete(req, res) {
        const { id } = req.params;
        await connection('pet').where('id', id).delete();
        return res.status(204).send();

    }
}