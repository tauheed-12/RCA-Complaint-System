const express = require('express');
const router = express.Router();
const { addComplaint, deleteComplaint, allComplaints } = require('../controllers/studentController');
const authenticateToken = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize')

router.post('/addComplaint', authenticateToken, authorize(["Student", "Admin"]), addComplaint);
router.post('/deleteComplaint', authenticateToken, authorize(["Student", "Admin"]), deleteComplaint);
router.post('/allComplaints', authenticateToken, authorize(["Student", "Admin"]), allComplaints);

module.exports = router;