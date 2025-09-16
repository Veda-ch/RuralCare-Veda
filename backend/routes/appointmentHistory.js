const express = require("express");
const router = express.Router();
const Appointment = require("../models/appointments");
const jwt = require("jsonwebtoken");

// Middleware: check login token
function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], "your_secret_key");
    req.user = decoded; // contains patientId / phone set during login
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// Get appointment history for logged-in patient
router.get("/appointments/history", authMiddleware, async (req, res) => {
  try {
    const phone = req.user.phone; // token contains phone (set at login)

    const appointments = await Appointment.find({ "patient.phone": phone })
      .populate("doctorId", "name specialty experience")
      .sort({ createdAt: -1 });

    res.json(appointments);
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;