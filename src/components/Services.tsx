"use client";

import { motion } from "framer-motion";
import { FaStethoscope, FaCogs, FaFlask, FaLightbulb, FaTools } from "react-icons/fa";
import CinematicBackground from "./CinematicBackground";

export default function Services() {
  const services = [
    {
      icon: <FaStethoscope className="text-5xl text-blue-600" />,
      title: "Custom Medical Equipment",
      description: "State-of-the-art medical devices designed for hospitals, clinics, and healthcare facilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaCogs className="text-5xl text-blue-600" />,
      title: "Engineering Equipment Design",
      description: "Precision-engineered solutions for industrial and mechanical engineering applications.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaFlask className="text-5xl text-blue-600" />,
      title: "Prototype Manufacturing",
      description: "Rapid prototyping and testing to validate your concepts before full-scale production.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaLightbulb className="text-5xl text-blue-600" />,
      title: "R&D and Innovation",
      description: "Collaborative research and development to bring your innovative ideas to life.",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaTools className="text-5xl text-blue-600" />,
      title: "Maintenance & Upgrades",
      description: "Ongoing support, maintenance, and equipment upgrades to ensure peak performance.",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e7?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-white dark:bg-black overflow-hidden">
      <CinematicBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-blue">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions for all your medical and engineering equipment needs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 10,
                z: 50,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all preserve-3d group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(0)",
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-blue-900/90 group-hover:via-blue-900/70 group-hover:to-blue-900/50 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full min-h-[320px]">
                <motion.div
                  className="mb-4"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 360,
                    transition: { duration: 0.6 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    {service.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-200 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-200 group-hover:text-white transition-all">
                  {service.description}
                </p>
              </div>

              {/* 3D depth indicator */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                style={{ transform: "translateZ(-20px)" }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
