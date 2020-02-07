const mongoose = require('../db');

const MessageSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  author: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Message', MessageSchema);

module.exports = User;
