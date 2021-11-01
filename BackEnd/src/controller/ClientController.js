// const crypto = require('crypto');
// const connection = require('../dataBase/connection');


// module.exports = {
//     async list(req, res) {
//         const cliente = await connection('cliente').select('*');
//         return res.json(cliente);
//     },

//     async show(req, res) {
//         const { id } = req.params;
//         const cliente = await connection('cliente')
//             .where('id', id)
//             .select('*');
//         return res.json(cliente);
//     },

//     async create(req, res) {
//         const { nome, sobrenome, email, telefone, caminhoImagem } = req.body;

//         await connection('cliente').insert({

//             nome,
//             sobrenome,
//             email,
//             telefone,
//             caminhoImagem
//         })
//         return res.status(200).send();
//     },

//     async update(req, res) {
//         const { id } = req.params;
//         const { nome, sobrenome, email, telefone, caminhoImagem } = req.body;
//         await connection('cliente').where('id', id).update({

//             nome,
//             sobrenome,
//             email,
//             telefone,
//             caminhoImagem
//         })
//         return res.status(204).send();
//     },
//     async delete(req, res) {
//         const { id } = req.params;
//         await connection('cliente').where('id', id).delete();
//         return res.status(204).send();
//     }
// }