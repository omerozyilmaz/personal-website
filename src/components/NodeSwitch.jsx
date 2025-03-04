import React from "react";
import { useAppContext } from "../context/AppContext";

export default function NodeSwitch() {
  const { isDarkMode, toggleDarkMode, switchLanguage, language } =
    useAppContext();

  return (
    <div className="nodeSwitch">
      <div className="pd-r10px">
        <input
          type="checkbox"
          name="switch"
          id="switch"
          checked={!isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="switch"></label>
      </div>
      <div className="darkMode-left">
        <div className="pd-r10px">
          {isDarkMode ? "KARANLIK MOD" : "AYDINLIK MOD"}
        </div>
        <div className="pd-r10px">|</div>
        <div onClick={switchLanguage}>
          {language === "EN" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </div>
      </div>
    </div>
  );
}
