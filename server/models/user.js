const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: false,
  },
  lastName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  bio: {
    type: String,
    required: false,
    unique: false,
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;