import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Skills() {
  const { language, appData } = useAppContext();
  const skills = appData.skills ? appData.skills[language] : [];

  return (
    <div className="skills-section">
      <h1 className="small-title">
        {language === "EN" ? "Skills" : "Yetenekler"}
      </h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h2 className="skill-name">{skill.name}</h2>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
