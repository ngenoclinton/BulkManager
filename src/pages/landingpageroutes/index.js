// Landing page route
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../../LandingPage/Components/home/HomePage';
import AboutPage from '../../LandingPage/Components/about/About';
import FeaturesPage from '../../LandingPage/Components/Features/FeaturesPage';
import PricingPage from '../../LandingPage/Components/pricing/Pricing';
import ContactSupport from '../../LandingPage/Components/contactSupport/ContactSupport';
import LoginPage from '../../LandingPage/Components/signup/Login';
import RegistrationPage from '../../LandingPage/Components/signup/Register';
import HowItWorks from '../../LandingPage/Components/howItworks/HowItWorks';
import Navbar from '../../../src/LandingPage/Components/navbar/Navbar';

const LandingPageRoutes = () => {
  const location = useLocation(); // Hook to get current route

  // List of paths where we want to hide the navbar (login and registration pages)
  const hideNavbarPaths = ['/login', '/register','/dashboard'];

  return (
    <>
    {/* Conditionally render Navbar if not on login or registration page */}
    {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path='/how-it-works' element={<HowItWorks/>} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact-support" element={<ContactSupport />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
    </>
  );
};

export default LandingPageRoutes;
