const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const shop = require('../Controllers/Shop');
const authenticate = require('../middleware/AuthenticateToken');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());


router.post('/shop', shop.createShop);
router.get('/shop', shop.allShops);
router.get('/product-and-categories',shop.getProductsAndCategoryBasedOnShopName);
// router.get('/product/:id', product.getSingleProduct);
// router.delete('/product/:id', product.deleteProduct);
// router.post('/related-product/:id', product.getRelatedProducts);
// router.post('/suggested-product/:id', product.getSuggestedProducts);
// router.post('/suggested-multiple-product', product.getSuggestedMultipleProducts);
// router.get('/category-based-product', product.getProductBasedOnCategory);




module.exports = router;