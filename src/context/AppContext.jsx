import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import data from "../data.json";

const AppContext = createContext();

const useAppContext = () => {
  return useContext(AppContext);
};

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

    const postUserData = async () => {
      try {
        const response = await axios.post("https://reqres.in/api/users", {
          name: "Ömer Özyılmaz",
          job: "Frontend Developer",
        });
        console.log("Response from API:", response.data);
      } catch (error) {
        console.error("Error posting data to API:", error);
      }
    };

    postUserData();
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", newMode);
      toast.info(`Dark mode ${newMode ? "enabled" : "disabled"}`);
      return newMode;
    });
  };

  const switchLanguage = () => {
    setLanguage((prevLanguage) => {
      const newLanguage = prevLanguage === "EN" ? "TR" : "EN";
      localStorage.setItem("language", newLanguage);
      toast.info(` ${newLanguage ? "Changed Language" : "disabled"}`);

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

export { AppContext, AppProvider, useAppContext };
