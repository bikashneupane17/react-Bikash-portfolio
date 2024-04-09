import React from "react";

export const Footer = () => {
  return (
    <footer className="footer flex">
      <div className="top flex">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="socials">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="" target="_blank">
                LinkedIN
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">&copy; All right reserved.</div>

      <a href="#header" className="flex goup">
        <i className="fa-solid fa-angle-up"></i>
      </a>
    </footer>
  );
};
