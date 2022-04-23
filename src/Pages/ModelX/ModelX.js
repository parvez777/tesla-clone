import React from "react";
import "./ModelX.css";

const ModelX = () => {
  return (
    <div className="model-x">
      <div className="section-1">
          <div className="heading">
              <h1>Model X</h1>
              <p>Plaid</p>
          </div>
          <div className="content-div">
        <div className="content">
          <h1>76 cu ft</h1>
          <p>Cargo Space</p>
        </div>
        <div className="content">
          <h1>330 mi</h1>
          <p>Range (EPA est.)</p>
        </div>
        <div className="content">
          <h1>AWD</h1>
          <p>Dual Motor</p>
        </div>
        <div className="button-div">
          <button>ORDER NOW</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModelX;
