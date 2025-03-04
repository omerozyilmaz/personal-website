import React from "react";
import { useAppContext } from "../context/AppContext";
import pizzaProject from "../assets/pizzaProject.png";
import twitter from "../assets/twitter.png";
import movieDatabase from "../assets/movieDatabase.png";

const imageMap = {
  pizzaProject,
  twitter,
  movieDatabase,
};

const Projects = () => {
  const { language, appData } = useAppContext();
  const projects = appData.projects ? appData.projects[language] : [];

  return (
    <div className="projects">
      <h1 className="small-title">
        {language === "EN" ? "Projects" : "Projeler"}
      </h1>
      <div className="project-list">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={imageMap[project.image]}
                alt={`${project.title} ekran görüntüsü`}
                className="project-image"
              />
              <h2 className="skill-name">{project.title}</h2>
              <p className="heightmincard">{project.description}</p>
              <div className="technologies pd-bt-tp10px">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === "EN" ? "View Site" : "Siteyi Görüntüle"}
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>
            {language === "EN" ? "No projects found." : "Proje bulunamadı."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
