const { Curso } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const cursos = await Curso.findAll();
            return res.status(200).json(cursos);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async show(req, res) {
        try {
            const curso = await Curso.findByPk(req.params.id);
            return res.status(200).json(curso);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async store(req, res) {
        try {
            const curso = await Curso.create(req.body);
            return res.status(201).json(curso);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async update(req, res) {
        try {
            const curso = await Curso.update(req.body, {
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
            const curso = await Curso.destroy({
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