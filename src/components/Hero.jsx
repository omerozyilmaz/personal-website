import React from "react";
import profile from "../assets/profile.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

const heroData = {
  name: "Ömer Özyılmaz",
  title: "Creative thinker\nMinimalism lover",
  description:
    "Hi, I’m Ömer. I’m a full-stack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
  buttons: [
    {
      text: "Hire me",
    },
    {
      text: "Github",
      icon: github,
    },
    {
      text: "Linkedin",
      icon: linkedin,
    },
  ],
  profileImage: profile,
};

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-left-first-div">{heroData.name}</div>

        <h2>
          {heroData.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <p>{heroData.description}</p>
        <div className="hero-buttons">
          <button className="btn primary-btn">
            {heroData.buttons[0].text}
          </button>
          <button className="btn secondary-btn">
            <img src={heroData.buttons[1].icon} alt="" className="scalesf" />
            <i className="fab fa-github"></i> {heroData.buttons[1].text}
          </button>
          <button className="btn secondary-btn">
            <img src={heroData.buttons[2].icon} alt="" className="scalesf" />
            <i className="fab fa-linkedin"></i> {heroData.buttons[2].text}
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroData.profileImage} alt="Profile" />
      </div>
    </div>
  );
}
