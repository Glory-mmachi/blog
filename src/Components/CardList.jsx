import { Link } from "react-router-dom";
import "./CardList.css";

export default function CardList({ data }) {
  return (
    <div className="cardList-container">
      <section>
        {data &&
          data.map(({ image, id, title, time, readTime, description }) => {
            return (
              <div className="card-container" key={id}>
                <img src={image} alt="post1" />
                <div className="card-text">
                  <h3>{title}</h3>
                  <p>
                    {time} - {readTime} read
                    <br />
                    <br />
                    <span>{description.slice(0, 50)}...</span>
                  </p>
                  <Link to={`/blogDetails/${id}`}>
                    <button>view</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
