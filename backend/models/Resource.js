const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['video', 'audio', 'guide'], required: true },
  category: { type: String, required: true },
  language: { type: String, required: true },
  duration: String,
  rating: Number,
  views: Number,
  description: String,
  thumbnail: String
}, { timestamps: true });

module.exports = mongoose.model('Resource', resourceSchema);
