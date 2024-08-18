const Complaint = require('../models/complaintModel');

exports.addComplaint = async (req, res) => {
    try {
        const { student, title, hostel, description, images } = req.body;

        const newComplaint = new Complaint({
            student,
            title,
            hostel,
            description,
            images,
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
        const { complaintId } = req.body;

        await Complaint.findByIdAndDelete(complaintId);

        return res.status(200).json({ message: 'Complaint deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.allComplaints = async (req, res) => {
    try {
        const { studentId } = req.body;

        const allComplaints = await Complaint.find({ student: studentId });
        console.log(allComplaints);

        return res.status(200).json(allComplaints);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
