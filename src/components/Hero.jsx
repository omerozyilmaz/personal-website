import React from "react";
import profile from "../assets/profile.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-left-first-div">Ömer Özyılmaz</div>

        <h2>
          Creative thinker
          <br />
          Minimalism lover
        </h2>
        <p>
          Hi, I’m Ömer. I’m a full-stack developer. If you are looking for a
          Developer who can craft solid and scalable frontend products with
          great user experiences. Let’s shake hands with me.
        </p>
        <div className="hero-buttons">
          <button className="btn primary-btn">Hire me</button>
          <button className="btn secondary-btn">
            <img src={github} alt="" className="scalesf" />
            <i className="fab fa-github"></i> Github
          </button>
          <button className="btn secondary-btn">
            <img src={linkedin} alt="" className="scalesf" />
            <i className="fab fa-linkedin"></i> Linkedin
          </button>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
}
