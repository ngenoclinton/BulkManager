import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NavBottom from './NavBottom';
import TopNav from './TopNav';

// const TopNav = ({ isVisible }) => (
//   <motion.nav
//     className="bg-gray-100 py-2"
//     initial={{ opacity: 1, y: 0 }}
//     animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
//     transition={{ duration: 0.3 }}
//   >
//     <div className="container mx-auto px-4 flex justify-between items-center">
//       <div className="flex space-x-4">
//         <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-gray-800">+1 (234) 567-890</a>
//         <a href="mailto:info@example.com" className="text-sm text-gray-600 hover:text-gray-800">info@example.com</a>
//       </div>
//       <div className="flex space-x-2">
//         <Link to="/login" className="text-sm text-gray-600 hover:text-gray-800">Login</Link>
//         <Link to="/register" className="text-sm text-gray-600 hover:text-gray-800">Register</Link>
//       </div>
//     </div>
//   </motion.nav>
// );

// const BottomNav = ({ isSticky }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: 'Home', link: '/' },
//     { name: 'About', link: '/about' },
//     { name: 'Services', link: '/services' },
//     { name: 'Contact', link: '/contact' },
//   ];

//   return (
//     <motion.nav
//       className={`bg-white shadow-md ${isSticky ? 'fixed top-0 left-0 right-0 z-10' : ''}`}
//       initial={{ y: 0 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <Link to="/" className="text-xl font-bold text-gray-800">Logo</Link>
//           <div className="hidden md:flex space-x-4">
//             {menuItems.map((item) => (
//               <Link key={item.name} to={item.link} className="text-gray-600 hover:text-gray-800">{item.name}</Link>
//             ))}
//           </div>
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <motion.div
//           className="md:hidden"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//         >
//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.link}
//               className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// };

const Navbar = () => {
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isBottomSticky, setIsBottomSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsTopVisible(false);
        setIsBottomSticky(true);
      } else {
        setIsTopVisible(true);
        setIsBottomSticky(currentScrollY > 50);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header>
      <TopNav isVisible={isTopVisible} />
      <NavBottom isSticky={isBottomSticky} />
    </header>
  );
};

export default Navbar;