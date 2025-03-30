const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            message: 'User profile fetched successfully',
            name: user.name,
            email: user.email,
            address: user.address,
            bio: user.bio,
            profilePicture: user.profilePicture
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

const updateUserProfile = async (req, res) => {

    try {
        console.log(req.body);
        const user = await User.findById(req.user.id);
        const { name, email, address, password, bio, profilePicture } = req.body;
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (name) {
            user.name = name;
        }
        if (email) {
            user.email = email;
        }
        if (address) {
            user.address = address;
        }
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }
        if (bio) {
            user.bio = bio;
        }
        if (profilePicture) {
            user.profilePicture = profilePicture;
        }
        await user.save();
        res.status(200).json({ message: 'User profile updated successfully' });
    } catch (err) { 
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}
module.exports = { getUserProfile, updateUserProfile };
