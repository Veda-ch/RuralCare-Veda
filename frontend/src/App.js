import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Pages/Header";
import BookConsultations from "./Pages/BookConsultations";
import AppointmentHistory from "./Pages/AppointmentHistory";

// Public Pages
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { FAQ } from "./Pages/FAQ";
import { Scheme } from "./Pages/Scheme";
import { Support } from "./Pages/Support";

// Auth Pages
import { PatientLogin } from "./Pages/PatientLogin";
import { PatientSignup } from "./Pages/PatientSignup";
import { DoctorLogin } from "./Pages/DoctorLogin";

// Protected Pages
import { PatientDashboard } from "./Pages/PatientDashboard";
import { DoctorSignup } from "./Pages/DoctorSignup";
import DoctorDashboard from "./Pages/DoctorDashboard";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar/Header for all pages */}
        <Header />

        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/support" element={<Support />} />

          {/* Appointment-related pages */}
          <Route path="/book" element={<BookConsultations />} />
          <Route path="/history" element={<AppointmentHistory />} />
          <Route path="/profile" element={<h2>Patient Info Page (to be added)</h2>} />

          {/* Auth Pages */}
          <Route path="/patient-login" element={<PatientLogin />} />
          <Route path="/signup" element={<PatientSignup />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-signup" element={<DoctorSignup />} />


          {/* Protected Pages */}
          <Route path="/dashboard" element={<PatientDashboard />} />

          {/* Fallback for unknown routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
