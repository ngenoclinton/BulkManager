import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';       // Redux to check auth state
import ProtectedRoute from './pages/ProtectedRoute';// Protected route logic  
import DashboardRoutes from './pages/dashboardroutes';// Dashboard index
import LandingPageRoutes from './pages/landingpageroutes';// LandingPage index

const RoutesHandler = () => {
  const { isAuthenticated } = useSelector((state) => state.auth); // Fetch auth state

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<LandingPageRoutes />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DashboardRoutes />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesHandler;
