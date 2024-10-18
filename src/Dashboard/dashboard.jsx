'use client'

import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom'
import { Bell, ChevronDown, CreditCard, Home, Mail, MessageSquare, Phone, PieChart, Settings, Users, ChevronRight, ChevronLeft } from 'lucide-react'
// import {Link} from 'react-router-dom'; 

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed)

  return (
    // <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`bg-white min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? 'w-16' : 'w-64'
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <span className={`text-2xl font-bold text-[#f15c22] ${isSidebarCollapsed ? 'hidden' : 'block'}`}>SMS&VOICE</span>
            <button onClick={toggleSidebar} className="text-gray-500 hover:text-[#f15c22]">
              {isSidebarCollapsed ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>
          </div>
          <nav className="flex-grow">
            <SidebarLink to="/" icon={<Home />} label="Dashboard" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/send-sms" icon={<MessageSquare />} label="Send SMS" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/voice-campaign" icon={<Phone />} label="Voice Campaign" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/ussd-campaign" icon={<Mail />} label="USSD Campaign" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/contacts" icon={<Users />} label="Contacts" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/templates" icon={<Mail />} label="Templates" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/reports" icon={<PieChart />} label="Reports" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/settings" icon={<Settings />} label="Settings" collapsed={isSidebarCollapsed} />
            <SidebarLink to="/credit-management" icon={<CreditCard />} label="Credit Management" collapsed={isSidebarCollapsed} />
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <nav className="flex space-x-4">
                  <NavLink to="/">Dashboard</NavLink>
                  <NavLink to="/campaigns">Campaigns</NavLink>
                  <NavLink to="/contacts">Contacts</NavLink>
                  <NavLink to="/reports">Reports</NavLink>
                  <NavLink to="/settings">Settings</NavLink>
                </nav>
                <div className="flex items-center">
                  <Link to="/notifications" className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]">
                    <Bell className="h-6 w-6" />
                  </Link>
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
                <Route path="/" element={<DashboardContent />} />
                <Route path="/send-sms" element={<SendSMS />} />
                <Route path="/voice-campaign" element={<VoiceCampaign />} />
                <Route path="/ussd-campaign" element={<USSDCampaign />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/credit-management" element={<CreditManagement />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/login" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    // </Router>
  )
}

function SidebarLink({ to, icon, label, collapsed }) {
  return (
    <Link
      // to={to}
      className={`flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f15c22] ${
        collapsed ? 'justify-center' : ''
      }`}
    >
      {icon}
      {!collapsed && <span className="mx-4">{label}</span>}
    </Link>
  )
}

function NavLink({ to, children }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'text-[#f15c22] bg-gray-100'
          : 'text-gray-600 hover:text-[#f15c22] hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  )
}

function DashboardContent() {
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
          <Link to="/send-sms" className="bg-[#f15c22] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94d1a] transition-colors">
            Send SMS
          </Link>
          <Link to="/voice-campaign" className="bg-[#f15c22] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94d1a] transition-colors">
            Send Voice Call
          </Link>
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

function SendSMS() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Send SMS</h1>
      {/* Add SMS sending form here */}
    </div>
  )
}

function VoiceCampaign() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Voice Campaign</h1>
      {/* Add voice campaign creation form here */}
    </div>
  )
}

function USSDCampaign() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">USSD Campaign</h1>
      {/* Add USSD campaign creation form here */}
    </div>
  )
}

function Contacts() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Contacts</h1>
      {/* Add contacts management interface here */}
    </div>
  )
}

function Templates() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Templates</h1>
      {/* Add templates management interface here */}
    </div>
  )
}

function Reports() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Reports</h1>
      {/* Add reporting interface here */}
    </div>
  )
}

// function Settings() {
//   return (
//     <div>
//       <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
//       {/* Add settings interface here */}
//     </div>
//   )
// }

function CreditManagement() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Credit Management</h1>
      {/* Add credit management interface here */}
    </div>
  )
}

function Notifications() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Notifications</h1>
        {/* Add notifications list here */}
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

export default Dashboard