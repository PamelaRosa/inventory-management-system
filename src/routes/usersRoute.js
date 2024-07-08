const { Router } = require('express');
const UserController = require('../controllers/UserController');
const SupplierController = require('../controllers/SupplierController');
const ProductController = require('../controllers/ProductController');
const OrderController = require('../controllers/OrderController');

const userController = new UserController();
const supplierController = new SupplierController();
const productController = new ProductController();
const orderController = new OrderController();

const router = Router();

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/users/:id', (req, res) => userController.getById(req, res));
router.post('/users', (req, res) => userController.post(req, res));
router.put('/users/:id', (req, res) => userController.update(req, res));
router.delete('/users/:id', (req, res) => userController.delete(req, res));

// Suppliers
router.get('/users/:user_id/suppliers', (req, res) => supplierController.getList(req, res));
router.get('/users/:user_id/suppliers/:cnpj', (req, res) => supplierController.getOne(req, res));

router.post('/users/:user_id/suppliers', (req, res) => supplierController.post(req, res));
router.put('/users/:user_id/suppliers/:id', (req, res) => supplierController.update(req, res));
router.delete('/users/:user_id/suppliers/:id', (req, res) => supplierController.delete(req, res));


// Products 
router.get('/users/:user_id/products', (req, res) => productController.getList(req, res));
router.get('/users/:user_id/products/:id', (req, res) => productController.getOne(req, res));

router.post('/users/:user_id/products', (req, res) => productController.post(req, res));
router.put('/users/:user_id/products/:id', (req, res) => productController.update(req, res));
router.delete('/users/:user_id/products/:id', (req, res) => productController.delete(req, res));

// Orders 
router.get('/users/:user_id/orders', (req, res) => orderController.getList(req, res));
router.get('/users/:user_id/orders/:id', (req, res) => orderController.getOne(req, res));

router.post('/users/:user_id/orders', (req, res) => orderController.post(req, res));
router.put('/users/:user_id/orders/:id', (req, res) => orderController.update(req, res));
router.delete('/users/:user_id/orders/:id', (req, res) => orderController.delete(req, res));


module.exports = router;