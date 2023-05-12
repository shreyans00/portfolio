import React from "react";
import html from "../Images/skills/html.png";
import css from "../Images/skills/css.png";
import js from "../Images/skills/js.png";
import react from "../Images/skills/react.png";
import nodejs from "../Images/skills/nodejs.png";
import mongodb from "../Images/skills/mongodb.png";
import bootstrap from "../Images/skills/bootstrap.png";
import php from "../Images/skills/php.png";
import cpp from "../Images/skills/cpp.png";
import c from "../Images/skills/c.png";
import python from "../Images/skills/python.png";

const skills = () => {
  return (
    <>
      <section class="skills" id="skills">
        <h2 class="skill-header">PROFESSIONAL SKILLS</h2>
        <div class="skills-wrapper">
          <div>
            <img src={html} alt="" loading="lazy" class="icon icon-card" />
            <img src={css} alt="" loading="lazy" class="icon icon-card" />
            <img src={js} alt="" loading="lazy" class="icon icon-card" />
            <img src={react} alt="" loading="lazy" class="icon icon-card" />
            <img src={nodejs} alt="" loading="lazy" class="icon icon-card" />
            <img src={mongodb} alt="" loading="lazy" class="icon icon-card" />
            <img src={bootstrap} alt="" loading="lazy" class="icon icon-card" />
            <img src={php} alt="" loading="lazy" class="icon icon-card" />
            <img src={cpp} alt="" loading="lazy" class="icon icon-card" />
            <img src={c} alt="" loading="lazy" class="icon icon-card" />
            <img src={python} alt="" loading="lazy" class="icon icon-card" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <h2 class="skill-header">PERSONAL SKILLS</h2>
        <div class="skills-wrapper personalSkills">
          <div className="box">
            <p>Cricket</p>
          </div>
          <div className="box">
            <p>Table Tennis</p>
          </div>
          <div className="box">
            <p>Badminton</p>
          </div>
          <div className="box">
            <p>Writing</p>
          </div>
          <div className="box">
            <p>Music</p>
          </div>
          <div className="box">
            <p>Movies</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default skills;
