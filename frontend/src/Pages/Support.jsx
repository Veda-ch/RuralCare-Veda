import React, { useState } from "react";

export const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your message has been sent!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "10px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          textAlign: "center",
          color: "#4f46e5",
        }}
      >
        Support
      </h1>

      {/* Contact Information */}
      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>Contact Information</h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "5px", textAlign: "justify" }}>
          <strong>Phone:</strong> +91 12345 67890
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "5px", textAlign: "justify" }}>
          <strong>Email:</strong> support@ruralcare.com
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "5px", textAlign: "justify" }}>
          Our support team is available Monday to Saturday, 9:00 AM – 6:00 PM. We strive
          to respond to all queries within 24 hours.
        </p>
      </section>

      {/* Testimonials */}
      <section style={{ marginBottom: "25px" }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>What Our Users Say</h2>
        <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>
          <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
            "RuralCare support is amazing! I got timely guidance on booking a doctor and
            submitting my reports. Very user-friendly platform." – <strong>Priya S.</strong>
          </p>
        </div>
        <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "8px", marginBottom: "10px" }}>
          <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
            "I had some issues uploading my medical documents, and the support team
            responded within hours. Highly recommend RuralCare!" – <strong>Ramesh K.</strong>
          </p>
        </div>
        <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "8px" }}>
          <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
            "Excellent platform for rural healthcare. The support team is very helpful
            and patient." – <strong>Anita M.</strong>
          </p>
        </div>
      </section>


      {/* Support Form */}
      <section>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>Send us a message</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "10px", fontSize: "1.1rem" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "10px", fontSize: "1.1rem" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ padding: "10px", fontSize: "1.1rem" }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              fontSize: "1.2rem",
              backgroundColor: "#1E90FF",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};
