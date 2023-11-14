import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./Components/Navbar";

// Pages
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";

//footer
import Newsletter from "./Components/Newsletter";
import BlogDetails from "./Pages/BlogDetails";

function App() {
 
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
        </Routes>
        <Newsletter />
      </Router>
    </div>
  );
}

export default App;
