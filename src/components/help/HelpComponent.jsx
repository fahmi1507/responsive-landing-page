import React from "react";
import "./help.css";
import arrowRight from "../../images/arrow.svg";
const HelpComponent = ({ data }) => {
  return (
    <div className="help-comp-container">
      <img className="image" src={data.image} alt={data.id} />
      <div className="black-container">
        <p className="help-title">{data.title}</p>
        <img src={arrowRight} alt="arrow" />
      </div>
    </div>
  );
};

export default HelpComponent;
