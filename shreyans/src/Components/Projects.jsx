import React, { useState } from "react";
import data from "./projecData.json";
import EachProject from "./Eachproject";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h2 className="projects-title">MY PROJECTS</h2>
        <div className="projects-container">
          {data.slice(0, data.size).map((project, index) => (
            <EachProject
              key={index}
              title={project.title}
              ProjectCat={project.ProjectCat}
              imag={project.imag}
              desc={project.desc}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
