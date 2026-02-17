"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCube, FaPrint, FaDrawPolygon, FaFlask, FaCheckCircle, FaClock } from "react-icons/fa";

export default function PrototypeManufacturingPage() {
  const services = [
    {
      icon: <FaDrawPolygon className="text-5xl" />,
      title: "3D Design & Modeling",
      description: "Expert CAD design and 3D modeling for your prototype concepts",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e7?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaPrint className="text-5xl" />,
      title: "3D Printing",
      description: "Advanced additive manufacturing with multiple materials",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaCube className="text-5xl" />,
      title: "Rapid Prototyping",
      description: "Fast turnaround for physical prototypes and mockups",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e7?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaFlask className="text-5xl" />,
      title: "Testing & Validation",
      description: "Comprehensive testing to ensure prototype functionality",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaCheckCircle className="text-5xl" />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every manufacturing stage",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80"
    },
    {
      icon: <FaClock className="text-5xl" />,
      title: "Iterative Development",
      description: "Multiple iterations to perfect your design",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e7?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-brand-beige dark:bg-gray-900">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&auto=format&fit=crop&q=80"
            alt="Prototype Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-brand-green-dark/50 to-purple-900/60" />
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
              <FaCube className="text-7xl text-cyan-600" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Prototype <span className="gradient-blue">Manufacturing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your ideas into reality with our rapid prototype manufacturing services
            </p>
            <Link href="/request">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
              >
                Start Your Project
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Prototyping Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From concept to finished prototype in record time
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-brand-green">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Bring Your Ideas to Life</h2>
            <p className="text-xl mb-8 opacity-90">
              Get started with your prototype project today and see results quickly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request a Prototype
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
