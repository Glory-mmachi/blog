import React from "react";
import "./HeroSection.css";
import twitterLogo from "../assets/twitter.svg";
import facebookLogo from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import linkedIn from "../assets/linkedin.svg";
import boy from "../assets/boy.svg";

export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* Hero-left */}
      <div className="Hero-left">
        <h1>
          Hi there, I’m <span>Ixartz</span>👋
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
          sit amet, <span>consectetur</span>  adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et <span> dolore</span>.
        </p>
        <div className="hero-app">
          <div className="hero-icon blue">
            <img src={twitterLogo} alt="twitter" width={35} height={25} />
          </div>
          <div className="hero-icon">
            <img src={facebookLogo} alt="facebook" width={20} height={35} />
          </div>
          <div className="hero-icon">
            <img src={linkedIn} alt="linkedIn" width={31} height={30} />
          </div>
          <div className="hero-icon red">
            <img src={youtube} alt="youtube" width={40} height={24} />
          </div>
        </div>
      </div>

      {/* Hero-right */}
      <div className="hero-right">
        <img src={boy} alt="ooy-image" width={300} />
      </div>
    </div>
  );
}
