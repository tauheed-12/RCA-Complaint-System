const Complaint = require('../models/complaintModel');
const User = require('../models/userModels');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
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
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const complaints = Complaint.find({});
        return res.json(complaints).status(200);
    } catch (error) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }
}

exports.deleteComplaint = async (req, res) => {
    try {
        const { complaintId } = req.params.id;

        await Complaint.findByIdAndDelete(complaintId);

        return res.status(200).json({ message: 'Complaint deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
