import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import Tips from "../components/Tips";

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
