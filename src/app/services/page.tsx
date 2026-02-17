"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHospital, FaIndustry, FaCube, FaLightbulb, FaTools, FaArrowRight } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaHospital className="text-6xl" />,
      title: "Medical Equipment Development",
      description: "Cutting-edge medical equipment solutions designed to enhance patient care and improve healthcare outcomes.",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&auto=format&fit=crop&q=80",
      href: "/services/medical-equipment",
      color: "from-brand-green to-cyan-600"
    },
    {
      icon: <FaIndustry className="text-6xl" />,
      title: "Engineering Equipment Design",
      description: "Custom-designed engineering equipment solutions for modern industrial and manufacturing needs.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&auto=format&fit=crop&q=80",
      href: "/services/engineering-equipment",
      color: "from-purple-600 to-indigo-600"
    },
    {
      icon: <FaCube className="text-6xl" />,
      title: "Prototype Manufacturing",
      description: "Transform your ideas into reality with our rapid prototype manufacturing services and 3D printing.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&auto=format&fit=crop&q=80",
      href: "/services/prototype-manufacturing",
      color: "from-cyan-600 to-brand-green"
    },
    {
      icon: <FaLightbulb className="text-6xl" />,
      title: "R&D and Innovation",
      description: "Pioneering research and development services to drive innovation and technological advancement.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1200&auto=format&fit=crop&q=80",
      href: "/services/rd-innovation",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: <FaTools className="text-6xl" />,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance and technical support services to keep your equipment running at peak performance.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&auto=format&fit=crop&q=80",
      href: "/services/maintenance-support",
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <div className="bg-brand-beige dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&auto=format&fit=crop&q=80"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-brand-green-light/10 rounded-full blur-3xl top-0 left-0 animate-pulse" />
          <div className="absolute w-96 h-96 bg-brand-beige/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive solutions for medical and engineering equipment development, manufacturing, and support
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <Link href={service.href}>
                  {/* Background Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Icon */}
                    <div className="absolute top-8 left-8">
                      <motion.div
                        className="text-white opacity-90"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                      <h3 className="text-3xl font-bold mb-3 group-hover:text-brand-beige-light transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-100 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                        Learn More
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-green to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to discuss your equipment needs and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-brand-green rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
