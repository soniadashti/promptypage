import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Prompts from './prompts';
import About from './about';
import Home from './home';
import Footer from './footer'

export default function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompts" element={<Prompts title="List of Prompts"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );

}


