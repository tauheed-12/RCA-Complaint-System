const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hostel: {
        type: String,
        enum: ['HostelA', 'HostelB', 'HostelC'],
        required: true
    },
    roomNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isCareTaker: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
