const express = require("express");
const router = express.Router();
const { userLogin, userRegister, verifyEmail, forgotPassword, verifyPasswordToken } = require('../controllers/authController');

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/verifyEmail', verifyEmail);
router.post('/forgotPassword', forgotPassword);
router.post('/verifyPassword', verifyPasswordToken);

module.exports = router;