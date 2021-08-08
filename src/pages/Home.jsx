import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Testimonial from "../components/testimonials/Testimonial";
import Tips from "../components/tips/Tips";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <Tips />
    </>
  );
};

export default Home;
