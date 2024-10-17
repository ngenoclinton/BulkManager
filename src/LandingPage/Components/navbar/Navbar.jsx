'use client'

import { useState } from 'react'
import { Phone, Mail, ChevronDown, Menu, X, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Navbar */}
      <div className="bg-gray-100 py-2  hidden sm:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#f15c22]">
              <Phone className="h-4 w-4" />
              <span>+123 456 7890</span>
            </a>
            <a href="mailto:hello@sms&voice.io" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-[#f15c22] ">
              <Mail className="h-4 w-4" />
              <span>info@sms&voice.com</span>
            </a>
          </div>
          <Link to="">
            <button className="bg-[#f15c22] text-white px-4 py-2 rounded text-sm hover:bg-[#d94d1a] transition-colors">
              Request Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-white shadow z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 relative">
            {/* Left: SMS & Voice icon */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <MessageSquare className="h-8 w-8 text-[#f15c22]" />
              <span className="ml-2 text-xl font-bold text-[#f15c22]">SMS & VOICE</span>
            </Link>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden lg:flex space-x-8 z-50 items-center judtify-evenly">
              <NavLink href="/">Home</NavLink>
              <NavLink href='/features'>Features</NavLink>
              <NavDropdown href="/about" title='Who we are'>
                <Link to="/how-it-works">How it works</Link>
              </NavDropdown>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/contact-support">Contact Us</NavLink>
              <NavLink href="/dash">DashBoard</NavLink>

            </div>

            {/* Right: Login/Register */}
            <div className="hidden lg:flex items-center space-x-5">
              <Link to="/login" className="bg-[#f15c22] text-white px-5 py-2 rounded hover:bg-[#d94d1a] transition-colors relative group">
                Login
              </Link>
              <div>
              <Link
                to="/register"
                className="text-gray-600 px-4 py-2 hover:text-[#f15c22] transition-colors relative group"
              >
                Register
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f15c22] group-hover:w-full transition-all duration-300"></div>
              </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#f15c22]">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <div className="p-4">
            <button onClick={() => setIsOpen(false)} className="mb-4 text-gray-600 hover:text-[#f15c22]">
              <X className="h-6 w-6" />
            </button>
            <div className="space-y-4">
              <MobileNavLink href="/" setIsOpen={setIsOpen} isOpen={isOpen}>Home</MobileNavLink>
              <MobileNavLink href="/features" setIsOpen={setIsOpen} isOpen={isOpen}>Features</MobileNavLink>
              <MobileNavDropdown href="/about" title='Who we are' setIsOpen={setIsOpen} isOpen={isOpen}>
                <Link to="/how-it-works" onClick={() => setIsOpen(false)} >How it works</Link>
              </MobileNavDropdown>              
              <MobileNavLink href="/pricing" setIsOpen={setIsOpen} isOpen={isOpen}>Pricing</MobileNavLink>
              <MobileNavLink href="/contact-support" setIsOpen={setIsOpen} isOpen={isOpen}>Contact Us</MobileNavLink>
              <Link
               to="/login"
                className="block w-full text-center border-2 border-[#f15c22] text-[#f15c22] font-bold px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="register"
                className="block w-full text-center bg-[#f15c22] text-white font-bold px-4 py-2 rounded"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function NavLink({ href, children }) {
  return (
    <Link to={href} 
    // className="text-gray-600 hover:text-[#f15c22] transition-colors"
    className="text-gray-700 hover:text-[#f15c22] px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-200 relative group"
    >
      {children}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f15c22] group-hover:w-full transition-all duration-300"></div>
    </Link>
  )
}

function NavDropdown({ title,href,children }  ) {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <Link to={href} className="flex items-center text-gray-600 hover:text-[#f15c22] transition-colors">
        {title}
        <ChevronDown className={`h-4 w-4 ml-1 ${isOpen ? 'rotate-180' : ''}`}/>
      </Link>
      <div 
      className="absolute left-0 mt-2 w-48 rounded-lg flex flex-col shadow-lg bg-white ring-1 ring-black  ring-opacity-5 opacity-0  pt-3 px-2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out"
      style={{ borderTop: '3px solid #f15c22' }}
      >
        <div 
        className="py-1 flex flex-col space-y-2 block text-base text-black hover:text-[#f15c22]  transition-colors duration-200 relative group"
        >
          {children}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f15c22] group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    </div>
  )
}

function MobileNavLink({ href, children, setIsOpen, isOpen}) {
  return (
    <Link
      to={href}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#f15c22] hover:bg-gray-50 transition-colors"
      onClick={() => setIsOpen(!isOpen)} 
    >
      {children}
    </Link>
  )
}

function MobileNavDropdown({ title, children, href, setIsOpen, isOpen }) {
  return (
    <Link to={href}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-[#f15c22] hover:bg-gray-50 transition-colors"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform `} />
      </button>
      <div className="pl-4">{children}</div>
    </Link>
  )
}