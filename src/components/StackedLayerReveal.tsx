"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface StackedLayerRevealProps {
  steps: ProcessStep[];
}

export default function StackedLayerReveal({ steps }: StackedLayerRevealProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-visible py-12">
      <div className="relative w-full max-w-2xl mx-auto px-4 h-[500px] isolate">
        {/* Stack of cards in background */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
          {steps.map((item, index) => {
            const isActive = index === currentIndex;
            const isPast = index < currentIndex;
            const offset = Math.abs(index - currentIndex);
            const stackIndex = steps.length - index;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.9 - (offset * 0.05),
                  y: isActive ? 0 : offset * 20,
                  rotateZ: isActive ? 0 : (index - currentIndex) * -2,
                  opacity: isActive ? 1 : isPast ? 0.15 : 0.25 - (offset * 0.05),
                  zIndex: isActive ? 10 : stackIndex,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                  opacity: { duration: 0.5 }
                }}
                className="absolute inset-0 w-full"
                style={{ 
                  pointerEvents: isActive ? 'auto' : 'none',
                  filter: isActive ? 'none' : 'blur(3px)'
                }}
              >
                <div className="glass backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 h-full">
                  {/* Step Number Badge */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-green to-green-600 rounded-2xl text-white font-bold text-2xl md:text-3xl mb-6 shadow-lg"
                    animate={isActive ? {
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                      opacity: 1
                    } : {
                      opacity: 0.1
                    }}
                    transition={{
                      duration: 2,
                      repeat: isActive ? Infinity : 0,
                      repeatDelay: 1
                    }}
                  >
                    {item.step}
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-brand-green/10 to-green-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2" style={{ zIndex: 20 }}>
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="group relative"
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-green w-8' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-brand-green/50'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
