const express = require("express");
const router = express.Router();
const { userLogin, userRegister, verifyEmail } = require('../controllers/authController');

router.post('/user-register', userRegister);
router.post('/user-login', userLogin);
router.post('/verify-email', verifyEmail);

module.exports = router;