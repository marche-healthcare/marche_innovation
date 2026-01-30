"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTools, FaHeadset, FaClipboardCheck, FaWrench, FaSyncAlt, FaClock } from "react-icons/fa";

export default function MaintenanceSupportPage() {
  const services = [
    {
      icon: <FaTools className="text-5xl" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance schedules to prevent equipment failures",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaWrench className="text-5xl" />,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services for critical equipment",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaClipboardCheck className="text-5xl" />,
      title: "Equipment Inspection",
      description: "Comprehensive inspections to ensure optimal performance",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaSyncAlt className="text-5xl" />,
      title: "Software Updates",
      description: "Regular firmware and software updates for your equipment",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaHeadset className="text-5xl" />,
      title: "Technical Support",
      description: "Expert technical support whenever you need assistance",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaClock className="text-5xl" />,
      title: "Lifetime Support",
      description: "Ongoing support throughout your equipment's lifetime",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white dark:bg-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1920&auto=format&fit=crop&q=80"
            alt="Maintenance and Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-teal-800/50 to-blue-900/60" />
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
              <FaTools className="text-7xl text-green-600" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Maintenance & <span className="gradient-blue">Support</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive maintenance and technical support services to keep your equipment running at peak performance
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Support
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
            <h2 className="text-4xl font-bold mb-4">Our Support Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete maintenance and support solutions for all your equipment needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
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

      {/* Support Plans */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Choose Your Support Plan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Flexible support plans tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Basic", "Professional", "Enterprise"].map((plan, index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-3xl font-bold mb-4">{plan}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {index === 0 && "Essential maintenance and support"}
                  {index === 1 && "Priority support with faster response"}
                  {index === 2 && "24/7 dedicated support team"}
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Immediate Support?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is ready to help you with any equipment issues
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Support
                </motion.button>
              </Link>
              <Link href="/request">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Request Service
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
