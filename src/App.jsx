import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import NodeSwitch from "./components/NodeSwitch";
import { AppProvider } from "./context/AppContext.jsx";

function App() {
  return (
    <div className="greyColor mainContainer">
      <AppProvider>
        <NodeSwitch />
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Profile />
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
