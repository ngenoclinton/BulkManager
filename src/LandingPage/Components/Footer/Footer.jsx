import React from 'react';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';



const WaveDesign = () => (
  <svg className="w-full h-16 -mb-1" viewBox="0 0 1440 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 27.4774C620.48 -0.0812285 347.624 49.0556 0 27.4774V54H1440V27.4774Z" fill="#2C3E50"/>
  </svg>
);

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={24} />
    <i className={Icon} style={{ fontSize: 24 }}></i>

  </motion.a>
);

const FooterSection = ({ title, children }) => (
  <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8">
    <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="block text-gray-400 hover:text-white mb-2 transition-colors duration-300"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.a>
);

const NewsletterForm = () => (
  <form className="mt-4">
    <div className="flex">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
        required
      />
      <motion.button
        type="submit"
        className="bg-[#f15c22] text-white px-4 py-2 rounded-r-md"
        whileHover={{ backgroundColor: "#d14c12" }}
        whileTap={{ scale: 0.95 }}
      >
        Subscribe
      </motion.button>
    </div>
  </form>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#2C3E50] text-white py-6 px-3">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2018/12/10/10/21/earth-3866609_640.jpg')"}}></div>
      <div className="absolute inset-0 bg-black opacity-85 z-10"></div>
      <WaveDesign />
      <div className="container mx-auto px-4 py-4 relative z-20">
        <div className="flex flex-wrap -mx-4">
          <FooterSection title="About Us">
            <p className="text-gray-400">
              We provide innovative communication solutions for businesses of all sizes.
            </p>
          </FooterSection>
          
          <FooterSection title="Quick Links">
            <FooterLink href="/features">Features</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterSection>
          
          <FooterSection title="Legal">
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </FooterSection>
          
          <FooterSection title="Contact Us">
            <p className="text-gray-400 mb-2">123 Communication St, Tech City, 12345</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400 mb-2">Email: info@example.com</p>
          </FooterSection>
          
          <FooterSection title="Newsletter">
            <p className="text-gray-400 mb-2">Stay updated with our latest news and offers.</p>
            <NewsletterForm />
          </FooterSection>
        </div>
        
        <div className="mt-5 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold">SMS & Voice</h2>
            </motion.div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
            <SocialIcon Icon="ri-facebook-fill" href="https://facebook.com" />
            <SocialIcon Icon="ri-twitter-fill" href="https://twitter.com" />
            <SocialIcon Icon="ri-instagram-fill" href="https://instagram.com" />
            <SocialIcon Icon="ri-linkedin-fill" href="https://linkedin.com" />
            <SocialIcon Icon="ri-mail-fill" href="mailto:info@example.com" />

            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Powered by <a href='https://www.irobtechnologies.com/' target='blank' className='text-[#f15c22]'>iRob Technologies</a> SMS & Voice calls. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;