import React from "react";
import useFetch from "../useFetch";
import HelpComponent from "./HelpComponent";
import pinkOval from "../images/path-3.svg";
import robot from "../images/last-image/group-3.png";
import robot2x from "../images/last-image/group-3@2x.png";
import robot3x from "../images/last-image/group-3@3x.png";

const imageUrl = "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";

const Tips = () => {
  const { data } = useFetch(imageUrl);

  return (
    <section className="tips-container">
      <div className="pov-container">
        <h3 className="pov-title">POV</h3>
        <p className="pov-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <h3 className="pov-title">Resource</h3>
        <p className="pov-desc">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
        <h3 className="pov-title">Help & Tips</h3>
      </div>
      <img src={pinkOval} alt="oval" className="oval-pink" />
      <div className="help-container">
        {data.map((e) => (
          <HelpComponent key={e.id} data={e} />
        ))}
      </div>

      <div className="all-set-container">
        <div className="all-set-description">
          <h3 className="pov-title">You're all set</h3>
          <p className="pov-desc" style={{ marginBottom: "30px" }}>
            The wise man therefore always holds in these matters to this principle of selection.
          </p>
        </div>
        <img className="robot" src={robot} alt="robot" srcSet={`${robot2x}, ${robot3x}`} />
      </div>
    </section>
  );
};

export default Tips;
