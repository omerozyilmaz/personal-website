import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import NodeSwitch from "./components/NodeSwitch";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";

function App() {
  const { isDarkMode } = useContext(AppContext);

  return (
    <div>
      <div
        className={`mainContainer ${isDarkMode ? "dark-mode" : "greyColor"}`}
      >
        <NodeSwitch />
        <Header />
        <Hero />
        <Skills />
        <hr />
        <Profile />
        <hr />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
