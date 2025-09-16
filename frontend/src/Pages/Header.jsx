import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>RuralCare+</div>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/book" style={styles.link}>Book Appointment</Link></li>
          <li><Link to="/profile" style={styles.link}>Patient's Info</Link></li>
          <li><Link to="/history" style={styles.link}>History</Link></li>
          <li><Link to="/faqs" style={styles.link}>FAQs</Link></li>
          <li><Link to="/about" style={styles.link}>About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "500",
    transition: "color 0.3s",
  },
};

export default Header;
