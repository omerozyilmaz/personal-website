import React from "react";

import pizzaProject from "../assets/pizzaProject.png";
import twitter from "../assets/twitter.png";
import movieDatabase from "../assets/movieDatabase.png";

const Projects = () => {
  const projectList = [
    {
      title: "Pizza Project",
      description:
        "Developed a dynamic and interactive pizza ordering form using React.js. Implemented state management with React hooks (useState) and lifted state up to handle user selections. Utilized modern JavaScript (ES6+) features for cleaner and more efficient code. Ensured responsive design with CSS3 to provide a seamless user experience across devices. Applied best practices for component-based architecture to create reusable and maintainable components.",
      image: pizzaProject,
      githubUrl: "https://github.com/omerozyilmaz/fsweb-s7-challenge-pizza",
      technologies: ["react", "state lifting", "useState"],
    },
    {
      title: "Twitter Clone",
      description:
        "Developed a full-featured social media application simulating Twitter using React.js. Implemented user authentication and authorization with React Router DOM and local storage. Utilized Redux for state management to ensure consistent and synchronized data across the application. Integrated Axios for efficient API communication and data handling. Utilized react-toastify for real-time user notifications and feedback.",
      image: twitter,
      githubUrl: "https://github.com/omerozyilmaz/TwitterClone",
      technologies: ["react", "redux", "axios"],
    },
    {
      title: "Movie Database v3",
      description:
        "Tasked with creating a new version of the Movie Database application with features including movie editing, deletion, addition, a favorite system, and dark mode functionality. Used useAxios hook for API interactions instead of Redux. Ensured responsive and dark mode designs for enhanced user experience.",
      image: movieDatabase,
      githubUrl:
        "https://github.com/omerozyilmaz/React-Project/tree/main/Sprint%2011%20Day%203",
      technologies: ["react", "useAxios", "dark mode"],
    },
  ];

  return (
    <div className="projects">
      <h1 className="small-title">Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
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
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
