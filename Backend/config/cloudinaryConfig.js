const cloudinary = require('cloudinary').v2;
require('dotenv').config();

console.log(process.env.CLOUDINARY_NAME);
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

module.exports = cloudinary;
