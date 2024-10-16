import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesHandler from './Routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesHandler />
    </BrowserRouter>
  );
}

export default App;

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // import React from 'react';
  // import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
  // import './App.css';
  // import HomePage from './LandingPage/Components/home/HomePage';
  // import About from './LandingPage/Components/about/About';
  // import Features from './LandingPage/Components/products&Services/Features';
  // import Navbar from './LandingPage/Components/navbar/Navbar';
  // import Pricing from './LandingPage/Components/pricing/Pricing';
  // import RegistrationPage from './LandingPage/Components/signup/Register';
  // import LoginPage from './LandingPage/Components/signup/Login';
  // import ContactSupport from './LandingPage/Components/contactSupport/ContactSupport';
  // import HowItWorks from './LandingPage/Components/howItworks/HowItWorks';
  // import FeaturesPage from './LandingPage/Components/Features/FeaturesPage';
  // import PricingPage from './LandingPage/Components/pricing/Pricing';

  // function App() {
  //   const location = useLocation(); // Hook to get current route

  //   // List of paths where we want to hide the navbar (login and registration pages)
  //   const hideNavbarPaths = ['/login', '/register','/dashboard'];
  //   return (
  //     <>
  //         {/* Conditionally render Navbar if not on login or registration page */}
  //         {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
          
  //       <Routes>
  //           <Route path="/" element={<HomePage />} />
  //           <Route path="/about" element={<About />} />          
  //           <Route path="/pricing" element={<PricingPage/>} />
  //           <Route path="/features" element={<FeaturesPage />} />
  //           <Route path="/register" element={<RegistrationPage/>} />
  //           <Route path="/login" element={<LoginPage />} />
  //           <Route path="/contact-support" element={<ContactSupport />} />
  //           <Route path='/how-it-works' element={<HowItWorks/>} />
  //       </Routes>
  //     </>
  //   );
  // }

  // export default App;
