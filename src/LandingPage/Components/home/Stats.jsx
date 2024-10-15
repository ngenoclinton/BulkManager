import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const statsData = [
  {
    id: 'n327',
    number: '327%',
    content: 'Increase conversions by texting when added to the sales process.'
  },
  {
    id: 'n77',
    number: '77%',
    content: 'of consumers make shopping decisions based on SMS offers.'
  },
  {
    id: 'n87',
    number: '87%',
    content: 'Of text messages read within 15 minutes of being delivered'
  }
];

const StatItem = ({ id, number, content, isVisible }) => (
  <motion.div 
    className="stats__item flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xl shadow-inner"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
    transition={{ duration: 0.5 }}
  >
    <motion.h2 
      className="heading stats__metric-number text-5xl text-[#f15c22] font-bold mb-4 text-primary"
      id={id}
      initial={{ scale: 0.5 }}
      animate={{ scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {number}
    </motion.h2>
    <div className="w-full h-px bg-gray-200 mb-4"></div>
    <p className="paragraph stats__metric-content text-sm sm:text-base md:text-lg text-gray-600">
      {content}
    </p>
  </motion.div>
);

export default function Stats   () {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="wrapper__inner py-14 md:py-20 max-w-6xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="stats block-stats__stats">
          <motion.h2 
            className="heading stats__heading text-xl sm:text-2xl md:text-5xl leading-16 font-bold text-center md:text-left mb-12 text-gray-800 md:w-1/2 "
            id="turn-shopping-season-into-a-profit-season"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.5 }}
          >
            Turn shopping season into a profit season
          </motion.h2>
          <div 
            className="stats__items grid grid-cols-1 md:grid-cols-3 gap-8"
            aria-label="Statistics data"
          >
            {statsData.map((stat, index) => (
              <StatItem key={stat.id} {...stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}