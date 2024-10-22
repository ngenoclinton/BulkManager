import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom'
import { Bell, ChevronDown, CreditCard, Home, Mail, MessageSquare, Phone, PieChart, Settings, Users, ChevronRight, ChevronLeft } from 'lucide-react'
import { Sidebar } from './dashLayout/SideBar'
import { MainContent } from './dashLayout/MainContent'

function DashboardHome()  {
  
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed)

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="flex  bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white min-h-screen flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
        <Sidebar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed}/>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-x-hidden h-screen">
        <MainContent handleNavigation={handleNavigation} isUserMenuOpen={isUserMenuOpen} setIsUserMenuOpen={setIsUserMenuOpen}  />
      </div>

    </div>
  )
}
export default DashboardHome;