import React from "react";
import dataIntern from "./internData.json";
import dataPor from "./porData.json";
import EachIntern from "./EachIntern";
import EachPor from "./EachPor";

const Work = () => {
  return (
    <>
      <section className="work">
        <h2 className="internships-title">MY INTERNSHIPS</h2>
        <div className="intern-container">
          {dataIntern.slice(0, dataIntern.size).map((intern, index) => (
            <EachIntern
              key={index}
              company={intern.company}
              profile={intern.profile}
              date={intern.date}
              desc={intern.desc}
              certi={intern.certi}
            />
          ))}
        </div>
        <h2 className="por-title">MY POSITIONS OF RESPONSIBILITY</h2>
        <div className="por-container">
          {dataPor.slice(0, dataPor.size).map((por, index) => (
            <EachPor
              key={index}
              society={por.society}
              portfolio={por.portfolio}
              date={por.date}
              desc={por.desc}
              certi={por.certi}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
