import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { 
    name: 'Who we Are', 
    path: '/about',
    submenu: [
      { name: 'How it works', path: '/how-it-works' },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact Us', path: '/contact-support' }
];

const NavBottom = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navControls = useAnimation();
  const navRef = useRef(null);


  const slideVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, type: 'spring', stiffness: 120 }
    })
  };

  return (
    <div>
      <motion.nav 
        className="bg-white shadow-md sticky top-0 z-10"
        initial={{ y: 0 }}
        animate={navControls}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <span className="font-bold text-3xl text-[#f15c22]">SMS & Voice</span>
            </motion.div>

            <nav className="hidden md:block" ref={navRef}>
              <div className="flex items-center space-x-4">
                {menuItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      to={item.path}
                      className="text-gray-700 hover:text-[#f15c22] px-3 py-2 rounded-md text-base font-medium flex items-center transition-colors duration-200 relative group"
                    >
                      {item.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f15c22] group-hover:w-full transition-all duration-300"></div>
                    </Link>
                    
                    {item.submenu && (
                      <AnimatePresence>
                        {hoveredItem === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-30 -left-10 mt-2 w-80 rounded-b-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                            style={{ borderTop: '5px solid #f15c22' }}
                          >
                            <div className="relative px-4 py-4">
                              {item.submenu.map((subItem, index) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={`block px-4 py-3 text-base text-[#f15c22] hover:text-black transition-colors duration-200
                                    ${index !== item.submenu.length - 1 ? 'border-b border-gray-200' : ''}
                                  `}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { x: '100%' },
                visible: { x: '0%' }
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 right-4"
                >
                  <X />
                </button>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={slideVariants}
                  >
                    <Link
                      to={item.path}
                      className="block py-2 text-gray-600 hover:text-[#f15c22] transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-gray-600 hover:text-[#f15c22] transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBottom;