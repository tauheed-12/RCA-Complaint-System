const Complaint = require('../models/complaintModel');
const User = require('../models/userModels');
const cloudinary = require('../config/cloudinaryConfig');

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
        const { complaintId } = req.query;

        const complaint = await Complaint.findById(complaintId);
        if (!complaint) {
            return res.status(404).json({ error: 'Complaint not found' });
        }

        const deletePromises = complaint.images.map(async (imageUrl) => {
            const publicId = imageUrl.split('/').pop().split('.')[0];
            return cloudinary.uploader.destroy(publicId);
        });

        await Promise.all(deletePromises);
        console.log('All images deleted from Cloudinary');

        await Complaint.findByIdAndDelete(complaintId);
        console.log('Complaint deleted successfully');

        return res.status(200).json({ message: 'Complaint and images deleted successfully' });
    } catch (error) {
        console.error('Error deleting complaint and images:', error);
        return res.status(500).json({ error: error.message });
    }
};

exports.allComplaints = async (req, res) => {
    try {
        const { userId } = req.query;
        console.log(userId);

        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const userData = await User.findById(userId);
        if (!userData) {
            return res.status(404).json({ error: "User not found" });
        }

        const allComplaints = await Complaint.find({ student: userId });

        const responseData = {
            studentName: userData.name,
            hostel: userData.hostel,
            numberOfComplaints: allComplaints.length,
            complaints: allComplaints,
        };

        return res.status(200).json({ responseData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

