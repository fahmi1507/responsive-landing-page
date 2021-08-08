import React from "react";
import "./tips.css";
import useFetch from "../../useFetch";
import HelpComponent from "../help/HelpComponent";
const imageUrl = "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";
const Tips = () => {
  const { data, error, loading } = useFetch(imageUrl);
  return (
    <section className="tips-container">
      <div className="pov-container">
        <h3 className="pov-title">POV</h3>
        <p className="pov-desc" style={{ marginBottom: "67px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <h3 className="pov-title">Resource</h3>
        <p className="pov-desc" style={{ marginBottom: "100px" }}>
          These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
        </p>
        <h3 className="pov-title">Help & Tips</h3>
      </div>
      <div className="help-container">
        {data?.map((e) => (
          <HelpComponent key={e.id} data={e} />
        ))}
      </div>
    </section>
  );
};

export default Tips;
