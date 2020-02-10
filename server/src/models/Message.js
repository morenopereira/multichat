const mongoose = require('../db');

const MessageSchema = new mongoose.Schema({
  value: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Message', MessageSchema);

module.exports = User;
