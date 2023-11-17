import CardList from "../Components/CardList";
import "../Components/Blog.css";

export default function Blog() {
  return (
    <div className="latest-post-container">
      <div className="blog-top">
        <h2>Posts Examples</h2>
        <p>
          You can see all posts here and read them in detail in the blog page below or you can also subscribe to my newsletter.
        </p>
      </div>
      <CardList />
    </div>
  );
}
