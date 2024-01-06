import React from "react";
import codeforces from "../Images/competitions/cf.png";
import codechef from "../Images/competitions/cc.png";
import interviewBit from "../Images/competitions/ib.png";
import newtonSchool from "../Images/competitions/newton.jpg";
import imo from "../Images/competitions/imo.jpg";
import iso from "../Images/competitions/iso.jpg";

const Competitions = () => {
  return (
    <>
      <div className="Competitions">
        <h1>Competitions And Academic Achievements</h1>
        <div className="each">
          <img src={codeforces} alt="loading" />
          <span>
            Ranked among the top 3% Global Competitive Programmers in
            <strong> Codeforces</strong>, with peak rating of{" "}
            <strong>1450</strong>.{" "}
            <a href="https://codeforces.com/profile/Shreyans_6_5">
              Shreyans_6_5
            </a>
          </span>
        </div>
        <div className="each">
          <img src={codeforces} alt="loading" />
          <span>
            Secured global rank of <strong>1307</strong> in Polynomial Round
            2022 (Div. 1 + Div. 2) (Codeforces contest) among 30,701
            participants.
          </span>
        </div>
        <div className="each">
          <img src={codechef} alt="loading" />
          <span>
            <strong>3-star</strong> coder with the highest rating of{" "}
            <strong>1711</strong> in a global coding platform,{" "}
            <strong>CodeChef</strong>.{" "}
            <a href="https://www.codechef.com/users/shreyans_1">shreyans_1</a>
          </span>
        </div>
        <div className="each">
          <img src={codechef} alt="loading" />
          <span>
            Achieved global rank of <strong>99</strong> in May Long One 2022
            Division 3 (CodeChef contest) among 19,233 participants.
          </span>
        </div>
        <div className="each">
          <img src={codechef} alt="loading" />
          <span>
            Secured global rank of <strong>462</strong> in Starters 59 Division
            2 (CodeChef contest) among 18,557 participants.
          </span>
        </div>
        <div className="each">
          <img src={newtonSchool} alt="loading" />
          <span>
            Achieved global rank of <strong>636</strong> in Newton School Coding
            Challenge August 2022 among 15k+ participants.
          </span>
        </div>
        <div className="each">
          <img src={interviewBit} alt="loading" />
          <span>
            Solved <strong>300+</strong> data structures and algorithms problems
            from <strong>InterviewBit</strong> with score of 42k.{" "}
            <a href="https://www.interviewbit.com/profile/shreyans_646">
              shreyans_646
            </a>
          </span>
        </div>
        <div className="each">
          <img src={imo} alt="loading" />
          <span>
            Secured State rank <strong>7</strong> in the International Olympiad
            of Mathematics 2018.
          </span>
        </div>
        <div className="each">
          <img src={iso} alt="loading" />
          <span>
            Secured State rank <strong>16</strong> in the International Olympiad
            of Science 2018.
          </span>
        </div>
        <h1>Non-Academic Achievements</h1>
        <div className="each">
          <span>
            5th position among 18 participating halls in the General
            Championship of the year 2023 in Hindi Elocution Competition.
          </span>
        </div>
        <div className="each">
          <span>
            Runner-up position in Intrahall table tennis competition in the year
            2022.
          </span>
        </div>
        <div className="each">
          <span>Member of Interhall Cricket in academic year 2021-22.</span>
        </div>
        <div className="each">
          <span>Spearheaded Illumination event of the year 2022.</span>
        </div>
        <div className="each">
          <span>Served as NCC-EME Cadet for 2 years</span>
        </div>
      </div>
    </>
  );
};

export default Competitions;
