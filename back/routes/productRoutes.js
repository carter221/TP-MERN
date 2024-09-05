
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.productsList);
router.post('/product/add', productController.productAdd);
router.put('/product/update/:id', productController.productUpdate);
router.delete('/product/delete/:id', productController.productDelete);
router.get('/product/:id', productController.productShow);
module.exports = router;
