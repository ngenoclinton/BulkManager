import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom'
import { Bell, ChevronDown, Settings} from 'lucide-react'
import Dashboard from '../dashboard'
import UssdCampaign from '../dashComponents/UssdCampaign'
import ContactsImports from '../dashComponents/Contacts/ContactsImports'
import RegisteredNumbers from '../dashComponents/Contacts/RegisteredNumbers'
import Groups from '../dashComponents/Contacts/Groups'
import NewContacts from '../dashComponents/Contacts/NewContacts'
import VoiceCallCampaign from '../dashComponents/VoiceCalls/VoiceCallsCampaign'
import Contacts from '../dashComponents/Contacts/Contacts'
import DraftVoiceCalls from '../dashComponents/VoiceCalls/DraftVoiceCalls'
import SentVoiceCalls from '../dashComponents/VoiceCalls/SentCalls'
import ScheduledVoiceCalls from '../dashComponents/VoiceCalls/ScheduledVoiceCalls'
import DeliveryReports from '../dashComponents/VoiceCalls/Reports'
import VoiceCallTemplates from '../dashComponents/VoiceCalls/VoiceCallTemplates'

export const MainContent = ({handleNavigation, setIsUserMenuOpen, isUserMenuOpen})=>{
  const navigate = useNavigate()


    return (
        <div className="flex-1 flex flex-col overflow-x-hidden h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm  w-full z-0 sticky">
            <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                <nav className="flex space-x-4">
                    {/* <NavLink onClick={() => handleNavigation('/dash')} active={location.pathname === '/dash'}>Dashboard</NavLink>
                    <NavLink onClick={() => handleNavigation('/send-sms')} active={location.pathname === '/send-sms'}>Campaigns</NavLink>
                    <NavLink onClick={() => handleNavigation('/contacts')} active={location.pathname === '/contacts'}>Contacts</NavLink>
                    <NavLink onClick={() => handleNavigation('/reports')} active={location.pathname === '/reports'}>Reports</NavLink>
                    <NavLink onClick={() => handleNavigation('/settings')} active={location.pathname === '/settings'}>Settings</NavLink> */}
                </nav>
                <div className="flex items-center">
                    <button onClick={() => handleNavigation('/notifications')} className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]">
                    <Bell className="h-6 w-6" />
                    </button>
                    <div className="ml-3 relative">
                    <div>
                        <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]"
                        >
                        <img className="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                        <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                    </div>
                    {isUserMenuOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</Link>
                        <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                        <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</Link>
                        </div>
                    )}
                    </div>
                </div>                
                </div>
            </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
                {/* <Route path="/home" element={<DashboardOverview />} /> */}
                <Route path="/" element={<Home/>} />
                <Route path="/send-sms" element={<SendSMS />} />
                {/* voice campaign routes  */}
                <Route path="/voice-campaign" element={<VoiceCallCampaign />} />
                <Route path="/voice-campaign/drafts" element={<DraftVoiceCalls />} />
                <Route path="/voice-campaign/sent" element={<SentVoiceCalls />} />
                <Route path="/voice-campaign/scheduled" element={<ScheduledVoiceCalls />} />
                <Route path="/voice-campaign/voice-reports" element={<DeliveryReports />} />
                <Route path="/voice-campaign/voice-templates" element={<VoiceCallTemplates />} />

                {/*  */}
                <Route path="/ussd-campaign" element={<UssdCampaign/>} />
                {/*  Contacts routes*/}
                <Route path="/contacts" element={<Contacts />} /> 
                <Route path="/contacts/imports" element={<ContactsImports/>} /> 
                <Route path="/contacts/registered-numbers" element={<RegisteredNumbers />} />
                <Route path="/contacts/groups" element={<Groups />} />
                <Route path="/contacts/new-contacts" element={<NewContacts/>} />

                {/*  */}
                <Route path="/templates" element={<Templates />} />
                <Route path="/credit-management" element={<CreditManagement />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} /> 
                {/* Add more dashboard routes as necessary */}
            </Routes>
            </div>
            </main> 
        </div>
    )
}

  function Home() {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
        {/* Quick Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
          <StatCard title="Total SMS Sent" value="15,234" />
          <StatCard title="Scheduled Messages" value="42" />
          <StatCard title="Credits Remaining" value="5,000" />
        </div>
  
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => {}} className="bg-[#f15c22] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94d1a] transition-colors">
              Send SMS
            </button>
            <button onClick={() => {}} className="bg-[#f15c22] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94d1a] transition-colors">
              Send Voice Call
            </button>
          </div>
        </div>
  
        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              <ActivityItem title="SMS Campaign: Summer Sale" date="2 hours ago" status="Delivered" />
              <ActivityItem title="Voice Campaign: Customer Survey" date="Yesterday" status="In Progress" />
              <ActivityItem title="SMS Campaign: Appointment Reminder" date="2 days ago" status="Completed" />
            </ul>
          </div>
        </div>
        
      </div>
    )
  }

  
function StatCard({ title, value }) {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
        </div>
      </div>
    )
  }
  
  function ActivityItem({ title, date, status }) {
    return (
      <li>
        <a href="#" className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#f15c22] truncate">{title}</p>
              <div className="ml-2 flex-shrink-0 flex">
                <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {status}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {date}
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    )
  }

  
function SendSMS() {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Send SMS</h1>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="recipients" className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
              <input type="text" id="recipients" name="recipients" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" placeholder="Enter phone numbers or select a group" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" placeholder="Enter your message here"></textarea>
            </div>
            <button type="submit" className="bg-[#f15c22] text-white px-4 py-2 rounded-md hover:bg-[#d94d1a] transition-colors">Send SMS</button>
          </form>
        </div>
      </div>
    )
  }
  
  
  function USSDCampaign() {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">USSD Campaign</h1>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="ussd-code" className="block text-sm font-medium  text-gray-700 mb-2">USSD Code</label>
              <input type="text" id="ussd-code" name="ussd-code" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" placeholder="Enter USSD code" />
            </div>
            <div className="mb-4">
              <label htmlFor="menu-options" className="block text-sm font-medium text-gray-700 mb-2">Menu Options</label>
              <textarea id="menu-options" name="menu-options" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" placeholder="Enter menu options"></textarea>
            </div>
            <button type="submit" className="bg-[#f15c22] text-white px-4 py-2 rounded-md hover:bg-[#d94d1a] transition-colors">Create USSD Campaign</button>
          </form>
        </div>
      </div>
    )
  }
  
 
  function Templates() {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Templates</h1>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="mb-4 flex justify-between items-center">
            <input type="text" placeholder="Search templates" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" />
            <button className="bg-[#f15c22] text-white px-4 py-2 rounded-md hover:bg-[#d94d1a] transition-colors">Create Template</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Welcome Message</h3>
              <p className="text-sm text-gray-600 mb-4">Welcome to our service! We're glad to have you on board.</p>
              <div className="flex justify-end">
                <button className="text-[#f15c22] hover:text-[#d94d1a] mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function Reports() {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Reports</h1>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="report-type" className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
              <select id="report-type" name="report-type" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]">
                <option>SMS Campaigns</option>
                <option>Voice Campaigns</option>
                <option>USSD Campaigns</option>
              </select>
            </div>
            <div>
              <label htmlFor="date-range" className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <input type="date" id="date-range" name="date-range" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" />
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select id="status" name="status" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]">
                <option>All</option>
                <option>Delivered</option>
                <option>Failed</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
          <button className="bg-[#f15c22] text-white px-4 py-2 rounded-md hover:bg-[#d94d1a] transition-colors">Generate Report</button>
        </div>
      </div>
    )
  }
  
  function SettingsPage() {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <form>
            <div className="mb-4">
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input type="text" id="company-name" name="company-name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Change Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" />
            </div>
            <button type="submit" className="bg-[#f15c22] text-white px-4 py-2 rounded-md hover:bg-[#d94d1a] transition-colors">Save Changes</button>
          </form>
        </div>
      </div>
    )
  }
  
  function CreditManagement() {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Credit Management</h1>
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Current Balance</h2>
            <p className="text-3xl font-bold text-[#f15c22]">5,000 Credits</p>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="credit-amount" className="block text-sm font-medium text-gray-700 mb-2">Purchase Credits</label>
              <input type="number" id="credit-amount" name="credit-amount" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22]" placeholder="Enter amount" />
            </div>
            <button type="submit" className="bg-[#f15c22] text-white px-4 py-2 rounded-md hover:bg-[#d94d1a] transition-colors">Buy Credits</button>
          </form>
        </div>
      </div>
    )
  }
  