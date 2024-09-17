const Complaint = require('../models/complaintModel');
const User = require('../models/userModels');

exports.addComplaint = async (req, res) => {
    try {
        const images = req.files.map(file => file.path);

        const { title, description, userId } = req.body;

        const userData = await User.findById(userId);
        userHostel = userData.hostel;

        const newComplaint = new Complaint({
            student: userId,
            title,
            hostel: userHostel,
            description,
            images: images,
        });

        const complaint = await newComplaint.save();
        console.log(complaint);

        return res.status(200).json({ message: 'Your complaint has been successfully submitted!' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.deleteComplaint = async (req, res) => {
    try {
        const { complaintId } = req.params.id;

        await Complaint.findByIdAndDelete(complaintId);

        return res.status(200).json({ message: 'Complaint deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.allComplaints = async (req, res) => {
    try {
        const { userId } = req.params.id;

        const userData = await User.findById(userId);

        const allComplaints = await Complaint.find({ student: userId });
        console.log(allComplaints);

        const responseData = {
            studentName: userData.name,
            hostel: userData.hostel,
            numberOfComplaints: allComplaints.length,
            complaints: allComplaints
        }

        return res.status(200).json(responseData);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
