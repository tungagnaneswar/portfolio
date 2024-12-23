import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
