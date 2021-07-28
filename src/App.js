import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles

import { GlobalStyle } from "./GlobalStyle";

//Component
import NavigationBar from "./components/NavigationBar";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";

const App = () => (
  <Router>
    <NavigationBar />
    {/* //     <Route path="/" element={<Blogs />} />
  //     <Route path="/:blogId" element={<Blog />} />
  //   </Routes> */}
    <GlobalStyle />
  </Router>
);

export default App;
