"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaIndustry, FaCog, FaTools, FaRobot, FaBolt, FaMicrochip } from "react-icons/fa";

export default function EngineeringEquipmentPage() {
  const equipment = [
    {
      icon: <FaCog className="text-5xl" />,
      title: "Precision Machinery",
      description: "High-precision manufacturing equipment for industrial applications",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaRobot className="text-5xl" />,
      title: "Automation Systems",
      description: "Advanced robotics and automation solutions for efficiency",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaBolt className="text-5xl" />,
      title: "Power Systems",
      description: "Reliable electrical and power distribution equipment",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaTools className="text-5xl" />,
      title: "Testing Equipment",
      description: "State-of-the-art testing and quality control systems",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e7?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaMicrochip className="text-5xl" />,
      title: "Control Systems",
      description: "Advanced control and monitoring solutions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaIndustry className="text-5xl" />,
      title: "Industrial Solutions",
      description: "Complete engineering solutions for manufacturing facilities",
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white dark:bg-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&auto=format&fit=crop&q=80"
            alt="Engineering Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-indigo-800/50 to-blue-900/60" />
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
              <FaIndustry className="text-7xl text-purple-600" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Engineering Equipment <span className="gradient-blue">Design</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Custom-designed engineering equipment solutions for modern industrial and manufacturing needs
            </p>
            <Link href="/request">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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
            <h2 className="text-4xl font-bold mb-4">Our Engineering Solutions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive engineering equipment for industrial excellence
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Transform Your Operations</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you design and implement the perfect engineering equipment solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
