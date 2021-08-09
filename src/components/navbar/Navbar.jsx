import React from "react";
import "./navbar.css";
import emot from "../../images/emot/bitmap.jpg";
import emot2x from "../../images/emot/bitmap@2x.jpg";
import emot3x from "../../images/emot/bitmap@3x.jpg";

const Navbar = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
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
