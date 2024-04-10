import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer flex">
      <div className="top flex">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="socials">
          <h3>Social Links</h3>
          <ul>
            <li>
              <Link to="" target="_blank">
                LinkedIN
              </Link>
            </li>
            <li>
              <Link to="" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link to="" target="_blank">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="" target="_blank">
                Youtube
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">&copy; All right reserved.</div>
    </footer>
  );
};
