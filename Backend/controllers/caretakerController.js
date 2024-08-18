const User = require('../models/userModels');
const Complaint = require('../models/complaintModel');

exports.getComplaints = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const hostelName = user.hostel;

        const complaints = await Complaint.find({ hostel: hostelName });
        return res.status(200).json(complaints);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const { complaintId, status } = req.body;

        const complaint = await Complaint.findByIdAndUpdate(
            complaintId,
            { status: status },
            { new: true }
        );

        if (!complaint) {
            return res.status(404).json({ error: 'Complaint not found' });
        }
        return res.status(200).json({ message: 'Status updated successfully', complaint });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
