const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');

const categoryController = new CategoryController();

const router = Router();

router.get('/categories', (req, res) => categoryController.getAll(req, res));
router.get('/categories/:id', (req, res) => categoryController.getOne(req, res));

router.post('/categories', (req, res) => categoryController.post(req, res));

router.put('/categories/:id', (req, res) => categoryController.update(req, res));

router.delete('/categories/:id', (req, res) => categoryController.delete(req, res));


module.exports = router;