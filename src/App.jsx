import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import NodeSwitch from "./components/NodeSwitch";
import { useAppContext } from "./context/AppContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isDarkMode } = useAppContext();

  return (
    <div>
      <div
        className={`mainContainer ${isDarkMode ? "dark-mode" : "greyColor"}`}
      >
        <NodeSwitch />
        <Header />
        <Hero />
        <section id="skills">
          <Skills />
        </section>
        <hr />
        <Profile />
        <hr />
        <section id="projects">
          <Projects />
        </section>
      </div>
      <section id="footer">
        <Footer />
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
