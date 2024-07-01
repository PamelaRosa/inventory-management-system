const { Router } = require('express');
const UserController = require('../controllers/UserController');
const SupplierController = require('../controllers/SupplierController');

const userController = new UserController();
const supplierController = new SupplierController();

const router = Router();

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/users/:id', (req, res) => userController.getById(req, res));
router.post('/users', (req, res) => userController.post(req, res));
router.put('/users/:id', (req, res) => userController.update(req, res));
router.delete('/users/:id', (req, res) => userController.delete(req, res));

// Supplier
router.get('/users/:user_id/suppliers', (req, res) => userController.getSuppliers(req, res));
router.get('/users/:user_id/suppliers/:cnpj', (req, res) => supplierController.getOne(req, res));

router.post('/users/:user_id/suppliers', (req, res) => supplierController.post(req, res));
router.put('/users/:user_id/suppliers/:id', (req, res) => supplierController.update(req, res));
router.delete('/users/:user_id/suppliers/:id', (req, res) => supplierController.delete(req, res));

module.exports = router;