import CardList from "../Components/CardList";
import "../Components/Blog.css";
import { useTheme } from "../../ContextApi";
import Loading from "../Components/Loading";

export default function Blog() {
  const { data } = useTheme();
  return (
    <div>
      {!data && <Loading />}
      {data && (
        <div className="latest-post-container">
          <div className="blog-top">
            <h2>Posts Examples</h2>
            <p>
              You can see all posts here and read them in detail in the blog
              page below or you can also subscribe to my newsletter.
            </p>
          </div>
          <CardList data={data.posts} />
        </div>
      )}
    </div>
  );
}
