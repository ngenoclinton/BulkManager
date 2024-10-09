import React from 'react';
import { BrowserRouter, Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './LandingPage/Components/home/HomePage';
import About from './LandingPage/Components/about/About';
import Features from './LandingPage/Components/products&Services/Features';
import Navbar from './LandingPage/Components/navbar/Navbar';
import Pricing from './LandingPage/Components/pricing/Pricing';
import RegistrationPage from './LandingPage/Components/signup/Register';
import LoginPage from './LandingPage/Components/signup/Login';
import ContactSupport from './LandingPage/Components/contactSupport/ContactSupport';

function App() {
  const location = useLocation(); // Hook to get current route

  // List of paths where we want to hide the navbar (login and registration pages)
  const hideNavbarPaths = ['/login', '/register'];
  return (
    <>
        {/* Conditionally render Navbar if not on login or registration page */}
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />          
          {/* Sub-routes for Support section */}
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/features" element={<Features />} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/login" element={<LoginPage />} />
        {/* Sub-routes for Support section */}
        <Route path="/contact-support" element={<ContactSupport />} />
      </Routes>
    </>
  );
}

export default App;
