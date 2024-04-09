import React from "react";
import image1 from "../assets/image1.png";

export const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>

      <div className="about-content container flex">
        <div className="myImg flex">
          <img src={image1} alt="" />
        </div>
        <div className="my-bio container">
          <h2>Bikash Neupane</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            qui ex ducimus iste corporis possimus reprehenderit enim itaque
            facilis vel.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            qui ex ducimus iste corporis possimus reprehenderit enim itaque
            facilis vel.
          </p>
          <p>Sydney, Australia</p>

          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>coding</span>
              <span>Cricket</span>
              <span>Music</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
