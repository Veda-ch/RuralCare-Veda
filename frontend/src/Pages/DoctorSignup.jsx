// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const DoctorSignup = ({ onClose }) => {
//   const [doctorId, setDoctorId] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage("⚠️ Passwords do not match!");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/doctor/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ doctorId, username, password }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setMessage("✅ Signup Successful! Please login.");
//       } else {
//         setMessage(data.message);
//       }
//     } catch (err) {
//       setMessage("⚠️ Server error. Try again.");
//     }
//   };

//   // Styles
//   const pageStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh", // so it adapts even on smaller screens
//     backgroundColor: "#f4f6f8",
//     padding: "20px",
//   };

//   const boxStyle = {
//     background: "white",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//     width: "100%",
//     maxWidth: "400px", // ensures it fits
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "12px",
//     marginBottom: "14px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     fontSize: "14px",
//   };

//   const buttonStyle = {
//     width: "100%",
//     padding: "12px",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "15px",
//     fontWeight: "bold",
//     cursor: "pointer",
//     backgroundColor: "#006d92",
//     color: "white",
//   };

//   return (
//     <div style={pageStyle}>
//       <div style={boxStyle}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
//           Doctor Sign Up
//         </h2>
//         <form onSubmit={handleSignup}>
//           <label>Doctor ID:</label>
//           <input
//             type="text"
//             placeholder="Enter Doctor ID"
//             style={inputStyle}
//             value={doctorId}
//             onChange={(e) => setDoctorId(e.target.value)}
//           />

//           <label>Username:</label>
//           <input
//             type="text"
//             placeholder="Enter username"
//             style={inputStyle}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <label>New Password:</label>
//           <input
//             type="password"
//             placeholder="Enter new password"
//             style={inputStyle}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             placeholder="Confirm password"
//             style={inputStyle}
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />

//           <button type="submit" style={buttonStyle}>
//             SIGN UP
//           </button>
//         </form>

//         {message && (
//           <p style={{ marginTop: "10px", textAlign: "center", color: "red" }}>
//             {message}
//           </p>
//         )}

//         <p
//           style={{ marginTop: "20px", textAlign: "center", fontSize: "14px" }}
//         >
//           Already have an account?{" "}
//           <a
//             href="/doctor-login"
//             style={{ color: "#006d92", textDecoration: "none" }}
//           >
//             Sign in
//           </a>
//         </p>

//         {/* Close Button */}
//         <button
//           style={{
//             ...buttonStyle,
//             marginTop: "10px",
//             backgroundColor: "#6b7280",
//           }}
//           onClick={() => {
//             if (onClose) {
//               onClose(); // closes box if passed as prop
//             } else {
//               navigate("/"); // fallback: go home
//             }
//           }}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DoctorSignup = ({ onClose }) => {
  const [doctorId, setDoctorId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("⚠️ Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/doctor/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctorId, name, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Signup Successful! Please login.");
        setTimeout(() => navigate("/doctor-login"), 1000);
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("⚠️ Server error. Try again.");
    }
  };

  // Styles
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    padding: "20px",
  };

  const boxStyle = {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: "#006d92",
    color: "white",
  };

  return (
    <div style={pageStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Doctor Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <label>Doctor ID:</label>
          <input
            type="text"
            placeholder="Enter Doctor ID"
            style={inputStyle}
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
          />

          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>New Password:</label>
          <input
            type="password"
            placeholder="Enter new password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm password"
            style={inputStyle}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" style={buttonStyle}>
            SIGN UP
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "10px", textAlign: "center", color: "red" }}>
            {message}
          </p>
        )}

        <p
          style={{ marginTop: "20px", textAlign: "center", fontSize: "14px" }}
        >
          Already have an account?{" "}
          <a
            href="/doctor-login"
            style={{ color: "#006d92", textDecoration: "none" }}
          >
            Sign in
          </a>
        </p>

        {/* Close Button */}
        <button
          style={{
            ...buttonStyle,
            marginTop: "10px",
            backgroundColor: "#6b7280",
          }}
          onClick={() => {
            if (onClose) {
              onClose();
            } else {
              navigate("/");
            }
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
