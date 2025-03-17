const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: String,
  field: String,
  startYear: String,
  endYear: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Education", educationSchema);
