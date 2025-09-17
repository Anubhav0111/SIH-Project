// src/API.js
import axios from 'axios';

// Base URL of your backend
const BASE_URL = 'http://localhost:5000/api';

// Function to get JWT token from localStorage (after login)
const getToken = () => localStorage.getItem('token');

// -------- AUTH -------- //

// Register a new user
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/register`, userData);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, userData);
    // Save token in localStorage
    localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// -------- USERS -------- //

// Get all users (protected)
export const getUsers = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/users`, {
      headers: { Authorization: 'Bearer ' + getToken() },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// -------- BOOKINGS -------- //

// Get all bookings
export const getBookings = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/bookings`, {
      headers: { Authorization: 'Bearer ' + getToken() },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// Create a new booking
export const createBooking = async (bookingData) => {
  try {
    const res = await axios.post(`${BASE_URL}/bookings`, bookingData, {
      headers: { Authorization: 'Bearer ' + getToken() },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// -------- RESOURCES -------- //

export const getResources = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/resources`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// -------- DISCUSSIONS -------- //

export const getDiscussions = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/discussions`, {
      headers: { Authorization: 'Bearer ' + getToken() },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

export const createDiscussion = async (discussionData) => {
  try {
    const res = await axios.post(`${BASE_URL}/discussions`, discussionData, {
      headers: { Authorization: 'Bearer ' + getToken() },
    });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};
