const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const product = require('../Controllers/Product');
const authenticate = require('../middleware/AuthenticateToken');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());


router.post('/create-product', authenticate.AuthenticateToken, product.createProducts);

module.exports = router;