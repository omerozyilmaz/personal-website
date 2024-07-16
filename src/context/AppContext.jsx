import React, { useState, createContext, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const storedDarkMode = localStorage.getItem("isDarkMode") === "true";
  const storedLanguage = localStorage.getItem("language") || "EN";

  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);
  const [language, setLanguage] = useState(storedLanguage);
  const [userInfo, setUserInfo] = useState({
    name: "Ömer Özyılmaz",
    email: "omerozylmaz2@gmail.com",
  });

  useEffect(() => {
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
      value={{ isDarkMode, language, userInfo, toggleDarkMode, switchLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
