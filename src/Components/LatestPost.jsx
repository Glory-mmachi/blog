import { Link } from "react-router-dom";
import arrowFront from "../assets/arrowFront.svg";
import CardList from "./CardList";
import "./LatestPost.css";
import { useTheme } from "../../ContextApi";
import { useEffect, useState } from "react";

export default function LatestPost() {
  const { data } = useTheme();
  const [dataFiltered, setDataFiltered] = useState();
  useEffect(() => {
    {
      data && setDataFiltered(data.posts.filter((post) => post.id < 4));
    }
  }, [data]);
  
  
  return (
    <div>
      {dataFiltered && (
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
          <CardList data={dataFiltered} />
        </div>
      )}
    </div>
  );
}
