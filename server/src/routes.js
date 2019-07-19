const router = require('express').Router();
const LivroController = require('./controllers/LivroController');

router.get('/livros', LivroController.index);
router.get('/livros/:id', LivroController.show);
router.post('/livros', LivroController.store);
router.put('/livros/:id', LivroController.update);
router.delete('/livros/:id', LivroController.destroy);

module.exports = router;