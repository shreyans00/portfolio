import React, { useState } from "react";
import link from "../Images/Projects/link.png";
import github from "../Images/Projects/github.png";

const EachProject = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleRead = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div class="project-container project-card">
        <img
          src={props.imag}
          alt={props.imag}
          loading="lazy"
          class="project-pic"
        />
        <h2 class="project-title">{props.title}</h2>
        <h3>{props.ProjectCat}</h3>

        <button onClick={toggleRead}>{showMore ? "🔓" : "🔏"}</button>

        {showMore && (
          <div
            dangerouslySetInnerHTML={{ __html: props.desc }}
          ></div> /* dangerouslySetInnerHTML prop in React to render HTML content from a string */
        )}

        <br />
        <a href={props.link} target="_blank" class="project-link">
          <img src={link} alt="projectLink" />
        </a>
        <a href={props.github} target="_blank" class="project-link">
          <img src={github} alt="github" />
        </a>
      </div>
    </>
  );
};

export default EachProject;
