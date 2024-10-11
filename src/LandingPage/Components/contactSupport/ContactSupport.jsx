import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Clock, ChevronDown } from 'lucide-react';
import Footer from '../Footer/Footer';

const ContactSupport= () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: "url('https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?b=1&s=612x612&w=0&k=20&c=paoKylHupt1tAyuqdpARvlW-yJKqf68Vla1qVPjHpYM=')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h2 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Support
          </motion.h2>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">We're here to help and answer any question you might have. We look forward to hearing from you.</p>

            <div className="space-y-4">
              <div className="pb-4">
                <div className="flex justify-between items-start mb-4">
                 
                  <div className="flex items-center">
                    <Phone className="text-[#f15c22] mr-2" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p>(800) 928-2086</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Live Phone / Chat Support</p>
                    <p>Mon - Fri: 9:30am-6:00pm EST</p>
                    <p>Sat - Sun: 10:00am - 5:00pm EST</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-[#f15c22] mr-2" />
                <div>
                  <p className="font-semibold">Our Address</p>
                  <p>Voice Mall, Kimathi Road.</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-[#f15c22] mr-2" />
                <div>
                  <p className="font-semibold">Our Mailbox</p>
                  <p>care@smsvoice.io</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Office Locations</h3>
              <div className="h-64 bg-gray-300">
                {/* Replace this div with an actual map component */}
                <div className="h-full flex items-center justify-center text-gray-500">Map Placeholder</div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div 
            className="lg:w-2/5 bg-orange-900/80 p-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-white">Contact Us Below</h2>
            <p className="text-indigo-800 mb-8"> Your email address will not be published. Required fields are marked <span className="text-red-600">*</span> </p>


            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Name <span className="text-red-600">*</span> </label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full border-gray-300 outline-none px-3 py-1 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">E-mail <span className="text-red-600">*</span> </label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full  outline-none px-3 py-1 border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">Phone number <span className="text-red-600">*</span> </label>
                <input type="tel" id="phone" name="phone" required className="mt-1 block w-full outline-none px-3 py-1 border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-white">Select Department <span className="text-red-600">*</span> </label>
                <div className="relative">
                  <select id="department" name="department" required className="mt-1 block w-full outline-none px-3 py-1 border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50 appearance-none">
                    <option value="">Select a department</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="billing">Billing</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-white">Comments or suggestions <span className="text-red-600">*</span> </label>
                <textarea id="comments" name="comments" rows="4" required className="mt-1 block w-full outline-none px-3 py-1 border-gray-300 shadow-sm focus:border-[#f15c22] focus:ring focus:ring-[#f15c22] focus:ring-opacity-50"></textarea>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="alerts" name="alerts" className="rounded text-[#f15c22] focus:ring-[#f15c22]" />
                <label htmlFor="alerts" className="ml-2 block text-sm text-white">
                  I would like to receive important account alerts via text messages and phone calls from DialMyCalls.
                </label>
              </div>
              <div>
                <button type="submit" className="w-full outline-none px-3 py-3 bg-gray-700 text-white py-2 px-4 hover:bg-gray-900 transition duration-300">
                  Send message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactSupport;