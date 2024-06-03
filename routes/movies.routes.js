const router = require('express').Router();
const movies = require('../controllers/movies.controller');

router.get('/', movies.getAll);

router.get('/:id', movies.get);

router.post('/', movies.create);

router.put('/:id', movies.update);

router.delete('/:id', movies.delete);

router.post('/:id/category', movies.assigncategory);

router.delete('/:id/category', movies.deletecategory);

module.exports = router;