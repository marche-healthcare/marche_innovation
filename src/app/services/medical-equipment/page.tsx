"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHospital, FaMicroscope, FaHeartbeat, FaXRay, FaStethoscope, FaSyringe } from "react-icons/fa";

export default function MedicalEquipmentPage() {
  const equipment = [
    {
      icon: <FaStethoscope className="text-5xl" />,
      title: "Diagnostic Devices",
      description: "Advanced diagnostic equipment for accurate medical assessments",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaXRay className="text-5xl" />,
      title: "Imaging Systems",
      description: "State-of-the-art imaging technology for comprehensive diagnostics",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaHeartbeat className="text-5xl" />,
      title: "Patient Monitoring",
      description: "Real-time monitoring systems for critical patient care",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaSyringe className="text-5xl" />,
      title: "Surgical Instruments",
      description: "Precision surgical tools for complex medical procedures",
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaMicroscope className="text-5xl" />,
      title: "Laboratory Equipment",
      description: "Advanced lab equipment for research and analysis",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaHospital className="text-5xl" />,
      title: "Hospital Infrastructure",
      description: "Complete solutions for healthcare facility setup",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white dark:bg-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1920&auto=format&fit=crop&q=80"
            alt="Medical Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-cyan-900/60" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <FaHospital className="text-7xl text-blue-600" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Medical Equipment <span className="gradient-blue">Development</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Cutting-edge medical equipment solutions designed to enhance patient care and improve healthcare outcomes
            </p>
            <Link href="/request">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Request a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Medical Equipment Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive range of medical equipment for modern healthcare facilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your medical equipment needs and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Equipment
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
