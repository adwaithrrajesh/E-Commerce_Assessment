const { Router } = require('express');
const controller = require('../controller/productController')
const router = Router();


router.post('/addProduct', controller.insertProduct);


module.exports = router;