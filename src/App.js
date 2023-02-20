import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import Toggle from "./pages/Toggle";
import FQA from "./pages/FQA";
import Team from "./pages/Team";
import MemberDetails from "./pages/MemberDetails";
import Api from "./pages/Api/Api";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/fqa" element={<FQA />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/teams/:name" element={<MemberDetails />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </>
  );
}
export default App;
