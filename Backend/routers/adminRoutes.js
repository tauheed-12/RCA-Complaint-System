const express = require('express');
const router = express();
const authMiddleware = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');
const { getAllUsers, deleteUser, getAllComplaint, deleteComplaint } = require('../controllers/adminController');
const authenticateToken = require('../middlewares/authenticate');

router.get('/getusers', authMiddleware, authorize(["Admin"]), getAllUsers);
router.delete('/user/:id', authMiddleware, authorize(["Admin"]), deleteUser);
router.get('/:userid', authenticateToken, authorize(["Admin"]), getAllComplaint);
router.delete('/complaint/:cmpid', authenticateToken, authorize(["Admin"]), deleteComplaint);

module.exports = router;
