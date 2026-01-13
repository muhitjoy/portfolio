import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div
      className={
        darkMode
          ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
          : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Navbar>
      <Hero darkMode={darkMode}></Hero>
      <About darkMode={darkMode}></About>
      <Skills darkMode={darkMode}></Skills>
      <Projects darkMode={darkMode}></Projects>
      <Contact darkMode={darkMode}></Contact>
      <Footer darkMode={darkMode}></Footer>
    </div>
  );
};

export default App;
