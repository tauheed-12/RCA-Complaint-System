const express = require("express");
const router = express.Router();
const { userLogin, userRegister, verifyEmail } = require('../controllers/authController');

router.post('/userRegister', userRegister);
router.post('/userLogin', userLogin);
router.post('/verifyEmail', verifyEmail);

module.exports = router;