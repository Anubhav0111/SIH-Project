const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: String,
  author: String,
  replies: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Discussion', discussionSchema);
