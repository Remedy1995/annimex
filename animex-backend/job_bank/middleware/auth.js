const jwt = require("jsonwebtoken");

const config = process.env;
const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers['authorization'] || req.cookies.token;
  token = token.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'No token was provided' });

  jwt.verify(token, config.TOKEN_KEY, (err, user) => {
    if (!err) {
      req.user = user;
      next();
    }
    else {
      res.status(400).json({ message: 'User is not authenticated' });
    }

  })

}

module.exports = verifyToken;