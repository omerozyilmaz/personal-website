import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Profile() {
  const { appData, language } = useContext(AppContext);

  if (!appData.profileData) return null;

  const { dateOfBirth, city, education, preferredRole, aboutMe } =
    appData.profileData[language];

  return (
    <div className="profile-section">
      <h2 className="small-title">Profile</h2>
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-details">
            <h2 className="skill-name">Profile</h2>
            <div className="details-row">
              <div className="profile-item">
                <p className="bkstng">Date of Birth</p>
                <p>{dateOfBirth}</p>
              </div>
              <div className="profile-item">
                <p className="bkstng">City</p>
                <p>{city}</p>
              </div>
              <div className="profile-item">
                <p className="bkstng">Education</p>
                <p>{education}</p>
              </div>
              <div className="profile-item">
                <p className="bkstng">Preferred Role</p>
                <p>{preferredRole}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-right">
          <div className="about-me">
            <h2 className="skill-name">About Me</h2>
            {aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
