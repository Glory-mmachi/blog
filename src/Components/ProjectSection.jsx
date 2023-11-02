import "./ProjectSection.css";
import React from "react";
import bulb from "../assets/3D-illustrations-gabriel-pinheiro.com.svg";
import arrowDown from "../assets/3D-illustrations-arrow down.com.svg";
import trophy from "../assets/3D-illustrations-trophy.com.svg";

export default function ProjectSection() {
  return (
    <div className="project-container">
      <h2>
        Recent <span>Projects</span>{" "}
      </h2>
      {/* main */}
      <section>

      
      <main className="project-main-content">
        {/* left */}
        <div className="project-main-content-left">
          <img src={bulb} alt="bulb" />
        </div>

        {/* right */}
        <div className="project-main-content-right">
          <h3>
            Project1
            <span>
              <span className="inner-text">Web Design</span>
            </span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum.
          </p>
          <p>
            Nunc non posuere consectetur, justo erat semper enim, non hendrerit
            dui odio id enim.
          </p>
        </div>
      </main>

      <main className="project-main-content">
        {/* left */}
        <div className="project-main-content-left">
          <img src={arrowDown} alt="bulb" />
        </div>

        {/* right */}
        <div className="project-main-content-right">
          <h3>
            Project1
            <span>
              <span className="inner-text">Web Design</span>
            </span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum.
          </p>
          <p>
            Nunc non posuere consectetur, justo erat semper enim, non hendrerit
            dui odio id enim.
          </p>
        </div>
      </main>

      <main className="project-main-content">
        {/* left */}
        <div className="project-main-content-left">
          <img src={trophy} alt="trophy" />
        </div>

        {/* right */}
        <div className="project-main-content-right">
          <h3>
            Project1
            <span>
              <span className="inner-text">Web Design</span>
            </span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum.
          </p>
          <p>
            Nunc non posuere consectetur, justo erat semper enim, non hendrerit
            dui odio id enim.
          </p>
        </div>
      </main>
      </section>
    </div>
  );
}
