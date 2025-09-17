const express = require('express');
const router = express.Router();
const { getBookings, createBooking, getBookingById, deleteBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/', getBookings);
router.post('/', createBooking);
router.get('/:id', getBookingById);
router.delete('/:id', deleteBooking);

module.exports = router;
