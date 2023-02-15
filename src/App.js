import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/stopwatch" element={<Stopwatch/>}/>
      </Routes>
    </>
  );
}
export default App;
