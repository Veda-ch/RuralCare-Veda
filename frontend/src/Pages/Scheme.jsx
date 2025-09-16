import React from "react";
import "./Scheme.css";

export const Scheme = () => {
  return (
    <div
      className="scheme-container"
      style={{
        maxWidth: "1000px", // increased width
        margin: "0 auto",
        padding: "5px 15px", // reduced padding
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.8,
      }}
    >
      <h1
        className="scheme-title"
        style={{
          fontSize: "2.5rem",
          marginBottom: "15px",
          textAlign: "center",
          color: "#4f46e5",
        }}
      >
        Government & Healthcare Schemes
      </h1>

      <section className="scheme-section" style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>
          Ayushman Bharat – PM-JAY
        </h2>
        <p style={{ fontSize: "1.2rem", margin: 0, textAlign: "justify" }}>
          Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY) is one of
          the largest health insurance schemes in the world, aimed at providing
          financial protection to economically vulnerable families. Each eligible
          family is entitled to coverage of up to ₹5 lakhs per year for secondary
          and tertiary care hospitalization. The scheme not only reduces the
          financial burden of medical expenses but also ensures access to quality
          healthcare services across India. It covers over 1,500 medical procedures,
          including surgeries, therapies, and diagnostic tests, and works through a
          wide network of empaneled hospitals to make healthcare accessible and
          affordable for those who need it the most.
        </p>
      </section>

      <section className="scheme-section" style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>
          Janani Suraksha Yojana
        </h2>
        <p style={{ fontSize: "1.2rem", margin: 0, textAlign: "justify" }}>
          The Janani Suraksha Yojana (JSY) is a flagship scheme under the National
          Health Mission focused on reducing maternal and neonatal mortality. By
          providing direct cash incentives to pregnant women for institutional
          deliveries, JSY encourages safe childbirth practices, especially among
          marginalized communities. The program ensures that women have access
          to skilled birth attendants, timely medical care, and postnatal support.
          This scheme has significantly improved the rate of institutional deliveries
          in rural areas and has contributed to better health outcomes for mothers
          and newborns by reducing risks associated with home deliveries.
        </p>
      </section>

      <section className="scheme-section" style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>
          Rural Telemedicine Initiative
        </h2>
        <p style={{ fontSize: "1.2rem", margin: 0, textAlign: "justify" }}>
          The Rural Telemedicine Initiative aims to bridge the gap between urban
          specialists and rural populations, ensuring equitable access to healthcare.
          Through telemedicine centers, mobile applications, and trained local health
          workers, patients can consult with doctors remotely, receive follow-up
          care, and undergo preliminary diagnostics without traveling long distances.
          This initiative reduces the burden on overpopulated urban hospitals while
          empowering rural communities with timely medical advice. It also facilitates
          continuous monitoring of chronic illnesses and improves awareness of preventive
          healthcare practices, ultimately strengthening the overall rural healthcare
          ecosystem.
        </p>
      </section>
    </div>
  );
};
