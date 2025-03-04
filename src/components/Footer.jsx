import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Footer() {
  const { appData, language } = useAppContext();

  if (!appData.contactData) return null;

  const { email, github, linkedin, personalBlog } = appData.contactData;

  return (
    <div className="frBdClr">
      <div className="contact-container">
        <h2 className="smaller-title-v2">
          {language === "EN"
            ? "Let's work together on your next product."
            : "Bir sonraki projenizde birlikte çalışalım."}
        </h2>
        <p>
          <a href={`mailto:${email}`} className="email-link">
            {email}
          </a>
        </p>
        <div className="contact-links">
          <a href={personalBlog} className="contact-link">
            {language === "EN" ? "Personal Blog" : "Kişisel Blog"}
          </a>
          <a href={github} className="contact-link github-link">
            Github
          </a>
          <a href={linkedin} className="contact-link linkedin-link">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
