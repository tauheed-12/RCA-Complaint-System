const nodemailer = require("nodemailer");
const uniqid = require("uniqid");
const User = require("../models/userModels");
require('dotenv').config();

const sendMail = async ({ email, emailType, userId }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
        });

        const hashedToken = uniqid();

        const updateFields =
            emailType === "VERIFY"
                ? { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 }
                : { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 };

        await User.findByIdAndUpdate(userId, updateFields);

        const mailOption = {
            from: 'sheikhtauheed75@gmail.com' || 'no-reply@yourdomain.com',
            to: email,
            subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password',
            html: `
                <p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">
                here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}.</p>
                <p>If the link doesn't work, copy and paste this URL into your browser: 
                ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>
            `,
        };

        const info = await transporter.sendMail(mailOption);
        console.log("Email sent: ", info);

    } catch (error) {
        console.error("Error in sending mail", error);
    }
};

module.exports = { sendMail };
