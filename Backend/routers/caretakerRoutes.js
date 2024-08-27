const express = require('express');
const router = express.Router();
const { getComplaints, updateStatus } = require('../controllers/caretakerController');
const authenticateToken = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

router.get('/getComplaints', authenticateToken, authorize(['Caretaker', 'Admin']), getComplaints);
router.post('/updateStatus', authenticateToken, authorize(['Caretaker', 'Admin']), updateStatus);

module.exports = router;