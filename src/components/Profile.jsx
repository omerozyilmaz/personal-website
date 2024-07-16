import React from "react";

export default function Profile() {
  const profileData = {
    dateOfBirth: "03.02.1998",
    city: "Ankara",
    education: "Gazi Üniv. Chemical Engineer, 2022",
    preferredRole: "Frontend, UI",
    aboutMe: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    ],
  };

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
                <p>{profileData.dateOfBirth}</p>
              </div>
              <div className="profile-item">
                <p className="bkstng">City</p>
                <p>{profileData.city}</p>
              </div>
              <div className="profile-item">
                <p className="bkstng">Education</p>
                <p>{profileData.education}</p>
              </div>
              <div className="profile-item">
                <p className="bkstng">Preferred Role</p>
                <p>{profileData.preferredRole}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-right">
          <div className="about-me">
            <h2 className="skill-name">About Me</h2>
            {profileData.aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
