import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="body-container">
        <img src="diet.jpg" alt="Healthy Food" className="background-image" />
        <div className="overlay-text">
          <p>Your Diet App</p>
          <p>Calculate the Calories of What You Eat</p>
        </div>
      </div>
    </>
  );
};

export default Home;
