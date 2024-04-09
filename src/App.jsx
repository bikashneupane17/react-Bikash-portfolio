import React from "react";
import "./App.css";
import { Header } from "./Components/Header.jsx";
import { HeroSection } from "./Components/HeroSection.jsx";
import { Banner } from "./Components/Banner.jsx";
import { Skills } from "./Components/Skills.jsx";
import { Recent } from "./Components/Recent.jsx";
import { AboutMe } from "./Components/AboutMe.jsx";
import { Contact } from "./Components/Contact.jsx";
import { Footer } from "./Components/Footer.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeroSection />
      <Banner />
      <Skills />
      <Recent />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
