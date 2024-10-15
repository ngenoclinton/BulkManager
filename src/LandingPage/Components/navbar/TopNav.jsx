import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopNav = () => {
  return (
    <nav className="bg-gray-50  bord border-gray-200 hidden sm:block">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center py-3">
          <div className='flex space-x-6 items-center'>
            <div className="text-sm">
              <a href="tel:+1234567890" className="text-gray-600 hover:text-[#f15c22] transition-colors duration-300 flex items-center">
                <Phone className="inline-block mr-2 h-4 w-4" />
                <span className="hidden md:inline">+1 (234) 567-890</span>
              </a>
            </div>
            <div className="text-sm">
              <a href="mailto:hello@intouchvas.io" className="text-gray-600 hover:text-[#f15c22] transition-colors duration-300 flex items-center">
                <Mail className="inline-block mr-2 h-4 w-4" />
                <span className="hidden md:inline">hello@intouchvas.io</span>
              </a>
            </div>
          </div>
          
          <div>
            <button className="bg-[#f15c22] text-white px-3 py-1 rounded-md text-sm font-medium shadow-md hover:bg-[#d14c12] transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;