const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
const auth = require("../middleware/auth");

// Doctor Signup
router.post("/signup", async (req, res) => {
  const { name, password, doctorId, specialization } = req.body;

  try {
    // Check if username or doctorId exists
    const existingDoctor = await Doctor.findOne({ 
      $or: [{ name }, { doctorId }] 
    });

    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new doctor
    const newDoctor = new Doctor({
      name,
      password: hashedPassword,
      doctorId,
      specialization,
    });

    await newDoctor.save();
    res.status(201).json({ message: "Doctor signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Doctor Login
router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ name });
    if (!doctor) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Doctor Dashboard (protected)
router.get("/dashboard", auth, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.patient).select("-password"); // req.patient comes from auth middleware
    res.json({ doctor });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
