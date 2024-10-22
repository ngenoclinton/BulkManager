// Dashboard page route
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../Dashboard/dashComponents/Sidebar';
import DashboardOverview from '../../Dashboard/DashboardOverview';
import Reports from '../../Dashboard/dashComponents/Reports';
import RegistrationPage from '../../LandingPage/Components/signup/Register';
import Dashboard from '../../Dashboard/dashboard';
import SendSMS from '../../Dashboard/dashComponents/SendSms';
import VoiceCampaign from '../../Dashboard/dashComponents/VoiceCampaign';
import UssdCampaign from '../../Dashboard/dashComponents/UssdCampaign';
import Contacts from '../../Dashboard/dashComponents/Contacts';
import Templates from '../../Dashboard/dashComponents/Templates';
import CreditManagement from '../../Dashboard/dashComponents/CreditManagement';
import Settings from '../../Dashboard/dashComponents/Settings';
import DashboardHome from '../../Dashboard/dashboard';
import ContactsImports from '../../Dashboard/dashComponents/Contacts/ContactsImports';
import RegisteredNumbers from '../../Dashboard/dashComponents/Contacts/RegisteredNumbers';
import NewContacts from '../../Dashboard/dashComponents/Contacts/NewContacts';

const DashboardRoutes = () => {
  return (
    <>
      <DashboardHome />
      <Routes>
         {/* <Route path="/home" element={<DashboardOverview />} /> */}
          <Route path="/dash" element={<DashboardHome/>} />
          <Route path="/send-sms" element={<SendSMS />} />
          <Route path="/voice-campaign" element={<VoiceCampaign />} />
          <Route path="/ussd-campaign" element={<UssdCampaign/>} />
          <Route path="/contacts/*" element={<Contacts />} >
            <Route path="imports" element={<ContactsImports />} />
            <Route path="registered-numbers" element={<RegisteredNumbers />} />
            <Route path="groups" element={<RegisteredNumbers />} />
            <Route path="new-contacts" element={<NewContacts/>} />
          </Route>
          <Route path="/templates" element={<Templates />} />
          <Route path="/credit-management" element={<CreditManagement />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        {/* Add more dashboard routes as necessary */}
      </Routes>
    </>
  );
};

export default DashboardRoutes;
