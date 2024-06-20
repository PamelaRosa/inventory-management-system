const { Router } = require('express');
const SuppliersController = require('../controllers/SuppliersController');

const suppliersController = new SuppliersController();

const router = Router();

router.get('/users', (req, res) => suppliersController.getAll(req, res));
router.get('/users/:id', (req, res) => suppliersController.getOne(req, res));

router.post('/users', (req, res) => suppliersController.post(req, res));

router.put('/users/:id', (req, res) => suppliersController.update(req, res));

router.delete('/users/:id', (req, res) => suppliersController.delete(req, res));


module.exports = router;