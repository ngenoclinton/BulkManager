import React from 'react'
import { motion } from 'framer-motion'

import Frame1 from "../../assets/images/Clients/Frame-1.png"
import Frame2 from "../../assets/images/Clients/Frame-2.webp"
import Frame3 from "../../assets/images/Clients/Frame-3.webp"
import Frame4 from "../../assets/images/Clients/Frame-4.webp"
import Frame5 from "../../assets/images/Clients/Frame-5.webp"
import Frame6 from "../../assets/images/Clients/Frame-6.webp"
import Frame7 from "../../assets/images/Clients/Frame-7.webp"
import Frame8 from "../../assets/images/Clients/Frame-8.webp"
import Frame9 from "../../assets/images/Clients/Frame-9.webp"


       // Sample client data
       const clients = [
        { id: 1, name: 'Client 1', logo: Frame1 },
        { id: 2, name: 'Client 2', logo: Frame2 },
        { id: 3, name: 'Client 3', logo: Frame3 },
        { id: 4, name: 'Client 4', logo: Frame4 },
        { id: 5, name: 'Client 5', logo: Frame5 },
        { id: 6, name: 'Client 6', logo: Frame6 },
        { id: 7, name: 'Client 7', logo: Frame7 },
        { id: 8, name: 'Client 8', logo: Frame8 },
    ] 
const ClientsGrid = () => {
 
  return (
    <section className="py-12 bg-gray-50 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Trusted Clients
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: client.id * 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-28 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsGrid