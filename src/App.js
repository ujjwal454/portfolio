import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
