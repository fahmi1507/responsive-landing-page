import React from "react";
import "../css/style.css";
import lego from "../images/lego/bitmap.png";
import lego2x from "../images/lego/bitmap@2x.png";
import lego3x from "../images/lego/bitmap@3x.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="title-container">
        <h1 className="WEEKEND-FROM-HOME">WEEKEND FROM HOME</h1>
        <p className="Stay-active-with-a-l">Stay active with a little workout.</p>
        <div className="img-container">
          <img src={lego} srcSet={`${lego2x}, ${lego3x}`} alt="lego" className="lego" />
          <button className="go-btn">
            <p className="letsgo">Let's Go</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
