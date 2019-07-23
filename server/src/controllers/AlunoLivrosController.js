const { AlunoLivros } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const alunoLivros = await AlunoLivros.findAll();
            return res.status(200).json(alunoLivros);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async store(req, res) {
        try {
            const alunoLivro = await AlunoLivros.create(req.body);
            return res.status(201).json(alunoLivro);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async destroy(req, res) {
        try {
            const alunoLivro = await AlunoLivros.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json({
                'deleted': true
            });
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}