import CardList from "../Components/CardList";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="latest-post-container">
      <div className="blog-top">
        <h2>Posts Examples</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          bibendum.
        </p>
      </div>
      <CardList />
    </div>
  );
}
