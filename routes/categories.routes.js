const router = require('express').Router();
const categories = require('../controllers/categories.controller');

router.get('/', categories.getAll);

router.get('/:id', categories.get);

router.post('/', categories.create);

router.put('/:id', categories.update);

router.delete('/:id', categories.delete);

module.exports = router;