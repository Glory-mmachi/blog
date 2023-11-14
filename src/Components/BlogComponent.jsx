import "./BlogComponent.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogComponent() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const url = "https://glory-blog-api.vercel.app/posts/" + id;

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const responseData = await res.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {data && (
        <div className="blogComponent-container">
          <h2>{data.title}</h2>
          <p className="date">
            By Ixartz on {data.time} - {data.readTime} read
          </p>
          <img src={data.image} alt="post" />

          {/* Render HTML content */}
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      )}
    </div>
  );
}
