"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import AnimatedWaveBackground from "./AnimatedWaveBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedWaveBackground />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content - Completely Static */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering{" "}
            <span style={{ color: '#C5F542' }}>excellence</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We envision new possibilities in medical and engineering equipment, and we design the solutions that bring them to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/request"
              className="group px-8 py-4 rounded-lg font-semibold transition-all text-lg flex items-center gap-2"
              style={{ backgroundColor: '#C5F542', color: '#1F2937' }}
            >
              Request Equipment
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-lg font-semibold transition-all text-lg border-2 text-white"
              style={{ borderColor: '#C5F542' }}
            >
              View Our Services
            </Link>
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              "Build your next era of growth",
              "Design human-centered strategies",
              "Get to market with confidence",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-lg font-medium"
                style={{ color: '#C5F542' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t"
            style={{ borderColor: '#374151' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Satisfied Clients" },
              { number: "50+", label: "Expert Engineers" },
              { number: "15+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
              >
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
        <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: '#C5F542' }}>
          <motion.div
            className="w-1 h-3 rounded-full"
            style={{ backgroundColor: '#C5F542' }}
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
