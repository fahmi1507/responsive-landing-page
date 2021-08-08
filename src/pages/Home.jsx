import React from "react";
import Footer from "../components/footer/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
