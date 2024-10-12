import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const clientLogos = [
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
  '/placeholder.svg?height=50&width=100',
];

const countries = [
  { code: 'ke', name: 'Kenya' },
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  // Add more countries as needed
];

export default function RegistrationPage() {
  const [errors, setErrors] = useState({});
  const [country, setCountry] = useState('ke');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the registration data to your backend
    // For this example, we'll just simulate a successful registration
    setIsSubmitted(true);
  };

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {};
    const requiredFields = ['email', 'firstName', 'lastName', 'country', 'password','confirmPassword'];
    
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
          <img src="/placeholder.svg?height=50&width=150" alt="logo" className="mb-8" />
          <h1 className="text-3xl font-bold mb-6">Your clients, your communication, our platform.</h1>
          <h2 className="text-xl font-semibold mb-8">Join Comms today.</h2>
          
          {[
            'Activate free messages on SMS, Email, WhatsApp, Viber, and Voice.',
            'Enjoy a free trial of Comm products.',
            'Explore Comm APIs or use a user-friendly no-code interface.'
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
      <div className="w-2/3 bg-gray-100 p-12 flex items-center justify-center">
        <motion.div 
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign up for free</h2>
          {!isSubmitted ? (<form  onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Company email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@company.com"
              />
              {errors.email && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.email}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John"
              />
              {errors.firstName && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.firstName}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Doe"
              />
              {errors.lastName && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.lastName}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              {errors.country && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.country}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Company website (optional)</label>
              <input
                id="website"
                name="website"
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="https://www.company.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password
              </label>
              <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Doe"
              />
              {errors.password && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.password}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">confirm-password
              </label>
              <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Doe"
              />
              {errors.confirmPassword && (
                <div className="flex items-center mt-1 text-red-500 text-sm">
                  <AlertCircle size={16} className="mr-1" />
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                I want to receive logo news, trends, offers, or blogs by email.
              </label>
            </div>
            <div className="text-sm text-gray-600">
              By signing up, you confirm that you've read and accepted our{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Terms and Conditions
              </a>{' '}
              and our{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Privacy Notice
              </a>
              .
            </div>
            <div>
              <motion.button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orange-500"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                Start free trial
              </motion.button>
              <p className="mt-2 text-center text-sm text-gray-600">
                No credit card required
              </p>
            </div>
          </form>): (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-4">Registration Successful!</h3>
              <p className="text-gray-600">
                We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
              </p>
            </motion.div>
          )}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}