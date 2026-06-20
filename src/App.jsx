import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RedTeam from "./components/RedTeam";
import Publications from "./components/Publications";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <RedTeam />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;