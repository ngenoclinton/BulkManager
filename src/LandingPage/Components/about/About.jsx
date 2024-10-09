import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import AboutSections from './AboutSection';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const slides = [
  {
    image: 'https://cdn.pixabay.com/photo/2019/05/17/14/00/podcast-4209769_640.jpg',
    title: 'Innovating Communication',
    description: 'We are revolutionizing how businesses connect with their customers.',
    cta: 'Learn More'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2015/02/21/11/58/hand-644145_640.jpg',
    title: 'Global Reach, Local Touch',
    description: 'Our solutions span the globe, tailored for every market.',
    cta: 'Explore Our Network'
  },
  {
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600s',
    title: 'Empowering Businesses',
    description: 'We provide the tools you need to engage customers effectively.',
    cta: 'See Our Solutions'
  }
];

const TextAnimation = ({ text }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.03 } } }}>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();
  const title = location.state?.pageTitle;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative m-h-screen  overflow-hidden z-0 ">
      <div className="relative m-h-screen  overflow-hidden z-0 ">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
                     
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10  bg-[#f15c22] bg-opacity-10 flex flex-col justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                  <TextAnimation text={slides[currentSlide].title} />
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl mb-8">
                  <TextAnimation text={slides[currentSlide].description} />
                </p>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#f15c22] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
                >
                  {slides[currentSlide].cta}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute z-10 bottom-20 left-4 flex items-center space-x-4 text-white">
          <button
            onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
            className="p-2 rounded-full bg-[#f15c22] bg-opacity-50 hover:bg-opacity-75 transition duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-lg font-semibold">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="p-2 rounded-full bg-[#f15c22] bg-opacity-50 hover:bg-opacity-75 transition duration-300"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>


     </div>
     <AboutSections title={title}/>     
    <Footer/>
    </div>
  );
}