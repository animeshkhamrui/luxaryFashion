import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="./../../../Images/bg.jpg"
          className="card-img"
          alt="Background image"
          height="580px"
        />
        <div className="card-img-overlay d-flex flex-column pt-5">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-primary">New Arrival</h5>
            <p className="card-text lead fs-2 text-primary">
              check out all the new trend
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
   
  );
};

export default Home;
