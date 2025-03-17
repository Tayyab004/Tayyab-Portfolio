import React, { useEffect, useState } from "react";

const EducationPage = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/education")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch((err) => console.error("Error fetching education:", err));
  }, []);

  return (
    <div className="education-container">
      <h2 className="education-title">Education & Certifications</h2>
      <div className="education-list">
        {education.map((e) => (
          <div key={e._id} className="education-card">
            <h3>{e.institution}</h3>
            <p>
              Degree: {e.degree} - {e.field}
            </p>
            <p>
              Years: {e.startYear} - {e.endYear}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
