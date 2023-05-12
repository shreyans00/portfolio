import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../Images/icons/hamburger.png";

const Header = () => {
  const [cur, upd] = useState(false);

  const show = () => {
    upd(!cur);
  };

  return (
    <>
      <div className="nav">
        <h3>
          <span style={{ color: "var(--secondary-color)" }}>SH</span>REYANS
        </h3>

        <div className="show-resume">
          <a
            href="https://drive.google.com/u/0/uc?id=1bYwux2UwYeMPPjX0g8DQQ-2Vywo6Q0y1&export=download"
            target="_blank"
          >
            Download Resume
          </a>
        </div>

        <button class="burger-menu" id="burger-menu" onClick={show}>
          <img
            src={Hamburger}
            width="40px"
            height="40px"
            alt="loagind"
            className={cur ? "rotateBurger" : "bars"}
          />
        </button>

        <ul className={cur ? "nohide" : "hide"}>
          <li>
            <NavLink to="/">Introduction</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/competitions">Competitions</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work Experiences</NavLink>
          </li>
          <li>
            <NavLink to="/project">Projects</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
