import React, { useEffect, useState } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/project")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p._id} className="project-card">
            {p.imageUrl && (
              <img src={p.imageUrl} alt={p.title} className="project-image" />
            )}
            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
            <div className="hover-cover">
              <h4>{p.title}</h4>
              {p.repoLink && (
                <a href={p.repoLink} target="_blank" rel="noreferrer">
                  Repo
                </a>
              )}
              {" | "}
              {p.deployedUrl && (
                <a href={p.deployedUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
