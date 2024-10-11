import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, BarChart2, Sliders, Users, Clock,ChevronRight } from 'lucide-react';
import Footer from '../Footer/Footer';

const HeroSection = () => (
  <div className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920&text=Hero+Background')"}}></div>
    <div className="absolute inset-0 bg-black opacity-80"></div>
    <div className="relative z-10 text-center text-white">
      <motion.h1 
        className="text-3xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bulk SMS & Automated Calling Solutions
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The perfect tools to elevate your customer communication.
      </motion.p>
      <motion.button 
        className="bg-[#f15c22] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Sending Messages Now
      </motion.button>
    </div>
  </div>
);
const iconColors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-yellow-500',
    'bg-indigo-500',
  ];
const FeatureItem = ({ icon: Icon, title, description, colorIndex}) => (
    <motion.div 
      className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg relative overflow-hidden group transition-all duration-400 ease-in-out hover:bg-[#f15c22] hover:bg-opacity-85"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
      <div className={`${iconColors[colorIndex]} w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors duration-400`}>
        <Icon className="text-white w-5 h-5" />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-400">{title}</h3>
        <p className="text-gray-600 mb-4 group-hover:text-white transition-colors duration-400">{description}</p>
        <motion.button
          className="inline-flex items-center text-[#f15c22] font-semibold group-hover:text-white transition-colors duration-400"
          whileHover={{ x: 5 }}
        >
          Learn More <ChevronRight className="ml-1 w-4 h-4" />
        </motion.button>
      </div>
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cover bg-bottom bg-no-repeat opacity-20 group-hover:opacity-25 transition-opacity duration-400"
        style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2018/07/14/11/32/network-3537400_640.png')` }}
      ></div>
    </motion.div>
  );

const FeaturesGrid = () => (
  <div className="bg-white bg-opacity-90 py-16 my-24 rounded-lg shadow-lg">
    <div className="container mx-auto px-4">
      {/* <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureItem 
          icon={MessageSquare} 
          title="Instant Bulk SMS" 
          description="Send SMS messages to thousands of recipients instantly, ensuring your message gets delivered in real-time."
        colorIndex={0}
          
       />
        <FeatureItem 
          icon={Phone} 
          title="Automated Voice Calls" 
          description="Deliver pre-recorded voice messages to customers automatically, providing a personal touch at scale."
            colorIndex={1}
        />
        <FeatureItem 
          icon={BarChart2} 
          title="Real-Time Analytics" 
          description="Track the performance of your SMS and voice campaigns with detailed delivery and response reports."
            colorIndex={2}
        />
        <FeatureItem 
          icon={Sliders} 
          title="Customizable Messages" 
          description="Personalize each message with the recipient's name or other relevant information to enhance engagement."
            colorIndex={3}
        />
        <FeatureItem 
          icon={Users} 
          title="Audience Segmentation" 
          description="Target specific customer groups with tailored messages for more effective communication."
            colorIndex={4}
        />
        <FeatureItem 
          icon={Clock} 
          title="Scheduled Campaigns" 
          description="Plan and schedule your SMS and voice campaigns in advance for optimal timing and efficiency."
            colorIndex={5}
        />
      </div>
    </div>
  </div>
);

const DetailedFeature = ({ title, description, benefits, image, isImageLeft }) => (
  <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-around py-20`}>
    <div className="md:w-1/2 mb-8 md:mb-0 scale-[1] md:scale-[0.9] xl:scale-[1] ">
      <img src={image} alt={title} className="rounded-xl shadow-lg" />
    </div>
    <div className="md:w-1/2 md:px-8">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-base text-gray-600 mb-4">{description}</p>
      <ul className="text-base list-disc list-inside text-gray-600">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  </div>
);

const DetailedBreakdown = () => (
  <div className="bg-white bg-opacity-95 py-12 my-24 rounded-lg shadow-lg">
    <div className="container mx-auto px-10">
      {/* <h2 className="text-3xl font-bold text-center mb-12">Detailed Feature Breakdown</h2> */}
      <DetailedFeature 
        title="Bulk SMS Messaging"
        description="Reach thousands of customers instantly with our powerful Bulk SMS platform."
        benefits={[
          "High delivery rates",
          "Customizable sender ID",
          "Message scheduling",
          "Unicode support for multiple languages"
        ]}
        image="https://cdn.pixabay.com/photo/2020/08/09/14/25/business-5475661_640.jpg"
        isImageLeft={true}
      />
      <DetailedFeature 
        title="Automated Voice Calls"
        description="Engage your audience with personalized voice messages at scale."
        benefits={[
          "Text-to-speech technology",
          "Custom voice recordings",
          "Interactive voice response (IVR)",
          "Call transfer options"
        ]}
        image="https://img.freepik.com/premium-vector/person-using-voice-memos-jot-down-creative-ideas-thoughts-enhancing-their-brains-creativity_216520-187594.jpg?ga=GA1.1.1315670878.1727435405&semt=ais_hybrid"
        isImageLeft={false}
      />
    </div>
  </div>
);

const Testimonial = ({ quote, author, company }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="font-bold">{author}</p>
    <p className="text-gray-500">{company}</p>
  </motion.div>
);

const TestimonialsSection = () => (
  <div className="bg-white bg-opacity-90 py-16 my-24 rounded-lg shadow-lg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Testimonial 
          quote="The Bulk SMS service has revolutionized our customer outreach. We've seen a 40% increase in engagement!"
          author="Sarah Johnson"
          company="Marketing Director, TechCorp"
        />
        <Testimonial 
          quote="Automated voice calls have been a game-changer for our appointment reminders. No-shows have decreased significantly."
          author="Dr. Michael Lee"
          company="Clinic Owner, HealthFirst"
        />
        <Testimonial 
          quote="The analytics provided with each campaign have helped us refine our messaging and improve our ROI."
          author="Emma Rodriguez"
          company="CEO, StartupX"
        />
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="bg-[#f15c22] bg-opacity-90 text-white py-16 my-10 rounded-lg shadow-lg">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Communication?</h2>
      <p className="text-xl mb-8">Start your first campaign today and experience the power of Bulk SMS and Automated Calling.</p>
      <motion.button 
        className="bg-white text-[#f15c22] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sign Up for Free
      </motion.button>
    </div>
  </div>
);

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2023/09/22/06/33/network-8268233_640.jpg')"}}>
      <HeroSection />
      <div className="container mx-auto px-4">
        <FeaturesGrid />
        <DetailedBreakdown />
        <TestimonialsSection />
        <CallToAction />
      </div>
      <Footer/>
    </div>
  );
};

export default FeaturesPage;