import React from "react";
import Image from "../Images/my_img.jpg";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <img src={Image} alt="myphoto"></img>
        <div className="right">
          <h1>
            Hi, I'm <span style={{ color: "rgb(6, 100, 90)" }}>Shreyans</span>
          </h1>
          <h2>Competitive Programmer and MERN Stack Developer</h2>
          <h3>Third Year Undergraduate of Electrical Engineering Department</h3>
          <h3 className="cllg">
            <em>@ Indian Institue of Technology, Kharagpur</em>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Intro;
