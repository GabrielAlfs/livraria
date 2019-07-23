const router = require('express').Router();
const LivroController = require('./controllers/LivroController');
const CursoController = require('./controllers/CursoController');
const AlunoController = require('./controllers/AlunoController');
const AlunoLivrosController = require('./controllers/AlunoLivrosController');

router.get('/livros', LivroController.index);
router.get('/livros/:id', LivroController.show);
router.post('/livros', LivroController.store);
router.put('/livros/:id', LivroController.update);
router.delete('/livros/:id', LivroController.destroy);

router.get('/cursos', CursoController.index);
router.get('/cursos/:id', CursoController.show);
router.post('/cursos', CursoController.store);
router.put('/cursos/:id', CursoController.update);
router.delete('/cursos/:id', CursoController.destroy);

router.get('/alunos', AlunoController.index);
router.get('/alunos/:id', AlunoController.show);
router.post('/alunos', AlunoController.store);
router.put('/alunos/:id', AlunoController.update);
router.delete('/alunos/:id', AlunoController.destroy);

router.get('/alunolivros', AlunoLivrosController.index);
router.post('/alunolivros', AlunoLivrosController.store);
router.delete('/alunolivros/:id', AlunoLivrosController.destroy);

module.exports = router;