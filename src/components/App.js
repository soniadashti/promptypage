import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Prompts from './prompts';
import Home from './home';
import Footer from './footer';
import About from './about';

export default function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/prompts" element={<Prompts title="List of Prompts"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );

}


