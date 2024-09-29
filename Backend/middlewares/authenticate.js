const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Invalid token' });

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        const user = await User.findById(decoded._id);

        if (!user) {
            throw new Error('User not found');
        }
        console.log('user Authenticated')
        req.user = user;
        next();

    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = authenticateToken;
