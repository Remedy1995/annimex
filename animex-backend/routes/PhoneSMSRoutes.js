const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');
const Validator = require('../middleware/Validators');
const SMS = require('../Controllers/SmsController');


router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.post('/sendotp', SMS.PhoneNumberVerification);
router.post('/verifyotp', SMS.VerifyOTP);
router.post('/sendmessage', Validator.SendSMSValidator, SMS.SendMessage);



module.exports = router;