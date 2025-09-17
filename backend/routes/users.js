// backend/routes/users.js
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// GET all users (protected route)
router.get('/', protect, getUsers);

module.exports = router;
