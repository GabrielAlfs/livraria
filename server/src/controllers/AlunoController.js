const { Aluno } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const alunos = await Aluno.findAll();
            return res.status(200).json(alunos);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async show(req, res) {
        try {
            const aluno = await Aluno.findByPk(req.params.id);
            return res.status(200).json(aluno);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async store(req, res) {
        try {
            const aluno = await Aluno.create(req.body);
            return res.status(201).json(aluno);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async update(req, res) {
        try {
            const aluno = await Aluno.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json({
                'updated': true,
                'data': req.body
            });
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async destroy(req, res) {
        try {
            const aluno = await Aluno.destroy({
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