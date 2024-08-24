const express = require('express');
const router = express();
const authMiddleware = require('../middlewares/authenticate');
const { getAllUsers, deleteUser } = require('../controllers/adminController');

router.get('/getusers', authMiddleware, getAllUsers);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
