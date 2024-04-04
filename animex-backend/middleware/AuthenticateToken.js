const jwt = require('jsonwebtoken');

exports.AuthenticateToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(403).json({
            'status': false,
            message: 'Sorry token is not available'
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json('Unauthenticated Failed to validate token');
        }
        req.userId = decoded.userId;

        next();
    });
} 
