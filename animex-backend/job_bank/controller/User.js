const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();
let refreshTokens = [];
exports.createUser = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const olduser = await User.findOne({ email });
  if (olduser) {
    return res.status(400).send('User Already exists Please login');
  }
  const encryptedPassword = await bcrypt.hash(password, 10)
  const createUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    dob: req.body.dob,
    password: encryptedPassword,
    created_at: req.body.created_at,
    account_number: req.body.account_number,
    address: req.body.address,
    phone: req.body.phone,
    grant_access: true
  })
  //create token
  const token = jwt.sign({ user_id: createUser._id, email }, process.env.TOKEN_KEY,
    {
      expiresIn: "2h",
    }
  );
  //save user token
  createUser.token = token
  await createUser.save().then(docs => {
    res.status(200).json({ message: "User has been successfully created", docs })
  }).catch(error => {
    res.status(500).json({ message: error })
  })

}


exports.allUsers = async (req, res, next) => {
  await User.find({}).then(docs => {
    res.status(200).json({ "data": docs })
  }).catch(error => {
    res.status(400).json({ "message": error })
  })
}
//
exports.blockUser = (req, res, next) => {
  User.findById(req.params.id, function (err, information) {

    if (err) {
      res.status(500).json({ "error": err });
    }
    //let get the id of the selected user then we update grant_access from true to false;
    const selected_id = information._id;
    User.findByIdAndUpdate(selected_id, { "grant_access": "false" },
      function (err, docs) {
        if (err) {
          console.log(err.message)
        }
        if (docs) {
          res.status(200).json({ message: "you have successfully blocked this user", docs })
        }
      })
  })
}
//
exports.AllblockUsers = (req, res, next) => {
  //blocked users have a false grant access;
  User.find({ grant_access: 'false' }).then(docs => {
    res.json({ "data": docs })
  }).catch(error => {
    res.json({ message: error })
  })

}

exports.unblockUsers = (req, res, next) => {
  User.findById(req.params.id, function (err, information) {
    if (err) {
      res.status(500).json({ "error": err });
    }
    console.log(req.params.id)
    //let get the id of the selected user then we update grant_access from true to false;
    const selected_id = information._id;
    User.findByIdAndUpdate(selected_id, { "grant_access": "false" },
      function (err, docs) {
        if (err) {
          console.log(err.message)
        }
        if (docs) {
          res.status(200).json({ message: "you have successfully blocked this user", docs })
        }
      })

  })
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    req.session.email = req.body.email;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { email },
        process.env.TOKEN_KEY, {
        expiresIn: "1m"
      });
      //refresh_token
      const refreshtoken = jwt.sign(
        { email },
        process.env.REFRESH_TOKEN, {
        expiresIn: "2h"
      });
      // save user token
      user.token = token;
      res.cookie('token', token, {
        expires: new Date(Date.now() + 9999999),
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
      });
      refreshTokens.push(refreshtoken)

      res.status(200).send({ user, token: token, refreshtoken: refreshtoken });
      console.log(req.cookies.token)
      console.log('refresh token array', refreshTokens)
    }
    else {
      console.log('wrong details')
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here;
}

exports.getCurrentUser = (req, res, next) => {
  let email = req.session.email;
  User.findOne({ 'email': new RegExp(email, 'i') }, function (err, docs) {
    res.json(docs)
  }).select('-password').select('-grant_access').select('-token').select('-__v');

}

exports.getRefreshToken = async (req, res) => {
  let refreshtoken = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers['authorization'] || req.cookies.token;
  refreshtoken = refreshtoken.split(" ")[1];
  if (!refreshTokens.includes(refreshtoken) && !refreshtoken)
    return res.status(404).json({ message: 'Invalid refresh token' });
  console.log('token is', refreshtoken)

  try {

    console.log('refresh token is', refreshtoken)
    const user = jwt.verify(refreshtoken, process.env.REFRESH_TOKEN)
    const { email } = user;
    console.log('my email is', email)
    const accessToken = jwt.sign({ email },
      process.env.TOKEN_KEY, {
      expiresIn: "1h"
    });
    res.status(200).send({ token: accessToken })
  }
  catch (error) {
    res.status(404).send({ message: 'Invalid token' })
  }


}

exports.logout = (req, res) => {
  const refreshtoken = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers['authorization'] || req.cookies.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshtoken)
  refreshTokens.length = 0;
  console.log('no data available in', refreshTokens)
  res.sendStatus(204);
}









