import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

import Footer from '../Footer/Footer';

import RegisterForm from "./imgs/register.png"
const HeroSection = () => (
  <div className="relative bg-orange-600 py-20 w-full">
    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-evenly">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base text-white mb-4 font-bold">Notify Everyone Via Voice or Text Message In Seconds!. </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Automated Voice Message & Texts
          </h1>
          <p className="text-lg text-white mb-6">SMS & Voice is the easiest to use automated voice message and text notification system you've ever seen</p>
          <button className="bg-orange-900/80 text-white font-bold py-2 px-8 rounded-lg border border-white  hover:bg-opacity-90 transition duration-300">
            Try for free
          </button>
        </motion.div>
        <motion.div 
          className="md:w-2/5 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
        <img src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlzdGljc3xlbnwwfHwwfHx8MA%3D%3D" alt="How It Works" className="w-full h-auto rounded-lg shadow-lg" />
          {/* <img src="https://cdn.pixabay.com/photo/2017/10/29/14/49/statistics-2899906_640.jpg   " alt="How It Works" className="w-full h-auto rounded-lg shadow-lg" /> */}
        </motion.div>
      </div>
    </div>
  </div>
);

const StepSection = ({ step, title, description, image, isImageLeft, features }) => (
  <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <motion.div 
        className={`flex flex-col ${isImageLeft ? 'md:flex-row-reverse ' : 'md:flex-row'} items-center justify-evenly mb-16 gap-10`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-2xl font-bold text-[#1e97db] mb-4">Step {step}.</h2>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

          <p className="text-lg text-gray-600 mb-6 w-4/5">{description}</p>
          {/* <button className="bg-[#f15c22] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
            Learn More
          </button> */}
        </div>
        <div className={`${isImageLeft ? 'md:h-2/5' : 'h-full'} h-2/5 md:w-1/2`}>
          <img src={image} alt={`Step ${step}`} className={`${isImageLeft ? 'h-2/5' : ''} w-full h-auto rounded-lg shadow-lg` } />
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="bg-gray-100 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
// Animated Icons
const AnimatedIcon = ({ icon: Icon, className, direction, tilt}) => (
  <motion.div
    className={className}
    animate={{
      y: direction === 'up' ? [0, -10, 0] : [0, 10, 0],
      rotate: tilt,
    }}
    transition={{
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 0.5,
      }
    }}

  >
    <Icon size={52} className="text-white px-1 text-xl" />
  </motion.div>
);

const HowItWorks = () => {
  return (
    <div>
      {/* hero */}
      <HeroSection />
      {/* steps */}
      <StepSection 
        step={1}
        title="Create Your Account"
        description="Sign up and set up your account in just a few minutes. Choose your preferred communication method: voice, or text."
        image={ RegisterForm }
        isImageLeft={false}
        features={[
          { title: "Easy Registration", description: "Simple sign-up process with minimal information required." },
          { title: "Multiple Options", description: "Choose from voice, text, or USB communication methods." },
          { title: "Secure Setup", description: "Your data is protected with state-of-the-art security measures." },
        ]}
      />
      <StepSection 
        step={2}
        title="Compose Your Message"
        description="Create your message using our intuitive interface. Customize it to fit your needs and target audience."
        image="https://img.freepik.com/free-vector/stalker-with-laptop-controls-intimidates-victim-with-messages-cyberstalking-pursuit-social-identity-online-false-accusations-concept-pinkish-coral-bluevector-isolated-illustration_335657-1324.jpg?t=st=1728456195~exp=1728459795~hmac=ff1c3f1fdb73df04f2d5fd336e189ed909bc90b88ee79b27cc75a31447312153&w=740"
        isImageLeft={true}
        features={[
          { title: "User-Friendly Interface", description: "Intuitive design for effortless message creation." },
          { title: "Customization Options", description: "Tailor your message with various templates and styles." },
          { title: "Preview Functionality", description: "Review your message before sending to ensure perfection." },
        ]}
      />
      <StepSection 
        step={3}
        title="Send and Track"
        description="Dispatch your message with a single click. Monitor delivery status and engagement in real-time."
        image="https://img.freepik.com/free-vector/flat-design-people-talking-online_23-2149077907.jpg?size=626&ext=jpg&ga=GA1.1.1315670878.1727435405&semt=ais_hybrid"
        isImageLeft={false}
        features={[
          { title: "One-Click Sending", description: "Effortlessly dispatch your message to your audience." },
          { title: "Real-Time Tracking", description: "Monitor delivery status and engagement as it happens." },
          { title: "Detailed Analytics", description: "Gain insights with comprehensive performance reports." },
        ]}
      />

      {/* Call to action  */}
    <div className="bg-gray-100 py-16">
    <div className="container w-4/5 mx-auto px-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0 md:mr-8">Try SMS & Voice Automated Voice Message System for Free Now</h2>
        <p className="text-base w-3/4 text-gray-600 mb-4 md:mb-0 md:mr-8">Join thousands of satisfied customers today! .Create your account now and send 25 free calls or text messages. No Credit Card Required!</p>
        <motion.button
          className="bg-[#f15c22] text-white text-sm w-1/4 font-bold py-2 px-3 rounded-lg hover:bg-opacity-90 transition duration-300"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Sign Up Now
        </motion.button>
      </div>
      </div>
    </div> 
     {/* Free trial and demo booking*/}
     <div className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center">
        <AnimatedIcon icon={Phone} direction="up" tilt={-15} className="hidden md:block bg-[#f15c22] bg-orange-900/80 p-2 rounded-lg" />
        <div className="text-center mx-8 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-base text-gray-600 mb-6 flex justify-center mx-auto w-3/5">
            Experience the power of seamless communication. Try our platform or schedule a demo today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-10 space-y-5 sm:space-y-0 sm:space-x-4">
            <motion.button
              className="bg-[#f15c22] text-white text-base font-semibold py-2 px-5 rounded-xl hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Try It For Free
            </motion.button>
            <motion.button
              className="bg-white text-[#f15c22] text-base font-semibold py-2 px-5 rounded-xl border-2 border-[#f15c22] hover:bg-[#f15c22] hover:text-white transition duration-500"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.button>
          </div>
        </div>
        <AnimatedIcon icon={MessageSquare} tilt={15} direction="down" className="hidden md:block bg-[#f15c22] bg-orange-900/80 p-2 rounded-lg" />
      </div>
    </div>
  </div>
    <Footer/>
      
    </div>
  );
};

export default HowItWorks;