import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header container flex">
        <div className="logo flex">
          <div className="joti-one-regular">Bikash</div>
          <div className="line">Fullstack Developer</div>
        </div>

        <label htmlFor="hamburgerMenu">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="hamburgerMenu" />

        <div className="menu">
          <ul className="navigation flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
