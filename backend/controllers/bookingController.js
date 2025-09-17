const Booking = require('../models/Booking');

// Get all bookings (admin)
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('user', 'name email');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new booking
const createBooking = async (req, res) => {
    try {
        const { user, date, time, notes } = req.body;

        const booking = await Booking.create({
            user,
            date,
            time,
            notes
        });

        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single booking
const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('user', 'name email');
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a booking
const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        await booking.remove();
        res.json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBookings,
    createBooking,
    getBookingById,
    deleteBooking
};
