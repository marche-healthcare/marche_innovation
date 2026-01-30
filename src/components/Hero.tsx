"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Scene3D from "./Scene3D";
import Floating3DCards from "./Floating3DCards";
import RotatingGeometry from "./RotatingGeometry";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* 3D Particle Background */}
      <Scene3D />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" />
      </div>

      {/* Floating 3D Cards */}
      <Floating3DCards />

      {/* Rotating 3D Geometry */}
      <RotatingGeometry />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovating Medical & Engineering
            <br />
            <span className="gradient-text">Solutions for the Future</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Custom-built medical and engineering equipment designed, manufactured, and delivered with precision and care.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/request"
              className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Request Custom Equipment
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="glass text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105 border border-white/20"
            >
              Talk to Our Engineers
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Expert Engineers" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 1 + index * 0.1
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.8)",
                      "0 0 10px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          whileHover={{ scale: 1.2, borderColor: "rgba(59, 130, 246, 0.8)" }}
        >
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
