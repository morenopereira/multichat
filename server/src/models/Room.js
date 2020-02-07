const mongoose = require('../db');

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Message',
      default: [],
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Room', RoomSchema);

module.exports = User;
