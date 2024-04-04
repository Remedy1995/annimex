const User = require('../models/User');
const Response = require('../init/Response');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const createNewUser = async (req, res) => {

  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
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


const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      let newError = new Response(400, 'Sorry Invalid credentials entered', 'Failed');
      return res.status(400).json(newError.errorObject());
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1mZ" });
    var newSuccess = new Response(201, 'User has successfully signed in', token);
    return res.status(201).json(newSuccess.successObject());


  }
  catch (error) {
    newError = new Response(500, 'Internal Server Error', error.message);
    return res.status(500).json(newError.errorObject());
  }
}


module.exports = { LoginUser, createNewUser };