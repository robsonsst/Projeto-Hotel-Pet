const crypto = require('crypto');
const connection = require('../dataBase/connection');

module.exports = {
    async list(req, res) {
        const reserva = await connection('reserva').select('*');
        return res.json(reserva);
    },

    async show(req, res) {
        const { id } = req.params;
        const reserva = await connection('reserva')
            .where('id', id)
            .select('*');
        return res.json(reserva);
    },

    async create(req, res) {
        const { proprietario, notas, notasFuncionario, status, dataInicial, dataFinal, diaria, criacaoReserva, atualizacaoReserva, reciboCaminho, idPet, idUsuario } = req.body;

        await connection('reserva').insert({

            proprietario,
            notas,
            notasFuncionario,
            status,
            dataInicial,
            dataFinal,
            diaria,
            criacaoReserva,
            atualizacaoReserva,
            reciboCaminho,
            idPet,
            idUsuario
        })
        return res.status(200).send();
    },

    async update(req, res) {
        const { id } = req.params;
        const { proprietario, notas, notasFuncionario, status, dataInicial, dataFinal, diaria, criacaoReserva, atualizacaoReserva, reciboCaminho, idPet, idUsuario } = req.body;
        await connection('reserva').where('id', id).update({

            proprietario,
            notas,
            notasFuncionario,
            status,
            dataInicial,
            dataFinal,
            diaria,
            criacaoReserva,
            atualizacaoReserva,
            reciboCaminho,
            idPet,
            idUsuario
        })
        return res.status(204).send();
    },

    async delete(req, res) {
        const { id } = req.params;
        await connection('reserva').where('id', id).delete();
        return res.status(204).send();

    }
}