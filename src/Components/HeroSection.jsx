import "./HeroSection.css";
import twitterLogo from "../assets/twitter.svg";
import facebookLogo from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import linkedIn from "../assets/linkedin.svg";
import girl from "../assets/medAvatar.jpeg";

export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* Hero-left */}
      <div className="Hero-left">
        <h1>
          Hi there, I’m <span>Glory</span>👋
        </h1>
        <p>
          Explore a world of knowledge and insights on various topics, from technology to <span>science</span>. Join me on a journey through engaging articles and informative <span>content</span>.
        </p>
     
        <div className="hero-app ">
          <div className="hero-icon blue circle">
            <img src={twitterLogo} alt="twitter" width={35} height={25} />
          </div>
          <div className="hero-icon circle">
            <img src={facebookLogo} alt="facebook" width={20} height={35} />
          </div>
          <div className="hero-icon circle">
            <img src={linkedIn} alt="linkedIn" width={31} height={30} />
          </div>
          <div className="hero-icon red circle">
            <img src={youtube} alt="youtube" width={40} height={24} />
          </div>
        </div>
      </div>

      {/* Hero-right */}
      <div className="hero-right">
        <img src={girl} alt="ooy-image" width={350} height={350} style={{borderRadius: "50%"}} />
      </div>
    </div>
  );
}
