// backend/routes/users.js
const express = require('express');
const router = express.Router();
const { getUsers, getProfile, updateProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// GET all users (protected route)
router.get('/', protect, getUsers);

// GET logged-in user's profile
router.get('/profile', protect, getProfile);

// UPDATE logged-in user's profile
router.put('/profile', protect, updateProfile);

module.exports = router;
