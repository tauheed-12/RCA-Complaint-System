const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const tokenStr = authHeader && authHeader.split(' ')[1];
    const token = JSON.parse(tokenStr);
    console.log(token);

    if (token == null) return res.json({ message: 'Invalid token' }, { status: 401 });

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await User.findById(decoded._id);

        if (!user) {
            throw new Error();
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }

}

module.exports = authenticateToken;
