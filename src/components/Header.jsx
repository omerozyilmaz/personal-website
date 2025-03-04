import React from "react";
import { Link } from "react-scroll";
import { useAppContext } from "../context/AppContext";

export default function Header() {
  const { language } = useAppContext();

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
              {language === "EN" ? "Skills" : "Yetenekler"}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="projects" smooth={true} duration={500}>
              {language === "EN" ? "Projects" : "Projeler"}
            </Link>
          </div>
          <div className="nav-item">
            <Link to="footer" smooth={true} duration={500}>
              {language === "EN" ? "Hire Me" : "Beni İşe Al"}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
