const jwt = require('jsonwebtoken');
const User = require('../models/user');

const protect = async (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: "Not authorized, no token provided" });
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        next();
    } catch (err) {
        res.status(401).json({ message: "Not authorized" });
    }
};

module.exports = protect;