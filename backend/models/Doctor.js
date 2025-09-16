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
  password: { type: String, required: true },
  doctorId: { type: String, required: true, unique: true },
  slots: [SlotSchema]
});

module.exports = mongoose.model('Doctor', DoctorSchema);