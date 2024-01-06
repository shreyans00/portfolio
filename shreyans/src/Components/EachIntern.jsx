import React from "react";

const EachIntern = (props) => {
  return (
    <>
      <div className="cardintern">
        <h2>{props.company}</h2>
        <h3 className="profile">{props.profile}</h3>
        <h3>{props.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.desc }}></div>
        <a href={props.certi} target="_blank">
          Certificate
        </a>
      </div>
    </>
  );
};

export default EachIntern;
