"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaClock, FaShieldAlt, FaUsers, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Expert Engineers",
      description: "Team of 50+ certified engineers with decades of combined experience",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-blue-600" />,
      title: "Custom-Built Solutions",
      description: "Every project tailored to your exact specifications and requirements",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaDollarSign className="text-4xl text-blue-600" />,
      title: "Transparent Pricing",
      description: "Clear, upfront quotes with no hidden fees or surprise charges",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaClock className="text-4xl text-blue-600" />,
      title: "On-Time Delivery",
      description: "95% of projects delivered on or before the scheduled deadline",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaAward className="text-4xl text-blue-600" />,
      title: "Quality & Compliance",
      description: "ISO certified with full compliance to industry standards and regulations",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Lifetime Support",
      description: "Ongoing maintenance, updates, and technical support for all equipment",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {"Why Choose ".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
            <span className="gradient-blue">
              {"Marche Innovation".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: (11 + index) * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            viewport={{ once: true }}
          >
            We don&apos;t just build equipment – we build partnerships that last
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                rotateX: 8,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden rounded-xl hover:shadow-2xl transition-all preserve-3d group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 group-hover:from-blue-900/90 group-hover:via-blue-900/70 group-hover:to-blue-900/40 transition-all duration-300"
                  animate={{
                    backgroundImage: [
                      "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
                      "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(59,130,246,0.3), rgba(0,0,0,0.4))",
                      "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.4))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full min-h-[280px]">
                <motion.div 
                  className="flex-shrink-0 mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    {reason.icon}
                  </div>
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-all">
                    {reason.title}
                  </h3>
                  <p className="text-gray-200 group-hover:text-white transition-all">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
