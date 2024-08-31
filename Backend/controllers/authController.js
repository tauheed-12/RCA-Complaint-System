const bcrypt = require('bcryptjs');
const User = require('../models/userModels');
const { sendMail } = require('../helper/sendEmail');
const jwt = require('jsonwebtoken');

exports.userRegister = async (req, res) => {
    try {
        const { name, email, hostel, password, isCareTaker, isAdmin } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        let role = "";
        isCareTaker ? role = "Caretaker" : isAdmin ? role = "Admin" : role = "Student"

        const newUser = new User({
            name,
            email,
            hostel,
            password: hashedPassword,
            isCareTaker,
            isAdmin,
            role: role
        });
        console.log(newUser);

        const savedUser = await newUser.save();
        console.log(savedUser);

        await sendMail({ email, emailType: "VERIFY", userId: savedUser._id });

        return res.status(200).json({ message: "Verify your email" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }

        if (!user.isVerified) {
            await sendMail({ email, emailType: "VERIFY", userId: user._id });
            return res.status(400).json({ message: "User is not verified, please verify via mail" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "30m" });
        console.log(token);

        return res.status(200).json({
            message: "User logged in successfully",
            token,
            userId: user._id,
            isAdmin: user.isAdmin,
            isCareTaker: user.isCareTaker,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.verifyEmail = async (req, res) => {
    try {
        const { token } = req.body;
        console.log(token);

        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid token details" });
        }

        console.log(user);

        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save();

        return res.status(200).json({
            message: "Email verified successfully",
            success: true,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.find({ email: email });

        if (!user) {
            return res.status(400).json({ error: "Invalid email details" });
        }
        await sendMail(email, "ForgotPassword", user._id);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.verifyPasswordToken = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        console.log(token);

        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid token details" });
        }

        const hashedPassword = bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.save();
        return res.status(200).json({ message: "Successfully reset!!" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
