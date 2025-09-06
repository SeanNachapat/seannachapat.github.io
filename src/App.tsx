import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import Link from "./components/Link";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/link" element={<Link />} />
      </Routes>
    </Router>
  );
};

export default App;
