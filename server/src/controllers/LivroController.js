const { Livro } = require('../models');

module.exports = {
    async index(req, res) {
        try {
            const livros = await Livro.findAll();
            return res.status(200).json(livros);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async show(req, res) {
        try {
            const livro = await Livro.findByPk(req.params.id);
            return res.status(200).json(livro);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async store(req, res) {
        try {
            const livro = await Livro.create(req.body);
            return res.status(201).json(livro);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    async update(req, res) {
        try {
            const livro = await Livro.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).json({
                'updated': true,
                'data': req.body
            });
        } catch (err) {
            console.log(err);
            
            return res.status(400).json(err);
        }
    },
    async destroy(req, res) {
        try {
            const livro = await Livro.destroy({
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