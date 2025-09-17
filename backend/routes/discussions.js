// backend/routes/discussions.js
const express = require('express');
const router = express.Router();
const { getAllDiscussions, createDiscussion } = require('../controllers/discussionController');
const { protect } = require('../middleware/authMiddleware'); // optional: protect routes

// GET all discussions
router.get('/', protect, getAllDiscussions);

// POST a new discussion
router.post('/', protect, createDiscussion);

module.exports = router;
