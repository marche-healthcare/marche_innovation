"use client";

import { motion } from "framer-motion";
import { FaHospital, FaMicroscope, FaIndustry, FaBolt, FaRobot } from "react-icons/fa";

export default function Industries() {
  const industries = [
    {
      icon: <FaHospital className="text-6xl text-blue-600" />,
      title: "Medical & Healthcare",
      description: "Hospitals, clinics, surgical centers, and healthcare facilities",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaMicroscope className="text-6xl text-blue-600" />,
      title: "Biomedical Engineering",
      description: "Research labs, universities, and biotech companies",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaIndustry className="text-6xl text-blue-600" />,
      title: "Mechanical Engineering",
      description: "Manufacturing plants and industrial facilities",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e7?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaBolt className="text-6xl text-blue-600" />,
      title: "Electrical & Electronics",
      description: "Electronics firms and testing laboratories",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
    },
    {
      icon: <FaRobot className="text-6xl text-blue-600" />,
      title: "Industrial Automation",
      description: "Automated systems and robotics integration",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-white dark:bg-black overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

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
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            Industries We <span className="gradient-blue">Serve</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by leading organizations across multiple sectors
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: 15,
                z: 50,
                transition: { duration: 0.4 }
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: index * 0.15 },
                scale: { duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 },
                rotateY: { duration: 0.8, delay: index * 0.15, type: "spring", stiffness: 100 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }
              }}
              className="relative overflow-hidden rounded-2xl text-center transition-all preserve-3d group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                animate={{
                  background: [
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                    "linear-gradient(90deg, #8b5cf6, #06b6d4)",
                    "linear-gradient(135deg, #06b6d4, #3b82f6)",
                    "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "100%",
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                }}
              />

              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 group-hover:from-indigo-900/90 group-hover:via-purple-900/70 group-hover:to-indigo-900/50 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center h-full min-h-[320px]">
                <motion.div 
                  className="flex justify-center mb-6 relative"
                  animate={{
                    scale: [1, 1.1, 1],
                    filter: [
                      "drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))",
                      "drop-shadow(0 0 20px rgba(59, 130, 246, 1))",
                      "drop-shadow(0 0 0px rgba(59, 130, 246, 0.5))"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    rotateZ: 360,
                    transition: { duration: 0.8 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Pulsing ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 relative z-10">
                    {industry.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-200 transition-all">
                  {industry.title}
                </h3>
                <p className="text-gray-200 group-hover:text-white transition-all">
                  {industry.description}
                </p>
              </div>

              {/* 3D layered background */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ transform: "translateZ(-30px)" }}
              />
              <motion.div 
                className="absolute inset-0 border-2 border-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ transform: "translateZ(5px)" }}
                animate={{
                  borderColor: [
                    "rgba(59, 130, 246, 0.2)",
                    "rgba(147, 51, 234, 0.6)",
                    "rgba(6, 182, 212, 0.6)",
                    "rgba(59, 130, 246, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
