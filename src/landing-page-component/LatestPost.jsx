import React from "react";
import "./LatestPost.css";
import arrowFront from "../assets/arrowFront.svg";
import post1 from "../assets/latestPost1.svg";
import post2 from "../assets/latestPost2.svg";
import post3 from "../assets/latestPost3.svg";

export default function LatestPost() {
  return (
    <div className="latest-post-container">
      <div className="top">
        <h2>
          Latest <span>Posts</span>
        </h2>
        <p>
          View all Posts{" "}
          <span>
            <a href=""><img src={arrowFront} alt="arrow-front" /></a>
          </span>
        </p>
      </div>

      {/* cardlist */}
      <section>
        <div className="card-container">
          <img src={post1} alt="post1" />
          <div className="card-text">
            <h3>Lorem ipsum dolor </h3>
            <p>
              April 03, 2022 - 4 min read
              <br />
              <br />
              <span>
                Nunc non posuere consectetur, justo erat semper enim, non
                hendrerit dui odio id enim.
              </span>
            </p>
            <button>view</button>
          </div>
        </div>

        <div className="card-container">
          <img src={post2} alt="post1" />
          <div className="card-text">
            <h3>Lorem ipsum dolor </h3>
            <p>
              April 03, 2022 - 4 min read
              <br />
              <br />
              <span>
                Nunc non posuere consectetur, justo erat semper enim, non
                hendrerit dui odio id enim.
              </span>
            </p>
            <button>view</button>
          </div>
        </div>

        <div className="card-container">
          <img src={post3} alt="post1" />
          <div className="card-text">
            <h3>Lorem ipsum dolor </h3>
            <p>
              April 03, 2022 - 4 min read
              <br />
              <br />
              <span>
                Nunc non posuere consectetur, justo erat semper enim, non
                hendrerit dui odio id enim.
              </span>
            </p>
            <button>view</button>
          </div>
        </div>
      </section>
    </div>
  );
}
