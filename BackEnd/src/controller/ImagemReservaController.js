const crypto = require('crypto');
const connection = require('../dataBase/connection');


module.exports = {
    async list(req, res) {
        const imagemReserva = await connection('imagemReserva').select('*');
        return res.json(imagemReserva);
    },

    async show(req, res) {
        const { id } = req.params;
        const imagemReserva = await connection('imagemReserva')
            .where('id', id)
            .select('*');
        return res.json(imagemReserva);
    },

    async create(req, res) {
        const { caminhoImagem, idReservas } = req.body;

        await connection('imagemReserva').insert({

            caminhoImagem,
            idReservas
        })
        return res.status(200).send();
    },

    async update(req, res) {
        const { id } = req.params;
        const { caminhoImagem, idReservas } = req.body;
        await connection('imagemReserva').where('id', id).update({

            caminhoImagem,
            idReservas
        })
        return res.status(204).send();
    },
    async delete(req, res) {
        const { id } = req.params;
        await connection('imagemReserva').where('id', id).delete();
        return res.status(204).send();
    }
}