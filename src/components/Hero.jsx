import React from "react";
import { useAppContext } from "../context/AppContext";
import profile from "../assets/profile.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Hero() {
  const { appData, language } = useAppContext();

  if (!appData.heroData) return null;

  const { name, title, description, buttons } = appData.heroData[language];

  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-left-first-div">{name}</div>

        <h2>
          {title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p>{description}</p>
        <div className="hero-buttons">
          <button className="btn primary-btn">{buttons[0].text}</button>
          <button className="btn secondary-btn">
            <img src={github} alt="" className="scalesf" />
            {buttons[1].text}
          </button>
          <button className="btn secondary-btn">
            <img src={linkedin} alt="" className="scalesf" />
            {buttons[2].text}
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
}
