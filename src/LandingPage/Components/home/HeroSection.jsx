import React from 'react';
import { motion } from 'framer-motion';
import SocialMedia from '../../assets/images/resources/sm-Group.5.png';
import { ChevronRight, CircleCheckBig} from 'lucide-react';

const HeroSection =()=>{
    
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
  
    return(
        <div className='z-20'>
     {/* Hero Section */}
     {/* bg-gradient-to-r from-[#f15c22] to-[#f47a4d] */}
     <section className=" text-black py-16 px-4 z-0 max-w-6xl mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Send SMS and Voice Messages Instantly
            </motion.h1>
            <motion.p
              className="text-lg mt-2 mb-8 text-black "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Reach your audience effortlessly with our powerful communication platform
              <div className='flex flex-col'>
              <ul className="space-y-4 mt-6">
                {[
                  'Reach your customers instantly',
                  'Cost-Effective and scalable',
                  'Personal and Direct',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial="hidden"
                    animate="visible"
                    variants={listItemVariants}
                    custom={index}  // Custom index to stagger animation
                  >
                    {/* Animated icon */}
                    <motion.div
                      className="flex-shrink-0"
                      initial={{ scale: 0, opacity: 0 }} // Start icon invisible and small
                      animate={{ scale: 1, opacity: 1 }} // Animate icon to be visible
                      transition={{ delay: index * 0.3, duration: 0.5, ease: 'easeInOut' }}
                    >
                      <CircleCheckBig className="text-green-600 w-6 h-6" />
                    </motion.div>

                    {/* Text that slides in */}
                    <motion.li
                      className="text-sm text-gray-800"
                      initial={{ x: -50, opacity: 0 }} // Start text off-screen to the left
                      animate={{ x: 0, opacity: 1 }}  // Animate text to visible
                      transition={{ delay: index * 0.5, duration: 0.6, ease: 'easeInOut' }}
                    >
                      {item}
                    </motion.li>
                  </motion.div>
                ))}
              </ul>
              </div>
            </motion.p>
            <motion.button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-400 hover:scale-1.s02 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try for free <ChevronRight className="inline-block ml-2 " />
            </motion.button>
           
          </div>
          <div className="md:w-1/2 z-0 flex flex-1 transform justify-center">
            
        {/* <div className='z-10 flex flex-1 transform justify-center'> */}
            <motion.img src={SocialMedia} alt='Hero Image'
             className='l-image transform scale-[1] md:scale-[1.1] xl:scale-[1.1] -z-0'
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}/>
        {/* </div>  */}
          </div>
        </div>
      </section>
        </div>
    )
}

export default HeroSection;