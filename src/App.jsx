import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header.jsx";
import { HeroSection } from "./Components/HeroSection.jsx";
import { Banner } from "./Components/Banner.jsx";
import { Skills } from "./Components/Skills.jsx";
import { Projects } from "./Components/Projects.jsx";
import { AboutMe } from "./Components/AboutMe.jsx";
import { Contact } from "./Components/Contact.jsx";
import { Footer } from "./Components/Footer.jsx";

function App() {
  return (
    <>
      {/* dark mode toggler */}
      <label htmlFor="darkMode" className="dark-mode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkMode" />

      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
