import React from "react";
import image2 from "../assets/image2.png";

export const Recent = () => {
  return (
    <section className="projects container" id="projects">
      <h2 className="title">
        <span>My Projects</span>
      </h2>
      <div className="project-container grid">
        <div className="project-card">
          <div className="top">
            <img src={image2} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={image2} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={image2} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript, React</p>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={image2} alt="" width="100%" />
          </div>
          <div className="bottom container">
            <div className="links">
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript, React</p>
          </div>
        </div>
      </div>
    </section>
  );
};
