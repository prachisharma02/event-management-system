const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rsvp: {
    type: Boolean,
    default: false,
  },
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
