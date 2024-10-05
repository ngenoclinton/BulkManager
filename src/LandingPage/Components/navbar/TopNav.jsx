import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail} from 'lucide-react';
import { Link } from 'react-router-dom';

 const TopNav =()=>{
    return (
      <div className='px-28'>
        {/* Top Navigation */}
        <nav className="bg-yellow  z-20 border-b border-grey-500">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
              <div className='flex space-x-12   items-center'>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-base"
              >
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Phone className="inline-block mr-2 h-6 w-6 " />
                  +1 (234) 567-890
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-base"
              >
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Mail className="inline-block mr-2 h-6 w-6 text-lg" />
                  hello@intouchvas.io
                </a>
              </motion.div>
              </div>
              
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#f15c22] text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Request Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-gray-50 transition-colors duration-300"
                >
                  <Link to="/login">Login</Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-gray-700 transition-colors duration-300"
                >
                  <Link to="/register">Register</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}


export default TopNav;