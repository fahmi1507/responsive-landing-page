import React, { useState } from "react";
import "./testimonial.css";
import group from "../../images/group/group-4.png";
import group2x from "../../images/group/group-4@2x.png";
import group3x from "../../images/group/group-4@3x.png";
import blueDot from "../../images/oval.svg";
import useFetch from "../../useFetch";
import TestimonialCard from "../testimonialCards/TestimonialCard";
import { ClipLoader } from "react-spinners";
import Carousel from "react-elastic-carousel";

const testimonialUrl = "https://wknd-take-home-challenge-api.herokuapp.com/testimonial";

const Testimonial = () => {
  const { data, loading, error } = useFetch(testimonialUrl);
  const [color] = useState("#0b24fb");
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  let mySlider;

  if (loading) {
    mySlider = (
      <div style={{ textAlign: "center" }}>
        <ClipLoader color={color} loading={loading} size={75} />{" "}
      </div>
    );
  } else {
    mySlider = (
      <Carousel breakPoints={breakpoints}>
        {data?.map((e) => (
          <TestimonialCard data={e} key={e.id} />
        ))}
      </Carousel>
    );
  }

  if (error) return <p>{error}</p>;
  return (
    <section className="testimonial__container">
      <div className="content__container">
        <img src={group} srcSet={`${group2x}, ${group3x}`} alt="group" className="group" />

        <div className="deffinition__container">
          <p className="Deffinition-a-pract ">
            <span className="text-style-1">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange,
            or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
          </p>
          <p className="weekend-team">-weekend team</p>
        </div>
      </div>
      <img src={blueDot} alt="blueDot" className="blue-dot" />
      <div className="slider-container">
        <h3 className="testimonial-title">Testimonials</h3>
        {mySlider}
      </div>
    </section>
  );
};

export default Testimonial;
