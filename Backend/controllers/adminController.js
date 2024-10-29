const Complaint = require('../models/complaintModel');
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ isCareTaker: true });
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.query;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        await user.remove();
        res.json({ msg: 'User removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAllComplaint = async (req, res) => {
    try {
        const { userId } = req.query;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const complaints = await Complaint.find({});
        return res.status(200).json(complaints);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error');
    }
};

exports.addCareTaker = async (req, res) => {
    try {
        const { name, hostel, contact, password } = req.body;

        if (!name || !hostel || !contact || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const existingUser = await User.findOne({ email: contact });
        if (existingUser) {
            return res.status(409).json({ message: 'User with this contact already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            hostel,
            email: contact,
            password: hashedPassword,
            isCareTaker: true
        });

        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);

    } catch (error) {
        console.error('Error adding caretaker:', error);
        return res.status(500).send('Server error');
    }
}


