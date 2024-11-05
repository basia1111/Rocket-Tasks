const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
require('dotenv').config();

// Generates a JWT for the user
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

/**
 * @desc    Register a new user
 * @route   POST /users/register
 * @access  Public
 */
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        if (await User.findOne({ email })) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await new User({ name, email, password: hashedPassword }).save();

        return res.status(201).json({ user: newUser, token: generateToken(newUser._id) });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

/**
 * @desc    Login an existing user
 * @route   POST /users/login
 * @access  Public
 */
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token= generateToken(user._id)
        console.log(token)
        return res.status(200).json({ user, token: token });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = {
    registerUser,
    loginUser
};
