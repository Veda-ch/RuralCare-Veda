const express = require('express');
const router = express.Router();
const Specialty = require('../models/Specialty');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const appointmentRoutes = require('./routes/appointments');
app.use('/', appointmentRoutes);

// Get all specialties
router.get('/specialties', async (req, res) => {
  try {
    const specialties = await Specialty.find({});
    res.json(specialties);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get doctors by specialty
router.get('/doctors/:specialty', async (req, res) => {
  try {
    const doctors = await Doctor.find({ specialty: req.params.specialty });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get available slots for doctor and date
router.get('/slots/:doctorId/:date', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    const slots = doctor.slots.filter(slot => slot.date === req.params.date);
    res.json(slots);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Book an appointment
router.post('/book', async (req, res) => {
  const { doctorId, date, timeSlot, patient } = req.body;

  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    const slotIndex = doctor.slots.findIndex(s => s.date === date && s.time === timeSlot);

    if (slotIndex === -1) return res.status(400).json({ message: 'Slot not found' });
    if (doctor.slots[slotIndex].booked) return res.status(400).json({ message: 'Slot already booked' });

    doctor.slots[slotIndex].booked = true;
    await doctor.save();

    const appointment = new Appointment({
      doctorId,
      date,
      timeSlot,
      patient
    });

    await appointment.save();

    res.json({ message: 'Appointment booked successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;