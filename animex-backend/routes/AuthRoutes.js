const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const auth = require('../Controllers/User');
const middleware = require('../middleware/AuthenticateToken');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.post('/signup', auth.createNewUser);
router.post('/login', auth.LoginUser);
router.post('/register-customer',auth.createNewCustomer);
router.get('/customer-info',middleware.AuthenticateToken,auth.userInformation);


module.exports = router;