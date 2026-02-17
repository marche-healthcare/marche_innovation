"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaClock, FaShieldAlt, FaUsers, FaDollarSign } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaUsers />,
      title: "Expert Engineers",
      description: "Team of 50+ certified engineers with decades of combined experience",
    },
    {
      icon: <FaCheckCircle />,
      title: "Custom-Built Solutions",
      description: "Every project tailored to your exact specifications and requirements",
    },
    {
      icon: <FaDollarSign />,
      title: "Transparent Pricing",
      description: "Clear, upfront quotes with no hidden fees or surprise charges",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description: "95% of projects delivered on or before the scheduled deadline",
    },
    {
      icon: <FaAward />,
      title: "Quality & Compliance",
      description: "ISO certified with full compliance to industry standards and regulations",
    },
    {
      icon: <FaShieldAlt />,
      title: "Lifetime Support",
      description: "Ongoing maintenance, updates, and technical support for all equipment",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: '#F3F4F6' }}>
      <div className="relative z-10 max-w-[1920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose <span style={{ color: '#3D5A3C' }}>Marche Innovation</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We don&apos;t just build equipment – we build partnerships that last
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-center">
          {/* Left side - First 3 Cards - Teal Design with Right Arrow */}
          <div className="flex-[5] flex flex-col gap-6 w-full min-w-0">
            {reasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)',
                  background: '#000000',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <motion.div 
                  className="relative z-10 m-[3px] flex items-center gap-6 h-[130px]"
                  style={{
                    clipPath: 'polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)',
                    background: '#F3F4F6',
                    paddingLeft: '2rem',
                    paddingRight: '2.5rem'
                  }}
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ border: '2px solid #000000', transition: 'all 0.3s ease' }}>
                      <div className="text-3xl" style={{ color: '#000000' }}>{reason.icon}</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-black leading-tight group-hover:translate-x-1 transition-transform duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-black leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                      {reason.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Center - GIF/Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] flex-shrink-0 min-w-0"
          >
            <div className="relative w-full h-[900px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/videos/light.gif" 
                alt="Innovation Animation" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right side - Last 3 Cards - Orange Design with Left Arrow */}
          <div className="flex-[5] flex flex-col gap-6 w-full min-w-0">
            {reasons.slice(3, 6).map((reason, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  x: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative cursor-pointer"
                style={{
                  clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%)',
                  background: '#000000',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                <motion.div 
                  className="relative z-10 m-[3px] flex items-center gap-6 h-[130px]"
                  style={{
                    clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%)',
                    background: '#F3F4F6',
                    paddingLeft: '3.5rem',
                    paddingRight: '2.5rem'
                  }}
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ border: '2px solid #000000', transition: 'all 0.3s ease' }}>
                      <div className="text-3xl" style={{ color: '#000000' }}>{reason.icon}</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex-grow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-black leading-tight group-hover:-translate-x-1 transition-transform duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-black leading-relaxed group-hover:-translate-x-1 transition-transform duration-300">
                      {reason.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
