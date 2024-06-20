const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');

const categoryController = new CategoryController();

const router = Router();

router.get('/users', (req, res) => categoryController.getAll(req, res));
router.get('/users/:id', (req, res) => categoryController.getOne(req, res));

router.post('/users', (req, res) => categoryController.post(req, res));

router.put('/users/:id', (req, res) => categoryController.update(req, res));

router.delete('/users/:id', (req, res) => categoryController.delete(req, res));


module.exports = router;