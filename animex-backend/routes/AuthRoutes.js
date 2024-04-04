const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const auth = require('../Controllers/User');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.post('/signup', auth.createNewUser);
router.post('/login', auth.LoginUser);


module.exports = router;