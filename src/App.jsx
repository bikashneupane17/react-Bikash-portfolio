import React from "react";
import "./App.css";
import { DarkMode } from "./Components/DarkMode.jsx";
import { Header } from "./Components/Header.jsx";
import { HeroSection } from "./Components/HeroSection.jsx";
import { Skills } from "./Components/Skills.jsx";
import { Recent } from "./Components/Recent.jsx";
import { AboutMe } from "./Components/AboutMe.jsx";
import { Contact } from "./Components/Contact.jsx";
import { Footer } from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <DarkMode />
      <div className="wrapper">
        <Header />
        <HeroSection />
        <Skills />
        <Recent />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
