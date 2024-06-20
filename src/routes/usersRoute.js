const { Router } = require('express');
const UserController = require('../controllers/UserController');

const userController = new UserController();

const router = Router();

router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/users/:id', (req, res) => userController.getOne(req, res));

router.post('/users', (req, res) => userController.post(req, res));

router.put('/users/:id', (req, res) => userController.update(req, res));

router.delete('/users/:id', (req, res) => userController.delete(req, res));


module.exports = router;