'use client'

import { useState } from 'react'
import { Bell, ChevronDown, CreditCard, Home, Mail, MessageSquare, Phone, PieChart, Settings, Users } from 'lucide-react'
import {Link }from 'react-router-dom'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static absolute z-30`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-2xl font-bold text-[#f15c22]">SMS&VOICE</span>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-grow">
          <SidebarLink icon={<Home />} label="Dashboard" />
          <SidebarLink icon={<MessageSquare />} label="Send SMS" />
          <SidebarLink icon={<Phone />} label="Voice Campaign" />
          <SidebarLink icon={<Mail />} label="USSD Campaign" />
          <SidebarLink icon={<Users />} label="Contacts" />
          <SidebarLink icon={<Mail />} label="Templates" />
          <SidebarLink icon={<PieChart />} label="Reports" />
          <SidebarLink icon={<Settings />} label="Settings" />
          <SidebarLink icon={<CreditCard />} label="Credit Management" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <button onClick={() => setIsSidebarOpen(true)} className="md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <nav className="hidden md:flex space-x-4">
                <NavLink href="#">Dashboard</NavLink>
                <NavLink href="#">Campaigns</NavLink>
                <NavLink href="#">Contacts</NavLink>
                <NavLink href="#">Reports</NavLink>
                <NavLink href="#">Settings</NavLink>
              </nav>
              <div className="flex items-center">
                <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]">
                  <Bell className="h-6 w-6" />
                </button>
                <div className="ml-3 relative">
                  <div>
                    <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]">
                      <img className="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Quick Statistics */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
              <StatCard title="Total SMS Sent" value="15,234" />
              <StatCard title="Scheduled Messages" value="42" />
              <StatCard title="Credits Remaining" value="5,000" />
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#f15c22] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94d1a] transition-colors">
                  Send SMS
                </button>
                <button className="bg-[#f15c22] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d94d1a] transition-colors">
                  Send Voice Call
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  <ActivityItem title="SMS Campaign: Summer Sale" date="2 hours ago" status="Delivered" />
                  <ActivityItem title="Voice Campaign: Customer Survey" date="Yesterday" status="In Progress" />
                  <ActivityItem title="SMS Campaign: Appointment Reminder" date="2 days ago" status="Completed" />
                </ul>
              </div>
            </div>

            {/* Credit Management */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Credit Management</h2>
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Purchase Credits</h3>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>Add more credits to your account to continue sending messages.</p>
                  </div>
                  <form className="mt-5 sm:flex sm:items-center">
                    <div className="w-full sm:max-w-xs">
                      <label htmlFor="credits" className="sr-only">
                        Credits
                      </label>
                      <input
                        type="number"
                        name="credits"
                        id="credits"
                        className="shadow-sm focus:ring-[#f15c22] focus:border-[#f15c22] block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Number of credits"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-[#f15c22] hover:bg-[#d94d1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Purchase
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Campaign Creation */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Create Campaign</h2>
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <form>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="campaign-type" className="block text-sm font-medium text-gray-700">
                          Campaign Type
                        </label>
                        <select
                          id="campaign-type"
                          name="campaign-type"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22] sm:text-sm rounded-md"
                        >
                          <option>SMS Campaign</option>
                          <option>Voice Campaign</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                          Message Content
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          className="shadow-sm focus:ring-[#f15c22] focus:border-[#f15c22] mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Enter your message here"
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="recipients" className="block text-sm font-medium text-gray-700">
                          Recipients
                        </label>
                        <input
                          type="text"
                          name="recipients"
                          id="recipients"
                          className="shadow-sm focus:ring-[#f15c22] focus:border-[#f15c22] mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Enter phone numbers or select a contact group"
                        />
                      </div>
                      <div>
                        <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
                          Schedule
                        </label>
                        <input
                          type="datetime-local"
                          name="schedule"
                          id="schedule"
                          className="shadow-sm focus:ring-[#f15c22] focus:border-[#f15c22] mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f15c22] hover:bg-[#d94d1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]"
                      >
                        Create Campaign
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Reports Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reports</h2>
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="mb-4">
                    <label htmlFor="report-type" className="block text-sm font-medium text-gray-700">
                      Report Type
                    </label>
                    <select
                      id="report-type"
                      name="report-type"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22] sm:text-sm rounded-md"
                    >
                      <option>SMS Campaigns</option>
                      <option>Voice Campaigns</option>
                      <option>USSD Campaigns</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
                      Date Range
                    </label>
                    <input
                      type="date"
                      name="date-range"
                      id="date-range"
                      className="shadow-sm focus:ring-[#f15c22] focus:border-[#f15c22] mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#f15c22] focus:border-[#f15c22] sm:text-sm rounded-md"
                    >
                      <option>All</option>
                      <option>Delivered</option>
                      <option>Failed</option>
                      <option>Pending</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f15c22] hover:bg-[#d94d1a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f15c22]"
                  >
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarLink({ icon, label }) {
  return (
    <Link
      href="#"
      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f15c22]"
    >
      {icon}
      <span className="mx-4">{label}</span>
    </Link>
  )
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-[#f15c22] px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </Link>
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