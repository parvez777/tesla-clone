import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Video1 from "./models-images/video.mp4";
import Video2 from "./models-images/video2.mp4";
import "./ModelS.css";

const ModelS = () => {
  return (
    <div className="main">
      <div className="PageContainer">
        <Title>
          <h1>Model S</h1>
          <p>Plaid</p>
        </Title>

        <Details>
          <Fade bottom>
            <DetailsList>
              <h1>396 mi</h1>
              <p>Range (EPA est.)</p>
            </DetailsList>
            <DetailsList>
              <h1>1.99 s</h1>
              <p>0-60 mph*</p>
            </DetailsList>
            <DetailsList>
              <h1>200 mph</h1>
              <p>Top Speed†</p>
            </DetailsList>
            <DetailsList>
              <h1>1,020 hp</h1>
              <p>Peak Power</p>
            </DetailsList>
            <DetailsList>
              <BuyNow>Buy Now</BuyNow>
            </DetailsList>
          </Fade>
        </Details>
      </div>

      {/* <<<<<<<<<<<<<< Part 2 >>>>>>>>>>>>>>> */}

      <div className="part2">
        <Fade bottom>
          <h1>Interior of the Future</h1>
        </Fade>
      </div>

      {/* <<<<<<<<<<<< Part 3>>>>>>>>>>>>>>>>>>> */}

      <div className="part3">
        <video className="video1" autoPlay loop muted>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="videoContent-1">
          <h2>Console-Grade Gaming</h2>
          <h5>
            Up to 10 teraflops of processing power unlock in-car gaming on-par
            with today’s newest consoles. <br /> Play from any seat with
            wireless controller and headset compatibility.
          </h5>
        </div>
      </div>

      {/* <<<<<<<<Part 4>>>>>>>>>>> */}

      <div className="part4">
        <div className="top-side">
          <div className="top-left">
            <img src="./models-images/3.jpg" alt="" />
          </div>
          <Fade bottom>
            <div className="top-right">
              <h3>Stay Connected</h3>
              <p>
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </Fade>
        </div>
        <div className="bottom-side">
          <Fade bottom>
            <div className="bottom-left">
              <h3>Immersive Sound</h3>
              <p>
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </div>
          </Fade>
          <div className="bottom-right">
            <video autoPlay loop muted>
              <source src={Video2} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="bottom-side2">
          <Fade bottom>
            <div className="bottom-left2"></div>
          </Fade>
          <div className="bottom-right2">
            <h3>Room for Everything</h3>
            <p>
              With front and rear trunks and fold-flat seats you can fit your
              bike without taking the wheel off—and your luggage too.
            </p>
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<part 5>>>>>>>>>>>>> */}

      <div className="part5">
        <Fade bottom>
        <div className="part5-content">
          <h1>1,020 hp</h1>
          <p>Peak Power</p>
        </div>
        <div className="part5-content">
          <h1>9.23 s</h1>
          <p>@155 mph 1/4 mile</p>
        </div>
        <div className="part5-content">
          <h1>1.99 s</h1>
          <p>0-60 mph*</p>
        </div>
        </Fade>
      </div>

      {/* <<<<<<<Part 6>>>>>>>>>>> */}

<div className="part6">
  <div className="top">
    <Fade bottom>
    <div className="top-content1">
      <h4>Plaid</h4>
      <h2>Beyond Ludicrous</h2>
      <button>ORDER NOW</button>
    </div>
    <div className="top-content2">
      <p>Model S Plaid has the quickest acceleration of any vehicle in production. <br /> Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation.</p>
    </div>
    </Fade>
  </div>

  <div className="bottom">
  <Fade bottom>
    <div className="bottom-content1">
      <h1>Electric Powertrain</h1>
      <p>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. <br /> New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
    </div>
    </Fade>

  </div>
</div>

    </div>
  );
};

export default ModelS;

const Title = styled.div`
  padding-top: 10vh;
  text-align: center;
  h1 {
    font-size: 40px;
  }
  p {
    text-decoration: underline;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5vh;
`;
const DetailsList = styled.div`
  margin: 0 40px;
  color: white;
  align-items: center;
`;
const BuyNow = styled.button`
background-color: transparent;
border: 1px solid white;
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  margin: 10px;
  border-radius: 30px;
  font-size; 20px
  font-weight: 700;
 
`;
