import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const clientLogos = [
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
];

export default function LoginPage() {
  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {};
    const requiredFields = ['email', 'password'];
    
    requiredFields.forEach(field => {
      if (!e.target[field].value) {
        newErrors[field] = 'This field is required.';
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit it here
      console.log('Form is valid');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left side */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-between">
        <div>
          <img src="/placeholder.svg?height=50&width=150" alt="Comms logo" className="mb-8" />
          <h1 className="text-3xl font-bold mb-6">Your clients, your communication, our platform.</h1>
          <h2 className="text-xl font-semibold mb-8">Join Comms today.</h2>
          
          {[
            'Activate free messages on SMS, Email, WhatsApp, Viber, and Voice.',
            'Enjoy a free trial of Comms products.',
            'Explore Comms APIs or use a user-friendly no-code interface.'
          ].map((feature, index) => (
            <div key={index} className="flex items-start mb-6">
              <Check className="text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  {index === 0 && 'Connect with your customers through the channels they love in just a few clicks.'}
                  {index === 1 && 'Boost customer engagement, optimize call centers, and create chatbots at your own pace.'}
                  {index === 2 && 'Seamlessly integrate and manage communication channels your way.'}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">You are in good company</h3>
          <div className="grid grid-cols-3 gap-4">
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-1/2 bg-gray-100 p-12 flex items-center justify-center">
        <motion.div 
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Log in to your account</h2>
          <form onSubmit={validateForm} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
              {errors.password && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.password}
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <motion.button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f15c22] hover:bg-orage-600 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orange-500"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign in
              </motion.button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}