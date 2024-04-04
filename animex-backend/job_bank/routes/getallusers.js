const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const getallUsers=require('../controller/User');
const cors=require('cors');
router.use(cors());
router.get('/getallusers',getallUsers.allUsers);


module.exports=router;