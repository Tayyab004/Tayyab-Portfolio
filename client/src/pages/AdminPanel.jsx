import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const token = localStorage.getItem("token") || "";
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);

  const [projForm, setProjForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    repoLink: "",
    deployedUrl: "",
  });

  const [eduForm, setEduForm] = useState({
    institution: "",
    degree: "",
    field: "",
    startYear: "",
    endYear: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/project")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(console.error);

    fetch("http://localhost:5000/api/education")
      .then((res) => res.json())
      .then((data) => setEducation(data))
      .catch(console.error);
  }, []);

  // handle change
  const handleProjChange = (e) => {
    setProjForm({ ...projForm, [e.target.name]: e.target.value });
  };
  const handleEduChange = (e) => {
    setEduForm({ ...eduForm, [e.target.name]: e.target.value });
  };

  // CREATE Project
  const handleProjCreate = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Not authorized");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(projForm),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Error creating project");
        return;
      }
      setProjects([data, ...projects]);
      setProjForm({
        title: "",
        description: "",
        imageUrl: "",
        repoLink: "",
        deployedUrl: "",
      });
    } catch (err) {
      console.error(err);
      alert("Server error creating project");
    }
  };

  // DELETE Project
  const deleteProject = async (id) => {
    if (!token) {
      alert("Not authorized");
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/project/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.msg || "Error deleting project");
        return;
      }
      setProjects(projects.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Server error deleting project");
    }
  };

  // CREATE Education
  const handleEduCreate = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Not authorized");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eduForm),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Error creating education");
        return;
      }
      setEducation([data, ...education]);
      setEduForm({
        institution: "",
        degree: "",
        field: "",
        startYear: "",
        endYear: "",
      });
    } catch (err) {
      console.error(err);
      alert("Server error creating education");
    }
  };

  // DELETE Education
  const deleteEducation = async (id) => {
    if (!token) {
      alert("Not authorized");
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/education/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.msg || "Error deleting education");
        return;
      }
      setEducation(education.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err);
      alert("Server error deleting education");
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Panel</h2>

      <div className="form-section">
        <h3>Create Project</h3>
        <form onSubmit={handleProjCreate} className="admin-form">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={projForm.title}
            onChange={handleProjChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={projForm.description}
            onChange={handleProjChange}
          />

          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={projForm.imageUrl}
            onChange={handleProjChange}
          />

          <label>Repo Link</label>
          <input
            type="text"
            name="repoLink"
            value={projForm.repoLink}
            onChange={handleProjChange}
          />

          <label>Deployed URL</label>
          <input
            type="text"
            name="deployedUrl"
            value={projForm.deployedUrl}
            onChange={handleProjChange}
          />

          <button className="btn" type="submit">
            Create Project
          </button>
        </form>
      </div>

      <h4 className="existing-items-header">Existing Projects</h4>
      <ul className="existing-list">
        {projects.map((p) => (
          <li key={p._id} className="existing-item">
            <strong>{p.title}</strong>
            <button
              className="btn delete-btn"
              onClick={() => deleteProject(p._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <hr />

      <div className="form-section">
        <h3>Create Education / Certification</h3>
        <form onSubmit={handleEduCreate} className="admin-form">
          <label>Institution</label>
          <input
            type="text"
            name="institution"
            value={eduForm.institution}
            onChange={handleEduChange}
            required
          />

          <label>Degree</label>
          <input
            type="text"
            name="degree"
            value={eduForm.degree}
            onChange={handleEduChange}
          />

          <label>Field</label>
          <input
            type="text"
            name="field"
            value={eduForm.field}
            onChange={handleEduChange}
          />

          <label>Start Year</label>
          <input
            type="text"
            name="startYear"
            value={eduForm.startYear}
            onChange={handleEduChange}
          />

          <label>End Year</label>
          <input
            type="text"
            name="endYear"
            value={eduForm.endYear}
            onChange={handleEduChange}
          />

          <button className="btn" type="submit">
            Create Education
          </button>
        </form>
      </div>

      <h4 className="existing-items-header">
        Existing Education/Certifications
      </h4>
      <ul className="existing-list">
        {education.map((e) => (
          <li key={e._id} className="existing-item">
            <strong>{e.institution}</strong> ({e.startYear} - {e.endYear})
            <button
              className="btn delete-btn"
              onClick={() => deleteEducation(e._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
