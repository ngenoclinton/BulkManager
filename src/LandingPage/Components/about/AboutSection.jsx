import React from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Target,MessageSquare, Phone, Zap, Smartphone, BarChart, CreditCard, Users, Shield, Headphones, Clock, Globe } from 'lucide-react';
import Footer from '../Footer/Footer';


const AboutSection = ({ title, description, imageUrl, imageLeft }) => (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col  ${imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} gap-x-10  justify-between`}>
        <div className="md:w-1/2  md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
         <p className="text-lg text-gray-600">{description}</p>
        </div>
        <div className="md:w-1/2">
          <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <Icon className="w-12 h-12 text-[#f15c22] mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const WhyChooseUsCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <Icon className="w-12 h-12 text-[#f15c22] mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);
const AnimatedHeading = ({ children }) => (
    <motion.h1
      className="text-2xl text-[#f15c22]  border-b-2 b-[#f15c22]  font-bold w-1/6 mx-auto  mb-8 text-center pt-12"
      initial={{ opacity: 0, y: -2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.h1>
  );
  const AnimatedHeadingH2 = ({ children }) => (
    <motion.h2
      className="text-3xl font-bold mb-8 text-center text-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
  
  const VisionMissionCard = ({ title, content, icon: Icon }) => (
    <motion.div
      className="flex-1 bg-[#f15c22] py-16 p-12 rounded-lg shadow-lg text-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 mr-2" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-lg p-3">{content}</p>
    </motion.div>
  );

const CustomerFeedbackCard = ({ rating, feedback, name }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{feedback}</p>
    <p className="font-semibold">{name}</p>
  </motion.div>
);

export default function AboutSections({title}) {
  return (
    <>
    <div className="bg-gray-100 ">
        <AnimatedHeading>About Us</AnimatedHeading>
        {/* ABOUT */}
      <section className="max-w-7xl mx-auto ">
        <AboutSection
          title="// We Connect. Communicate. Collaborate"
          description="At our core, we believe in the power of connection. Our innovative bulk SMS and voice call solutions bridge the gap between businesses and their audiences, fostering meaningful communication that drives collaboration. By leveraging cutting-edge technology, we empower organizations to reach out, engage, and build lasting relationships with their customers, partners, and teams."
          imageUrl="https://cdn.pixabay.com/photo/2021/09/10/18/39/secretary-6613923_1280.png"
          imageLeft={false}
        />
         {/* CARDS */}
        <section className="max-w-7xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={MessageSquare} title="Bulk SMS" description="Reach thousands instantly with personalized text messages." />
            <ServiceCard icon={Smartphone} title="USSD" description="Interactive mobile services accessible on any phone." />
            <ServiceCard icon={Zap} title="Short Code" description="Memorable numbers for easy customer engagement and response." />
            <ServiceCard icon={Phone} title="Voice Calls" description="Pre-recorded messages for wide-reaching audio communications." />
            <ServiceCard icon={Users} title="Loyalty Points" description="Reward customer loyalty and boost retention rates." />
            <ServiceCard icon={BarChart} title="Portal" description="Centralized platform for managing all your communication needs." />
            <ServiceCard icon={MessageSquare} title="Surveys" description="Gather valuable feedback through interactive SMS surveys." />
            <ServiceCard icon={CreditCard} title="Payment Solutions" description="Secure, integrated payment options for seamless transactions." />
            </div>
        </section>
        <AboutSection
          title="// We Engage. Empower. Enhance"
          description="We're not just about sending messages; we're about creating impact. Our platform is designed to engage your audience with personalized, timely communications that resonate. By empowering businesses with robust tools and insights, we enhance your ability to make data-driven decisions, optimize campaigns, and ultimately, drive growth. Experience the difference of truly empowered communication."
          imageUrl="https://img.freepik.com/premium-photo/sending-email-bulk-mail-hand-hold-white-smartphone-with-digital-hologram-email-sms-sign-city-dark-blurred-background-business-email-concept_486333-4286.jpg?w=826"
          imageLeft={true}
        />
      </section>
       
        {/* Why Choose us */}
      <section className="max-w-7xl mx-auto py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <WhyChooseUsCard
            icon={Shield}
            title="Reliability"
            description="99.9% uptime guarantee ensures your messages always get through."
          />
          <WhyChooseUsCard
            icon={Headphones}
            title="24/7 Support"
            description="Round-the-clock assistance for all your communication needs."
          />
          <WhyChooseUsCard
            icon={Clock}
            title="Speed"
            description="Lightning-fast delivery for time-sensitive communications."
          />
          <WhyChooseUsCard
            icon={Globe}
            title="Global Reach"
            description="Connect with audiences worldwide through our extensive network."
          />
        </div>
      </section>
    {/* VISION MISSION */}
     <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <AnimatedHeadingH2>Our Vision and Mission</AnimatedHeadingH2>
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <VisionMissionCard
          title="Vision"
          content="To be the global leader in innovative communication solutions, connecting businesses and people seamlessly across the world."
          icon={Eye}
        />
        <VisionMissionCard
          title="Mission"
          content="We strive to empower organizations with cutting-edge bulk SMS and voice call technologies, enabling them to engage their audiences effectively, foster meaningful relationships, and drive growth through powerful, personalized communication."
          icon={Target}
        />
      </div>
    </section>
        {/* Customer feedback */}
      <section className="max-w-7xl mx-auto py-16 px-4 bg-white z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Customer Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CustomerFeedbackCard
            rating={5}
            feedback="The bulk SMS service has revolutionized our customer outreach. We've seen a 40% increase in engagement!"
            name="Sarah J., Marketing Director"
          />
          <CustomerFeedbackCard
            rating={4}
            feedback="Voice calls have been a game-changer for our appointment reminders. No-shows have decreased significantly."
            name="Dr. Michael L., Clinic Owner"
          />
          <CustomerFeedbackCard
            rating={5}
            feedback="The loyalty points system integrated seamlessly with our existing setup. Our customers love it!"
            name="Emma R., E-commerce Manager"
          />
        </div>
      </section>

    
    </div>
    </>
  );
}