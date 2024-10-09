import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, Hash, Star, Menu, X, CircleCheckBig, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer({ color = "rgb(30 41 59)", height = 100 }) {
  return (
    <div className='relative'>
      <div className="relative w-full" style={{ height: `${height}px` }}>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill={color}
          initial={{
            d: "M0,320L1440,320L1440,320L0,320Z",
            }}
          animate={{
            d: "M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z", 
            }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
      <footer className="bg-gray-800 text-white py-12 px-4 relative z-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">SMS & Voice</h3>
            <p className="text-gray-400">Powerful communication solutions</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p className="text-gray-400 flex items-center"><Mail className="mr-2" size={16} /> contact@smsvoice.com</p>
              <p className="text-gray-400 flex items-center"><Phone className="mr-2" size={16} /> +1 (234) 567-890</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 SMS & Voice. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[<Linkedin />, <Twitter />, <Facebook />, <Instagram />].map((icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit our ${icon.type.name} page`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}