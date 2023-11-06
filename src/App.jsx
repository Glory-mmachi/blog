import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
// Navbar
import Navbar from "./Components/Navbar";

// Pages
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";

//footer
import Newsletter from "./Components/Newsletter";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://latest-news1.p.rapidapi.com/");
      const data = await res.json();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails" element={<BlogDetails/>}/>
        </Routes>
        <Newsletter />
      </Router>
    </div>
  );
}

export default App;
