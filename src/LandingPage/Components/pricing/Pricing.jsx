import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, HelpCircle } from 'lucide-react';

const Header = () => (
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4">Affordable Pricing for Every Business</h1>
    <p className="text-xl text-gray-600">
      Find the plan that's right for you, with flexible options for growing businesses.
    </p>
  </div>
);

const BillingToggle = ({ isAnnual, setIsAnnual }) => (
  <div className="flex justify-center items-center mb-8">
    <span className={`mr-3 ${isAnnual ? 'text-gray-500' : 'font-semibold'}`}>Monthly</span>
    <motion.div
      className="w-14 h-7 bg-gray-300 rounded-full p-1 cursor-pointer"
      onClick={() => setIsAnnual(!isAnnual)}
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full"
        animate={{ x: isAnnual ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.div>
    <span className={`ml-3 ${isAnnual ? 'font-semibold' : 'text-gray-500'}`}>Annual (Save 10%)</span>
  </div>
);

const PricingCard = ({ name, price, features, isPopular, ctaText }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white p-6 rounded-lg shadow-lg ${isPopular ? 'border-2 border-[#f15c22]' : ''}`}
  >
    {isPopular && (
      <div className="bg-[#f15c22] text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
        Most Popular
      </div>
    )}
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-3xl font-bold mb-4">KSH {price}<span className="text-sm font-normal">/month</span></p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full py-2 rounded-full font-semibold ${
        isPopular ? 'bg-[#f15c22] text-white' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {ctaText}
    </motion.button>
  </motion.div>
);

const FeatureTable = () => (
  <div className="overflow-x-auto mb-12">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 border">Feature</th>
          <th className="p-3 border">Starter</th>
          <th className="p-3 border">Professional</th>
          <th className="p-3 border">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-3 border">SMS Messages</td>
          <td className="p-3 border">500</td>
          <td className="p-3 border">2,000</td>
          <td className="p-3 border">10,000</td>
        </tr>
        <tr>
          <td className="p-3 border">Voice Calls</td>
          <td className="p-3 border">100</td>
          <td className="p-3 border">500</td>
          <td className="p-3 border">2,000</td>
        </tr>
        <tr>
          <td className="p-3 border">API Access</td>
          <td className="p-3 border"><X className="text-red-500" /></td>
          <td className="p-3 border"><CheckCircle className="text-green-500" /></td>
          <td className="p-3 border"><CheckCircle className="text-green-500" /></td>
        </tr>
        <tr>
          <td className="p-3 border">Analytics and Reports</td>
          <td className="p-3 border">Basic</td>
          <td className="p-3 border">Advanced</td>
          <td className="p-3 border">Advanced</td>
        </tr>
        <tr>
          <td className="p-3 border">Customer Support</td>
          <td className="p-3 border">Email</td>
          <td className="p-3 border">Phone</td>
          <td className="p-3 border">24/7 Phone</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const FAQ = () => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
    <div className="space-y-4">
      <details className="bg-white p-4 rounded-lg shadow">
        <summary className="font-semibold cursor-pointer">How does billing work?</summary>
        <p className="mt-2 text-gray-600">We operate on a prepaid model. You purchase credits that can be used for sending SMS or making calls. You can add more credits at any time.</p>
      </details>
      <details className="bg-white p-4 rounded-lg shadow">
        <summary className="font-semibold cursor-pointer">What's your cancellation policy?</summary>
        <p className="mt-2 text-gray-600">You can cancel your subscription at any time. Unused credits will remain valid for 6 months after cancellation.</p>
      </details>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold mb-4 text-center">What Our Customers Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="italic mb-2">"This service has revolutionized our customer outreach. Highly recommended!"</p>
        <p className="font-semibold">- John Doe, CEO of TechCorp</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="italic mb-2">"The API is incredibly easy to use and integrate. It's saved us countless hours."</p>
        <p className="font-semibold">- Jane Smith, CTO of StartupX</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="italic mb-2">"The customer support team is always there when we need them. Excellent service!"</p>
        <p className="font-semibold">- Mike Johnson, Founder of GrowthCo</p>
      </div>
    </div>
  </div>
);

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 1710 : 1900,
      features: ["500 SMS", "100 Voice Calls", "Basic Analytics", "Email Support"],
      isPopular: false,
      ctaText: "Get Started"
    },
    {
      name: "Professional",
      price: isAnnual ? 4410 : 4900,
      features: ["2,000 SMS", "500 Voice Calls", "Advanced Analytics", "API Access", "Phone Support"],
      isPopular: true,
      ctaText: "Choose Pro"
    },
    {
      name: "Enterprise",
      price: isAnnual ? 8910 : 9900,
      features: ["10,000 SMS", "2,000 Voice Calls", "Advanced Analytics", "API Access", "24/7 Phone Support", "Custom Integration"],
      isPopular: false,
      ctaText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <BillingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <FeatureTable />
        <FAQ />
        <Testimonials />
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#f15c22] text-white px-8 py-3 rounded-full font-semibold text-lg"
          >
            Get Started Today
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;