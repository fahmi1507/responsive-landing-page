import React from "react";
import "./testimonial.css";
import group from "../../images/group/group-4.png";
import group2x from "../../images/group/group-4@2x.png";
import group3x from "../../images/group/group-4@3x.png";
import blueDot from "../../images/oval.svg";
import useFetch from "../../useFetch";
import TestimonialCard from "../testimonialCards/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonialUrl = "https://wknd-take-home-challenge-api.herokuapp.com/testimonial";

const Testimonial = () => {
  const { data, loading, error } = useFetch(testimonialUrl);

  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>{error}</p>;
  console.log(data, "<<<15");
  return (
    <section className="testimonial__container">
      <div className="content__container">
        <img src={group} srcSet={`${group2x}, ${group3x}`} alt="group" className="group" />

        <div className="deffinition__container">
          <p className="Deffinition-a-pract ">
            <span className="text-style-1">Deffinition;</span>a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or
            achieve by resolving difficulties. Merriam-Webster.com Dictionary.
          </p>
          <p className="weekend-team">-weekend team</p>
        </div>
      </div>
      <img src={blueDot} alt="blueDot" className="blue-dot" />
      <div className="slider-container">
        <h3 className="testimonial-title">Testimonials</h3>
        <Slider {...settings}>
          {data?.map((e) => (
            <TestimonialCard data={e} key={e.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
