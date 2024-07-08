const { Router } = require('express');
const ItemOrderController = require('../controllers/ItemOrderController');

const itemOrderController = new ItemOrderController();


const router = Router();

router.get('/itemOrder/:order_id', (req, res) => itemOrderController.getList(req, res));


module.exports = router;