import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-rounter-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
