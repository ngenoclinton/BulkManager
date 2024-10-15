import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import {MessageSquare, Phone, Hash} from 'lucide-react';

import HeroSection from './HeroSection';
import ClientsGrid from './Clients';
import Stats from './Stats';
import AlternatingFeatures from './AlternateFeature';
import Footer from '../Footer/Footer';

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
    <div className="min-h-screen bg-gradient-to-b text-white-900 font-sans mx-auto">

      <HeroSection/>

      {/* {Clients Grid} */}
      <ClientsGrid/>

      {/* Stats */}
      <Stats />

      {/* Feature */}
      <AlternatingFeatures />

    {/* Feature Highlights */}
    <section className="py-12 md:py-16 px-4 max-w-6xl mx-auto">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">Our Key Features</h2>
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
                <div className="text-[#f15c22] text-4xl mb-4 flex items-center justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
    </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
            key={activeTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base md:text-lg mb-4 text-gray-700 italic">"{testimonials[activeTestimonial].text}"</p>
            <p className="font-semibold text-gray-800 text-sm md:text-lg" >{testimonials[activeTestimonial].name}</p>
            <p className="text-[#f15c22] text-sm md:text-lg">{testimonials[activeTestimonial].company}</p>
          </motion.div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}