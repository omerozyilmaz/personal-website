import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span>Ö</span>
        </div>
      </div>
      <div className="header-right">
        <nav className="nav">
          <div className="nav-item">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </div>
          <div className="nav-item">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </div>
          <div className="nav-item">
            <Link to="footer" smooth={true} duration={500}>
              Hire Me
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
