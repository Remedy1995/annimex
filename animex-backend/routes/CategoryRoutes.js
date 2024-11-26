const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const Category = require('../Controllers/Category')
const authenticate = require('../middleware/AuthenticateToken');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());


router.post('/category', Category.createCategory);
router.get('/category',Category.getAllCategory);




module.exports = router;