import React, { useState, useEffect } from "react";
import axios from "axios";

const BookConsultations = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    village: "",
    symptoms: ""
  });

  const [specialties, setSpecialties] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const API_BASE_URL = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/specialties`)
      .then((res) => setSpecialties(res.data))
      .catch(() => setError("Failed to load specialties"));
  }, []);

  useEffect(() => {
    if (selectedSpecialty) {
      axios
        .get(`${API_BASE_URL}/doctors/${selectedSpecialty}`)
        .then((res) => setDoctors(res.data))
        .catch(() => setError("Failed to load doctors"));
    }
  }, [selectedSpecialty]);

  useEffect(() => {
    if (selectedDoctor && selectedDate) {
      axios
        .get(`${API_BASE_URL}/slots/${selectedDoctor}/${selectedDate}`)
        .then((res) => setAvailableSlots(res.data))
        .catch(() => setError("Failed to load slots"));
    }
  }, [selectedDoctor, selectedDate]);

  const handleChange = (e) => {
    setPatientDetails({
      ...patientDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTimeSlot) {
      setError("Please select a time slot");
      return;
    }
    setLoading(true);
    axios
      .post(`${API_BASE_URL}/book`, {
        doctorId: selectedDoctor,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        patient: patientDetails
      })
      .then(() => {
        setSuccess("Consultation booked successfully!");
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Booking failed");
        setLoading(false);
      });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Book Video Consultation</h2>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Specialty</label>
            <select
              style={styles.input}
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              required
            >
              <option value="">Select specialty</option>
              {specialties.map((spec) => (
                <option key={spec._id} value={spec.name}>
                  {spec.name}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Doctor</label>
            <select
              style={styles.input}
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              <option value="">Select doctor</option>
              {doctors.map((doc) => (
                <option key={doc._id} value={doc._id}>
                  {doc.name} ({doc.experience} yrs)
                </option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Date</label>
            <input
              type="date"
              style={styles.input}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Time Slot</label>
            {availableSlots.length > 0 ? (
              <select
                style={styles.input}
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                required
              >
                <option value="">Select time slot</option>
                {availableSlots.map((slot) => (
                  <option key={slot.time} value={slot.time} disabled={slot.booked}>
                    {slot.time} {slot.booked ? "(Full)" : ""}
                  </option>
                ))}
              </select>
            ) : (
              <p style={styles.note}>No slots available for selected date</p>
            )}
          </div>

          <h3 style={styles.subHeading}>Patient Details</h3>

          {["name", "age", "phone", "village"].map((field) => (
            <div style={styles.formGroup} key={field}>
              <label style={styles.label}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                style={styles.input}
                name={field}
                type={field === "age" ? "number" : "text"}
                value={patientDetails[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div style={styles.formGroup}>
            <label style={styles.label}>Gender</label>
            <select
              style={styles.input}
              name="gender"
              value={patientDetails.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Symptoms</label>
            <textarea
              style={{ ...styles.input, height: "80px" }}
              name="symptoms"
              value={patientDetails.symptoms}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Booking..." : "Book Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "#f7f9fc",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px"
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
    textAlign: "center"
  },
  subHeading: {
    marginTop: "20px",
    marginBottom: "10px",
    color: "#444"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  formGroup: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555"
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
  button: {
    marginTop: "20px",
    padding: "12px",
    background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s"
  },
  error: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center"
  },
  success: {
    color: "green",
    fontWeight: "bold",
    textAlign: "center"
  },
  note: {
    fontSize: "13px",
    color: "#777"
  }
};

export default BookConsultations;