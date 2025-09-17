const express = require('express');
const router = express.Router();
const { getAllResources } = require('../controllers/resourceController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAllResources);
router.get('/', getAllResources);

module.exports = router;
