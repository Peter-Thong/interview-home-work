import React from "react";

//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles

//Component
import NavigationBar from "./components/NavigationBar";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/:blogId" element={<Blog />} />
    </Routes>
  </Router>
);

export default App;
