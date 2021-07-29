import React from "react";

//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles
import { GlobalStyle } from "./GlobalStyle";

//Component
import NavigationBar from "./components/NavigationBar";
import Posts from "./components/Posts";
import Post from "./components/Post";

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/:postId" element={<Post />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
