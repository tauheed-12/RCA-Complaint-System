const jwt = require('jsonwebtoken');

const authenticateToken = (req, res) => {
    const authHeader = req.headers['authorization'];
    const tokenStr = authHeader && authHeader.split(' ')[1];
    const token = JSON.parse(tokenStr);

    if (token == null) return res.json({ message: 'Invalid token' }, { status: 401 });

    jwt.verify(token, "", (err, user) => {
        if (err) return res.json({ message: "Invalid token" }, { stauts: 401 });
        req.user = user;
        next();
    })

}

module.exports = authenticateToken;
