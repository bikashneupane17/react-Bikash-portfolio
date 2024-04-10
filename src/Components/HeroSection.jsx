import React from "react";
import image1 from "../assets/image1.png";

export const HeroSection = () => {
  return (
    <>
      <section className="hero-section container" id="header">
        <div className="hero grid">
          <div className="left flex">
            <div>
              Hi I'm <span>Bikash Neupane</span>
            </div>
            <div className="tag">Soft. Engineer</div>
            <p>I love coding and learning new concepts</p>
            <div>
              <a href={image1} download>
                <button>
                  Download CV<i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={image1} alt="Bikash Standing" />
          </div>
        </div>
      </section>

      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>

        <div className="info-divider"></div>
        <div className="flex info-content">
          <div className="flex icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};
