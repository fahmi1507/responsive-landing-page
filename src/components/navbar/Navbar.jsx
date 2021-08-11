import React from "react";
import emot from "../../images/emot/bitmap.webp";
import emot2x from "../../images/emot/bitmap@2x.webp";
import emot3x from "../../images/emot/bitmap@3x.webp";
import "../../css/style.css";

const Navbar = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-67px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <nav id="navbar">
      <div className="nav__container">
        <div className="logo">
          <img src={emot} srcSet={`${emot2x}, ${emot3x}`} alt="emoticon" className="emot" />
          <div className="greetings__container">
            <span className="Good-Morning">Good Morning</span>
            <span className="Fellas">Fellas</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
