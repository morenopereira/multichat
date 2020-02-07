const mongoose = require('../db');

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Room', RoomSchema);

module.exports = User;
