import { Link } from "react-router-dom";
import arrowFront from "../assets/arrowFront.svg";
import CardList from "./CardList";
import "./LatestPost.css";

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
            <Link to="/blog">
              <img src={arrowFront} alt="arrow-front" />
            </Link>
          </span>
        </p>
      </div>
      <CardList />
    </div>
  );
}
