const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = {
    tokenValidate : (req,res,next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
    
        if(!token) return res.status(404).json({message: 'Token Invalid!'});
    
        try {
            const secret = process.env.SECRET;
            jwt.verify(token,secret);
            next();
    
        } catch (err) {
            res.status(400).json({message: 'Invalid Token!'});
        }
    }
}

module.exports = authMiddleware;