const User = require('../models/User');
const Response = require('../init/Response');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Order = require('../models/Orders');


const userInformation = async (req,res)=> {
  const userId = req.userId;
  console.log('my userId',userId)
  try {
    const searchUser = await User.findOne({_id : userId}).select('-password -confirm_password -createdAt').exec();
    const orderInformation = await Order.findOne({ user: userId }).populate("billingAddress").populate("shippingAddress").select('-total -items -user -status -transaction_id -id')
    .exec();
    const concatObject = [...searchUser,...orderInformation]
    console.log('ordered informamtion',concatObject)
    var newSuccess = new Response(200, ...concatObject, 'Success');
     console.log('new ss',newSuccess)
    return res.status(200).json(newSuccess.successObject());
  }
  catch(error){
    let newError = new Response(500, 'Internal Server Error', error.message);
    return res.status(500).json(newError.errorObject());
  }
  
}
const createNewUser = async (req, res) => {

  const { username, email, password } = req.body;
  if (!username) {
    return res.status(422).json({
      status: false,
      message: 'Sorry Username is required'
    })
  }

  if (!email) {
    return res.status(422).json({
      status: false,
      message: 'Sorry Email is required'
    })
  }

  if (!password) {
    return res.status(422).json({
      status: false,
      message: 'Sorry Password  is required'
    })
  }

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const createUser = new User({
      username: username,
      email: email,
      password: hashedPassword
    });

    const response = await createUser.save();
    var newSuccess = new Response(201, 'You have successfully signed up', 'Success');
    return res.status(201).json(newSuccess.successObject());

  }

  catch (error) {
    //check if email already exist 
    if (error.code === 11000 & error.keyPattern && error.keyPattern, email) {
      var response = new Response(400, 'Sorry Email Address Already Exists', error.message);
      return res.status(400).json(response.errorObject());
    }
    response = new Response(500, 'Internal Server Error', error.message);
    return res.status(500).json(response.errorObject());
  }
}




const createNewCustomer = async (req, res) => {
    console.log('hhhhh')
  const { firstname, lastname, username, email, confirm_password, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const hashedConfirmPassword = bcrypt.hashSync(confirm_password, 10)
    const createUser = new User({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: hashedPassword,
      confirm_password: hashedConfirmPassword
    });

    const response = await createUser.save();
    var newSuccess = new Response(201, 'You have successfully signed up', 'Success');
    return res.status(201).json(newSuccess.successObject());

  }

  catch (error) {
    //check if email already exist 
    if (error.code === 11000 & error.keyPattern && error.keyPattern, email) {
      var response = new Response(400, 'Sorry Email Address Already Exists', error.message);
      return res.status(400).json(response.errorObject());
    }
    response = new Response(500, 'Internal Server Error', error.message);
    return res.status(500).json(response.errorObject());
  }
}

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(422).json({
      status: false,
      message: 'Sorry Email is required'
    })
  }

  if (!password) {
    return res.status(422).json({
      status: false,
      message: 'Sorry Password  is required'
    })
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      let newError = new Response(400, 'Sorry Invalid credentials either username or password is incorrect', 'Failed');
      return res.status(400).json(newError.errorObject());
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
    var newSuccess = new Response(200, 'User has successfully signed in', token);
    return res.status(200).json(newSuccess.successObject());


  }
  catch (error) {
    newError = new Response(500, 'Internal Server Error', error.message);
    return res.status(500).json(newError.errorObject());
  }
}


module.exports = { LoginUser, createNewUser, createNewCustomer,userInformation};