
//import './App.css';
import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import ContactUs from "./routes/ContactUs";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contactus" element={<ContactUs/>} />
    </Routes>
    </>
  );
}


export default App;
