import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';       // Redux to check auth state
import ProtectedRoute from './pages/ProtectedRoute';// Protected route logic  
import DashboardRoutes from './pages/dashboardroutes';// Dashboard index
import LandingPageRoutes from './pages/landingpageroutes';// LandingPage index
import Dashboard from './Dashboard/dashboard';

const RoutesHandler = () => {
  const { isAuthenticated } = useSelector((state) => state.auth); // Fetch auth state

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<LandingPageRoutes />} />
      <Route path='/dash' element={<DashboardRoutes/>} />
      {/* Protected Routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardRoutes />
          </ProtectedRoute>
        }
      />
      {/* <ProtectedRoute path="/dashboard" component={Dashboard} />   -- Commented this out will work on it later*/}
      {/* Other routes */}
    </Routes>
  );
};

export default RoutesHandler;