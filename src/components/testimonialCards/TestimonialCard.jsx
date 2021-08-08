import React from "react";
import "./testimonialCard.css";
const TestimonialCard = ({ data }) => {
  return (
    <div className="card">
      <h3 className="card-title">{data.by}</h3>
      <p className="card-desc">{data.testimony}</p>
    </div>
  );
};

export default TestimonialCard;
