import React from 'react';
import { motion } from 'framer-motion';
import {Link } from 'react-router-dom'; 

import BMSL from'../../assets/images/svgs/businessman-sending-large.jpg'
import Notifications from'../../assets/images/svgs/message-notification-.jpg'
import Reminders from'../../assets/images/svgs/vecteezy_a-cartoon-style-illustration-depicting-a-smartphone-with-an_47784574.jpg'

const features = [
  {
    title: "Send promotional SMS messages",
    description: "Simple, fast, and secure way to launch marketing campaigns and engage with customers. Send promotions, discounts, and offers over the world’s most widely available channel",
    cta: "Try for free",
    image: BMSL
  },
  {
    title: "Send SMS reminders",
    description: "Keep your customers updated and engaged throughout their entire journey. Send abandoned cart reminders, delivery reminders, or re-stock reminders.",
    cta: "Try for free",
    image: Reminders
  },
  {
    title: "Send SMS notifications",
    description: "Send SMS alerts for flash sales, SMS notifications for pop-up shops or sales, confirmation of purchase, or an update on delivery status changes.",
    cta: "Try for free",
    image: Notifications
  }
];

const FeatureSection = ({ title, description, cta, image, isReversed, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.2 
      } 
    }
  };

  return (
    <motion.div 
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between py-16 border-b border-gray-200 last:border-b-0 max-w-6xl mx-auto`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full md:w-2/5 mb-5 md:mb-7 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">{description}</p>
       <Link to="register"> <motion.button 
          className="bg-orange-500 text-white px-4 md:px-6 py-1 md:py-2 rounded-full hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          {cta}
        </motion.button></Link>
      </div>
      <div className="w-3/5 md:w-2/5 h-1/3">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default function AlternatingFeatures() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <FeatureSection 
            key={index}
            {...feature}
            isReversed={index % 2 !== 0}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}