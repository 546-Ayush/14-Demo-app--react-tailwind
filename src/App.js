import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';


function App() {
  return (
    <> 
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App