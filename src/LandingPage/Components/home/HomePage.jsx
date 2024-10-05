import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {MessageSquare, Phone, Mail, Hash, Star, Menu, X, CircleCheckBig} from 'lucide-react';
import ScrollSection from './ScrollSection';


import Fiverr from '../../assets/images/resources/Fiverr-Pro.svg'
import Group from '../../assets/images/resources/Group.svg';
import wave from '../../assets/images/resources/VectorWave.svg';
import Slogo from '../../assets/images/resources/S-logo.svg';
import SocialMedia from '../../assets/images/resources/sm-Group.5.png';

import HeroSection from './HeroSection';
import ClientsGrid from './Clients';
import Stats from './Stats';
import AlternatingFeatures from './AlternateFeature';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  

  const testimonials = [
    { name: 'John Doe', company: 'Tech Co', text: 'This system revolutionized our communication strategy!' },
    { name: 'Jane Smith', company: 'Marketing Inc', text: 'Incredibly easy to use with powerful features.' },
    { name: 'Sam Brown', company: 'Sales Corp', text: 'The voice call feature is a game-changer for us.' },
  ];
 
   // Framer Motion Variants for animation
  const listItemVariants = {
    hidden: { opacity: 0, x: 50 },  // Start off-screen to the left
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3, // Stagger effect, each item will appear after the other
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans mx-auto">

      <HeroSection/>

      {/* {Clients Grid} */}
      <ClientsGrid/>

      {/* Stats */}
      <Stats />

      {/* Feature */}
      <AlternatingFeatures />
      {/* Testimonials Section */}
    {/* Feature Highlights */}
    <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <MessageSquare />, title: 'Bulk SMS', description: 'Send thousands of SMS at once' },
              { icon: <Phone />, title: 'Voice Campaigns', description: 'Reach customers with voice messages' },
              { icon: <Hash />, title: 'USSD Integration', description: 'Interactive mobile experiences' },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-[#f15c22] text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>

    <section>
      <ScrollSection />
    </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
            key={activeTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-4 text-gray-700 italic">"{testimonials[activeTestimonial].text}"</p>
            <p className="font-semibold text-gray-800">{testimonials[activeTestimonial].name}</p>
            <p className="text-[#f15c22]">{testimonials[activeTestimonial].company}</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
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
              <p className="text-gray-400">contact@smsvoice.com</p>
              <p className="text-gray-400">+1 (234) 567-890</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 SMS & Voice. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* {[<LinkedIn />].map((icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))} */}
          </div>
        </div>
      </footer>
    </div>
  );
}