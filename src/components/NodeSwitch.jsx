import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function NodeSwitch() {
  const { isDarkMode, toggleDarkMode, switchLanguage } = useContext(AppContext);

  return (
    <div className="nodeSwitch">
      <div className=" pd-r10px">
        <input
          type="checkbox"
          name="switch"
          id="switch"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="switch"></label>
      </div>
      <div className="darkMode-left">
        <div className="pd-r10px">
          {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
        </div>
        <div className="pd-r10px">|</div>
        <div onClick={switchLanguage}>TURKCE`YE GEC</div>
      </div>
    </div>
  );
}
