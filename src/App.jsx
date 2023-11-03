import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Navbar/>}/>
        </Routes>
        <Newsletter/>
      </Router>
    </div>
  );
}

export default App;
