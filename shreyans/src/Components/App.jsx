import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Intro from "./Intro";
import Education from "./Education";
import Skills from "./Skills";
import Competitions from "./Competitions";
import Work from "./Work";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/work" element={<Work />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
