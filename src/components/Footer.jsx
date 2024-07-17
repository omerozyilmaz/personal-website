import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Footer() {
  const { appData } = useAppContext();

  if (!appData.contactData) return null;

  const { email, github, linkedin, personalBlog } = appData.contactData;

  return (
    <div className="frBdClr">
      <div className="contact-container">
        <h2 className="smaller-title-v2">
          Let's work together <br /> on your next product.
        </h2>
        <p>
          <a href={`mailto:${email}`} className="email-link">
            {email}
          </a>
        </p>
        <div className="contact-links">
          <a href={personalBlog} className="contact-link">
            Personal Blog
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
