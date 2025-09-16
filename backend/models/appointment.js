const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: String,
  timeSlot: String,
  patient: {
    name: String,
    age: Number,
    gender: String,
    phone: String,
    village: String,
    symptoms: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
