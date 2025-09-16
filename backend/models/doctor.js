const mongoose = require('mongoose');

const SlotSchema = new mongoose.Schema({
  date: String,
  time: String,
  booked: { type: Boolean, default: false }
});

const DoctorSchema = new mongoose.Schema({
  name: String,
  experience: Number,
  specialty: String,
  slots: [SlotSchema]
});

module.exports = mongoose.model('Doctor', DoctorSchema);
