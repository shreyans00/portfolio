import React from "react";

const EachPor = (props) => {
  return (
    <>
      <div className="cardpor">
        <h2>{props.society}</h2>
        <h3 className="profile">{props.portfolio}</h3>
        <h3>{props.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.desc }}></div>
        <a href={props.certi} target="_blank">
          Certificate
        </a>
      </div>
    </>
  );
};

export default EachPor;
