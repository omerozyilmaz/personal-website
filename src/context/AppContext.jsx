import React, { createContext, useState, useEffect } from "react";
import data from "../data.json";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("isDarkMode") === "true";
  const storedLanguage = localStorage.getItem("language") || "EN";

  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);
  const [language, setLanguage] = useState(storedLanguage);
  const [userInfo, setUserInfo] = useState({});
  const [appData, setAppData] = useState({});

  useEffect(() => {
    setAppData(data);
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      localStorage.setItem("isDarkMode", !prevMode);
      return !prevMode;
    });
  };

  const switchLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "EN" ? "TR" : "EN";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        language,
        userInfo,
        appData,
        toggleDarkMode,
        switchLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
