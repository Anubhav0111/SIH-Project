// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // use your connectDB file
const app = express();
const PORT = process.env.PORT || 5000;

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/users');
const bookingRoutes = require('./routes/bookings'); // check the exact filename
const discussionRoutes = require('./routes/discussions');
const resourceRoutes = require('./routes/resources');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/resources', resourceRoutes);

// Sample route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Connect to MongoDB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
