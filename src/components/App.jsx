import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppContexts from "../Сontexts/AppContexts";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Social from "./Social/Social";
import SocialHorizontal from "./SocialHorizontal/SocialHorizontal";
import Pictures from "./Pictures/Pictures";
import Projects from "./Projects/Projects";

import "./App.scss";
import ParticlesContainer from "./ParticlesContainer/ParticlesContainer";

function App() {
  return (
    <AppContexts.Provider value={false}>
      <div className="App">
        <ParticlesContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Social />
        <SocialHorizontal />
        <Footer />
      </div>
    </AppContexts.Provider>
  );
}

export default App;
