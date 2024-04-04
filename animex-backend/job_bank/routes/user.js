const express=require('express');
const auth=require('../middleware/auth');
const router=express.Router();
const bodyparser = require('body-parser');
const cors=require('cors');
const User=require('../controller/User');
const session=require("express-session");
// router.use(cors({credentials: true,allowedHeaders: ['Content-Type', 'Authorization'],origin: 'http://127.0.0.1:4200'}));
router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // Pass to next layer of middleware
    next();
});

var sess;
router.use(session({secret: 'ssshhhhh',saveUninitialized: false,resave: false}));
router.use(express.urlencoded({ extended: true }));
router.use(bodyparser.urlencoded({extended:false}));
router.use(bodyparser.json());
router.post('/createuser', User.createUser);
router.get('/blockeduser', auth,User.AllblockUsers);
router.post('/login',User.login);
router.get('/information',User.getCurrentUser);
router.post('/token',User.getRefreshToken);
router.delete('/logout',User.logout);

module.exports=router;