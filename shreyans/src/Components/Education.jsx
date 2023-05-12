import React from "react";
import kgp_logo from "../Images/Education/kgp_logo.png";
import kgp from "../Images/Education/kgp.jpg";
import rkm_logo from "../Images/Education/rkm_logo.jpg";
import rkm from "../Images/Education/rkm.jpg";
import dav_logo from "../Images/Education/dav_logo.jpg";
import dav from "../Images/Education/dav.jpg";

const Education = () => {
  return (
    <>
      <div>
        <div class="card">
          <img src={kgp_logo} alt="kgp_logo" className="edulogo" />
          <div>
            <h2>GRADUATION (B.TECH)</h2>
            <h3>INDIAN INSTITUTE OF TECHNOLOGY, KHARAGPUR</h3>
            <h4>
              Department of Electrical Engineering
              <br />
              Third Year Undergraduate
              <br />
              CGPA: 8.19
            </h4>
          </div>
          <img src={kgp} alt="kgp" />
        </div>
        <div class="card">
          <img src={rkm_logo} alt="kgp_logo" className="edulogo" />
          <div>
            <h2>All India Senior School Certificate Examination (AISSCE)</h2>
            <h3>RAMAKRISHNA MISSION VIDYAPITH, DEOGHAR</h3>
            <h4>PERCENTAGE: 92.8%</h4>
          </div>
          <img src={rkm} alt="kgp" />
        </div>
        <div class="card">
          <img src={dav_logo} alt="kgp_logo" className="edulogo" />
          <div>
            <h2>All India School Certificate Examination (AISCE)</h2>
            <h3>GD DAV PUBLIC SCHOOL, DEOGHAR</h3>
            <h4>CGPA: 10.0</h4>
          </div>
          <img src={dav} alt="kgp" />
        </div>
      </div>
    </>
  );
};

export default Education;
