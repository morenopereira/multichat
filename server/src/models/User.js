const mongoose = require('../db');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  nickName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  birthday: {
    type: String,
  },
  restriction: {
    type: Boolean,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
