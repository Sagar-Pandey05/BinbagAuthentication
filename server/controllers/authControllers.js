const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try{
        const { name, email, address, password } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' })
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            address,
            password: hashPassword
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' })
    }catch(err){
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: 'Invalid credentials' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials' })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({message: 'Login successful', token });
    }catch(err){
        res.status(500).json({ message: 'Server error', error: err.message });
    } 
}

module.exports = {
    register,
    login
}