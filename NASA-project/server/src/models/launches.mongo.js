const mongoose = require("mongoose");

const launchSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
  customers: {
    type: [String],
  },
});

module.exports = mongoose.model("launch", launchSchema);
