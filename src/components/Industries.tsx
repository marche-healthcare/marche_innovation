"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaHospital, FaMicroscope, FaIndustry, FaBolt, FaRobot, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const industries = [
    {
      icon: <FaHospital className="text-6xl text-brand-green" />,
      title: "Medical & Healthcare",
      description: "Hospitals, clinics, surgical centers, and healthcare facilities",
    },
    {
      icon: <FaMicroscope className="text-6xl text-brand-green" />,
      title: "Biomedical Engineering",
      description: "Research labs, universities, and biotech companies",
    },
    {
      icon: <FaIndustry className="text-6xl text-brand-green" />,
      title: "Mechanical Engineering",
      description: "Manufacturing plants and industrial facilities",
    },
    {
      icon: <FaBolt className="text-6xl text-brand-green" />,
      title: "Electrical & Electronics",
      description: "Electronics firms and testing laboratories",
    },
    {
      icon: <FaRobot className="text-6xl text-brand-green" />,
      title: "Industrial Automation",
      description: "Automated systems and robotics integration",
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % industries.length);
    }, 2500); // Change slide every 2.5 seconds

    return () => clearInterval(interval);
  }, [isPaused, industries.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Resume after 8 seconds
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Resume after 8 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Resume after 8 seconds
  };

  const getCardStyle = (index: number) => {
    const total = industries.length;
    const diff = (index - currentIndex + total) % total;
    
    if (diff === 0) {
      // Center card (active)
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        z: 0,
        zIndex: 50,
      };
    } else if (diff === 1 || diff === -total + 1) {
      // Right card
      return {
        x: 300,
        scale: 0.75,
        opacity: 0.6,
        rotateY: -35,
        z: -200,
        zIndex: 40,
      };
    } else if (diff === -1 || diff === total - 1) {
      // Left card
      return {
        x: -300,
        scale: 0.75,
        opacity: 0.6,
        rotateY: 35,
        z: -200,
        zIndex: 40,
      };
    } else if (diff === 2 || diff === -total + 2) {
      // Far right card
      return {
        x: 500,
        scale: 0.5,
        opacity: 0.3,
        rotateY: -45,
        z: -400,
        zIndex: 30,
      };
    } else if (diff === -2 || diff === total - 2) {
      // Far left card
      return {
        x: -500,
        scale: 0.5,
        opacity: 0.3,
        rotateY: 45,
        z: -400,
        zIndex: 30,
      };
    } else {
      // Hidden cards
      return {
        x: 0,
        scale: 0.3,
        opacity: 0,
        rotateY: 0,
        z: -600,
        zIndex: 10,
      };
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ backgroundColor: '#1F2937' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            Industries We <span style={{ color: '#C5F542' }}>Serve</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by leading organizations across multiple sectors
          </motion.p>
        </motion.div>

        {/* 3D Carousel */}
        <div 
          className="relative h-[500px] flex items-center justify-center" 
          style={{ perspective: "1500px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="sync">
            {industries.map((industry, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    opacity: style.opacity,
                    rotateY: style.rotateY,
                    z: style.z,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  style={{
                    position: "absolute",
                    transformStyle: "preserve-3d",
                    zIndex: style.zIndex,
                  }}
                  className={`w-full max-w-md ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={() => {
                    if (!isActive) {
                      goToSlide(index);
                    }
                  }}
                >
                  {/* Card Content */}
                  <div className="relative p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl min-h-[400px] flex flex-col items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Shimmer effect */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                        }}
                      />
                    )}

                    {/* Icon */}
                    <motion.div 
                      className="flex justify-center mb-6 relative"
                      animate={isActive ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0],
                      } : {}}
                      transition={isActive ? {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      } : {}}
                    >
                      <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg">
                        {industry.icon}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 text-center">
                      {industry.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-4 transition-all duration-300 group shadow-lg"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-2xl text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full p-4 transition-all duration-300 group shadow-lg"
            aria-label="Next"
          >
            <FaChevronRight className="text-2xl text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {industries.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-brand-green"
                  : "w-3 h-3 bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
