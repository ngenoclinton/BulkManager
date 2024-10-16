import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const countries = [
  { code: 'ke', name: 'Kenya' },
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  // Add more countries as needed
];

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: 'ke',
    website: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['email', 'firstName', 'lastName', 'country', 'password', 'confirmPassword'];
    
    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the registration data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Left side */}
      <div className="lg:w-1/2 bg-white p-6 lg:p-12 flex flex-col justify-between">
        <div>
            <Link to="/" className="flex-shrink-0 flex items-center mb-8">
              <span className="text-xl font-bold text-[#f15c22]">SMS & VOICE</span>
            </Link>
          <h1 className="text-2xl lg:text-3xl font-bold mb-6">Your clients, your communication, our platform.</h1>
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
        
        <div className="hidden lg:block">
          <h3 className="text-xl font-semibold mb-4">You are in good company</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Add client logos here */}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="lg:w-1/2 bg-gray-100 p-8 lg:p-12 flex items-center justify-center">
        <motion.div 
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign up for free</h2>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Company email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
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
                    required
                    value={formData.lastName}
                    onChange={handleChange}
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
              </div>
                {/* <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
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
                </div> */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Company website (optional)</label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://www.company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
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
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="••••••••"
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
                  checked={formData.newsletter}
                  onChange={handleChange}
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
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start free trial
                </motion.button>
                <p className="mt-2 text-center text-sm text-gray-600">
                  No credit card required
                </p>
              </div>
            </form>
          ) : (
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