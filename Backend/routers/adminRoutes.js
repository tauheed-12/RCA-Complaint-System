const express = require('express');
const router = express();
const authorize = require('../middlewares/authorize');
const { getAllUsers, deleteUser, getAllComplaint, addCareTaker } = require('../controllers/adminController');
const { deleteComplaint } = require('../controllers/studentController');

const authenticateToken = require('../middlewares/authenticate');

router.get('/getUsers', authenticateToken, authorize(["Admin"]), getAllUsers);
router.get('/deleteUser', authenticateToken, authorize(["Admin"]), deleteUser);
router.get('/getAllComplaints', authenticateToken, authorize(["Admin"]), getAllComplaint);
router.get('/complaint', authenticateToken, authorize(["Admin"]), deleteComplaint);
router.post('/addCareTaker', authenticateToken, authorize(["Admin"]), addCareTaker);

module.exports = router;
