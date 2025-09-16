import React, { useState } from "react";

const DoctorDashboard = () => {
  const [personalInfo, setPersonalInfo] = useState({ gender: "", region: "" });
  const [professionalInfo, setProfessionalInfo] = useState({
    qualifications: [],
    department: "",
    consultations: []
  });
  const [schedule, setSchedule] = useState({});
  const [newQualification, setNewQualification] = useState("");
  const [newConsultation, setNewConsultation] = useState("");

  const handleSave = () => {
    alert("Profile saved successfully!");
  };

  const updatePersonalInfo = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const updateProfessionalInfo = (field, value) => {
    setProfessionalInfo(prev => ({ ...prev, [field]: value }));
  };

  const PersonalInfoForm = () => {
    const regions = ["North America", "South America", "Europe", "Asia", "Africa", "Oceania", "Middle East"];
    return (
      <div className="form-grid">
        <div className="form-group">
          <label>Gender</label>
          <select value={personalInfo.gender} onChange={(e) => updatePersonalInfo("gender", e.target.value)}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label>Region</label>
          <select value={personalInfo.region} onChange={(e) => updatePersonalInfo("region", e.target.value)}>
            <option value="">Select region</option>
            {regions.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>
    );
  };

  const ProfessionalInfoForm = () => {
    const departments = ["Cardiology", "Dermatology", "Emergency Medicine", "Endocrinology", 
      "Gastroenterology", "General Medicine", "Neurology", "Oncology", 
      "Orthopedics", "Pediatrics", "Psychiatry", "Radiology", "Surgery"];

    const addQualification = () => {
      if (newQualification.trim() && !professionalInfo.qualifications.includes(newQualification.trim())) {
        updateProfessionalInfo("qualifications", [...professionalInfo.qualifications, newQualification.trim()]);
        setNewQualification("");
      }
    };

    const addConsultation = () => {
      if (newConsultation.trim() && !professionalInfo.consultations.includes(newConsultation.trim())) {
        updateProfessionalInfo("consultations", [...professionalInfo.consultations, newConsultation.trim()]);
        setNewConsultation("");
      }
    };

    const removeItem = (arrayName, value) => {
      updateProfessionalInfo(arrayName, professionalInfo[arrayName].filter(v => v !== value));
    };

    return (
      <div className="space-y-4">
        <div className="form-group">
          <label>Department</label>
          <select value={professionalInfo.department} onChange={(e) => updateProfessionalInfo("department", e.target.value)}>
            <option value="">Select department</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>Qualifications</label>
          <div className="input-row">
            <input type="text" placeholder="Add qualification" value={newQualification} onChange={(e) => setNewQualification(e.target.value)} />
            <button type="button" onClick={addQualification}>Add</button>
          </div>
          <div className="tags">
            {professionalInfo.qualifications.map(q => (
              <span key={q} className="tag" onClick={() => removeItem("qualifications", q)}>{q} &times;</span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Consultations</label>
          <div className="input-row">
            <input type="text" placeholder="Add consultation type" value={newConsultation} onChange={(e) => setNewConsultation(e.target.value)} />
            <button type="button" onClick={addConsultation}>Add</button>
          </div>
          <div className="tags">
            {professionalInfo.consultations.map(c => (
              <span key={c} className="tag" onClick={() => removeItem("consultations", c)}>{c} &times;</span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ScheduleManagement = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

    const toggleDay = (day) => {
      setSchedule(prev => ({
        ...prev,
        [day]: { available: !prev[day]?.available, times: prev[day]?.times || [] }
      }));
    };

    const toggleTime = (day, time) => {
      setSchedule(prev => {
        const times = prev[day]?.times || [];
        const updatedTimes = times.includes(time) ? times.filter(t => t !== time) : [...times, time];
        return { ...prev, [day]: { ...prev[day], available: true, times: updatedTimes } };
      });
    };

    return (
      <div className="schedule-grid">
        {days.map(day => {
          const daySchedule = schedule[day] || { available: false, times: [] };
          return (
            <div key={day} className="schedule-card">
              <div className="flex-between">
                <strong>{day}</strong>
                <input type="checkbox" checked={daySchedule.available} onChange={() => toggleDay(day)} />
              </div>
              {daySchedule.available && (
                <div className="times">
                  {timeSlots.map(t => (
                    <button 
                      key={t} 
                      className={daySchedule.times.includes(t) ? "time-btn selected" : "time-btn"}
                      onClick={() => toggleTime(day, t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>Doctor Dashboard</h1>
        <p>Manage your profile and schedule</p>
      </header>

      <section className="section-card">
        <h2>Personal Info</h2>
        <PersonalInfoForm />
      </section>

      <section className="section-card">
        <h2>Professional Info</h2>
        <ProfessionalInfoForm />
      </section>

      <section className="section-card">
        <h2>Weekly Schedule</h2>
        <ScheduleManagement />
      </section>

      <div className="save-btn-container">
        <button className="save-btn" onClick={handleSave}>Save Profile</button>
      </div>

      <style>{`
        .dashboard-container {
          max-width: 1000px;
          margin: 20px auto;
          padding: 20px;
          font-family: 'Segoe UI', sans-serif;
          color: #333;
        }
        header h1 { font-size: 2.2rem; margin-bottom: 5px; }
        header p { color: #555; margin-bottom: 20px; }
        .section-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        .form-grid { display: flex; gap: 20px; flex-wrap: wrap; }
        .form-group { flex: 1; display: flex; flex-direction: column; margin-bottom: 10px; }
        .form-group label { margin-bottom: 6px; font-weight: 600; }
        .form-group input, .form-group select { padding: 10px; border-radius: 6px; border: 1px solid #ccc; }
        .input-row { display: flex; gap: 10px; margin-bottom: 10px; }
        .input-row input { flex: 1; }
        .input-row button { padding: 10px 15px; border: none; background: #006d92; color: white; border-radius: 6px; cursor: pointer; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { background: #e0f2f7; color: #006d92; padding: 4px 10px; border-radius: 20px; cursor: pointer; }
        .schedule-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; }
        .schedule-card { padding: 10px; border: 1px solid #ccc; border-radius: 8px; }
        .flex-between { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .times { display: flex; flex-wrap: wrap; gap: 5px; }
        .time-btn { padding: 5px 8px; border: 1px solid #ccc; border-radius: 6px; cursor: pointer; background: #f5f5f5; }
        .time-btn.selected { background: #006d92; color: white; border-color: #006d92; }
        .save-btn-container { text-align: right; margin-top: 10px; }
        .save-btn { background: #006d92; color: white; padding: 12px 20px; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
        .save-btn:hover { background: #005470; }
      `}</style>
    </div>
  );
};

export default DoctorDashboard;
