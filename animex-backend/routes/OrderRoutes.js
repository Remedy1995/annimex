const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const orders = require('../Controllers/Order');
const authenticate = require('../middleware/AuthenticateToken');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());


router.post('/orders', authenticate.AuthenticateToken,orders.Orders);
router.get('/get-order-info',authenticate.AuthenticateToken,orders.getOrderInformation);
// router.get('/product', product.allProducts);
// router.get('/product/:id', product.getSingleProduct);
// router.delete('/product/:id', product.deleteProduct);
// router.post('/related-product/:id', product.getRelatedProducts);
// router.post('/suggested-product/:id', product.getSuggestedProducts);
// router.post('/suggested-multiple-product', product.getSuggestedMultipleProducts);
// router.get('/category-based-product', product.getProductBasedOnCategory);




module.exports = router;