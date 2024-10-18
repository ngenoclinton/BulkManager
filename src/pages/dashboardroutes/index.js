// Dashboard page route
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar';
import DashboardOverview from '../../Dashboard/DashboardOverview';
import Reports from '../../Dashboard/Reports';
import Dashboard from '../../Dashboard/dashboard';

const DashboardRoutes = () => {
  return (
    <div>
      <Dashboard />
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/" element={<DashboardOverview />} />
        <Route path="/reports" element={<Reports />} /> */}
        {/* Add more dashboard routes as necessary */}
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
