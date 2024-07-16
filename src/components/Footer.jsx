import React from "react";

const contactData = {
  email: "omerozylmaz2@gmail.com",
  github: "https://github.com/omerozyilmaz",
  linkedin: "https://www.linkedin.com/in/omerozyilmaz/",
  personalBlog: "",
};

export default function Footer() {
  return (
    <div className="frBdClr">
      <div className="contact-container">
        <h2 className="smaller-title-v2">
          Let's work together <br /> on your next product.
        </h2>
        <p>
          {/*<img src={emailIcon} alt="email" className="email-icon" />*/}
          <a href={`mailto:${contactData.email}`} className="email-link">
            {contactData.email}
          </a>
        </p>
        <div className="contact-links">
          <a href={contactData.personalBlog} className="contact-link">
            Personal Blog
          </a>
          <a href={contactData.github} className="contact-link github-link">
            Github
          </a>
          <a href={contactData.linkedin} className="contact-link linkedin-link">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
