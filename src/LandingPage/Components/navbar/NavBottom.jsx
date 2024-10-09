import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence} from 'framer-motion';
import {Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const menuItems = [
    { name: 'Home', path:'/' },
    { 
      name: 'Features',
      path:"/features",
      submenu: [
        {name:'Mass Messaging',path: '/about/contact-support'},
        {name:'Voice Calls', path: '/about/contact-support'},
      ]
    },
    { name: 'Who we Are',  
      path:"/about",  // Path for the main item
      submenu: [
        { name: 'How it works', path: '/how-it-works' },
        { name: 'Contact Us', path: '/contact-support' }
      ]
    },
    { 
      name: 'Pricing', 
      path:'/pricing',
    },
    { name: 'Blog', 
      path:"/blog" },
  ];
const NavBottom=()=>{
const [hoveredItem, setHoveredItem] = useState(null);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);
const navControls = useAnimation();
const navRef = useRef(null);
  
    useEffect(() => {
      if (hoveredItem && navRef.current) {
        const navItem = navRef.current.querySelector(`[data-name="${hoveredItem}"]`);
        if (navItem) {
          const navItemRect = navItem.getBoundingClientRect();
          const navRect = navRef.current.getBoundingClientRect();
          // setTrianglePosition(navItemRect.left - navRect.left + navItemRect.width / 2);
        }
      }
    }, [hoveredItem]);
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY) {
            navControls.start({ y: '-100%', transition: { duration: 0.3 } });
          } else {
            navControls.start({ y: 0, transition: { duration: 0.3 } });
          }
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
      }, [lastScrollY, navControls]);

return (
<div>
{/* Main Navigation - Sticky */}
<motion.nav 
className="bg-white shadow-md sticky top-0 z-10"
initial={{ y: 0 }}
animate={navControls}
>
<div className="container mx-auto px-4 max-w-6xl ">
    <div className="flex justify-between items-center py-4">
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4"
    >
        {/* <img src="" alt="Logo" className="h-10 w-10" /> */}
        <span className="font-bold text-3xl text-[#f15c22]">SMS & Voice</span>
    </motion.div>

    <nav className="bg-white" ref={navRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">            
             {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 z-30">
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
                                  className={`block px-4 py-3 text-base text-[#f15c22] hover:text-black hover transition-colors duration-200
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
          </div>
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

{/* Mobile Menu */}
{isMenuOpen && (
<motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    className="md:hidden bg-white shadow-md"
>
    <div className="container mx-auto px-4 py-2">
    {['Home', 'About', 'Features', 'Pricing', 'Contact Us'].map((item) => (
        <motion.a
        key={item}
        href={`#${item.toLowerCase().replace(' ', '-')}`}
        className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        >
        {item}
        </motion.a>
    ))}
    </div>
</motion.div>
)}
</div>
)
}

export default NavBottom;