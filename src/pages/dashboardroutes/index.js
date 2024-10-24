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
import Contacts from '../../Dashboard/dashComponents/Contacts/Contacts';
import Templates from '../../Dashboard/dashComponents/Templates';
import CreditManagement from '../../Dashboard/dashComponents/CreditManagement';
import Settings from '../../Dashboard/dashComponents/Settings';
import DashboardHome from '../../Dashboard/dashboard';
import ContactsImports from '../../Dashboard/dashComponents/Contacts/ContactsImports';
import RegisteredNumbers from '../../Dashboard/dashComponents/Contacts/RegisteredNumbers';
import NewContacts from '../../Dashboard/dashComponents/Contacts/NewContacts';
import VoiceCallCampaign from '../../Dashboard/dashComponents/VoiceCalls/VoiceCallsCampaign';

const DashboardRoutes = () => {
  return (
    <div>
      <DashboardHome />      
    </div>
  );
};

export default DashboardRoutes;
