const User = require('../models/userModels');
const Complaint = require('../models/complaintModel');

exports.getComplaints = async (req, res) => {
    try {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const hostelName = user.hostel;
        const complaints = await Complaint.find({ hostel: hostelName });
        const userData = {
            name: user.name,
            hostel: user.hostel,
            roomNumber: user.roomNumber,
        };

        return res.status(200).json({ user: userData, complaints });
    } catch (error) {
        console.error("Error fetching complaints:", error);
        return res.status(500).json({ error: 'An internal server error occurred. Please try again later.' });
    }
};


exports.updateStatus = async (req, res) => {
    try {
        let { complaintId, status } = req.body;
        if (status === "Pending") {
            status = "In Progress";
        } else if (status === "In Progress") {
            status = "Resolved"
        }
        const complaint = await Complaint.findByIdAndUpdate(
            complaintId,
            { status: status },
            { updatedAt: Date.now() },
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
