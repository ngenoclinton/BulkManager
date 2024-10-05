import React from "react";

import { motion } from 'framer-motion';
import {Star} from 'lucide-react';
const Pricing = ()=>{

    return(
        <>
         {/* Pricing Section */}
        <section className="bg-gray-100 py-20 px-4">
            <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Basic', 'Pro', 'Enterprise'].map((tier, index) => (
                <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                    whileHover={{ y: -5 }}
                >
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{tier}</h3>
                    <p className="text-4xl font-bold mb-6 text-[#f15c22]">${(index + 1) * 19}<span className="text-lg font-normal text-gray-600">/mo</span></p>
                    <ul className="mb-8">
                    {[...Array(3 + index)].map((_, i) => (
                        <li key={i} className="mb-2 flex items-center text-gray-700">
                        <Star className="text-yellow-400 mr-2" /> Feature {i + 1}
                        </li>
                    ))}
                    </ul>
                    <button className="w-full bg-[#f15c22] text-white py-2 rounded-full font-semibold hover:bg-[#d94d1a] transition-colors duration-300 shadow-md">
                    Choose Plan
                    </button>
                </motion.div>
                ))}
            </div>
            </div>
        </section>
        </>
    )
}

export default Pricing;