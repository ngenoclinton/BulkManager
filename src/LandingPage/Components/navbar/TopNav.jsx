import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="bg-white border-b border-gray-200 hidden sm:block">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center py-3">
          <div className='flex space-x-6 items-center'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm"
            >
              <a href="tel:+1234567890" className="text-gray-600 hover:text-[#f15c22] transition-colors duration-300 flex items-center">
                <Phone className="inline-block mr-2 h-4 w-4" />
                <span className="hidden md:inline">+1 (234) 567-890</span>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm"
            >
              <a href="mailto:hello@intouchvas.io" className="text-gray-600 hover:text-[#f15c22] transition-colors duration-300 flex items-center">
                <Mail className="inline-block mr-2 h-4 w-4" />
                <span className="hidden md:inline">hello@intouchvas.io</span>
              </a>
            </motion.div>
          </div>
          
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f15c22] text-white px-3 py-1 rounded-md text-sm font-medium shadow-md hover:bg-[#d14c12] transition-colors duration-300"
            >
              Request Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium shadow-md hover:bg-gray-50 transition-colors duration-300"
            >
              <Link to="/login">Login</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium shadow-md hover:bg-gray-700 transition-colors duration-300"
            >
              <Link to="/register">Register</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;