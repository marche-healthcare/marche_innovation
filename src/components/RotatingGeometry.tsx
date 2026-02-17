"use client";

import { motion } from "framer-motion";

export default function RotatingGeometry() {
  return (
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 hidden lg:block pointer-events-none">
      <motion.div
        className="relative w-64 h-64"
        animate={{
          rotateY: 360,
          rotateX: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        {/* Cube faces */}
        <div
          className="absolute inset-0 border-2 border-brand-green-light/30 rounded-lg"
          style={{
            transform: "translateZ(80px)",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
          }}
        />
        <div
          className="absolute inset-0 border-2 border-brand-beige/30 rounded-lg"
          style={{
            transform: "rotateY(90deg) translateZ(80px)",
            background: "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
          }}
        />
        <div
          className="absolute inset-0 border-2 border-cyan-500/30 rounded-lg"
          style={{
            transform: "rotateX(90deg) translateZ(80px)",
            background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1), rgba(59, 130, 246, 0.1))",
          }}
        />
        
        {/* Inner rotating wireframe */}
        <motion.div
          className="absolute inset-8 border border-brand-green-light/50 rounded-lg"
          animate={{
            rotateY: -360,
            rotateX: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        />
        
        {/* Glowing center sphere */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-brand-green-light/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-green-light rounded-full blur-sm" />
      </motion.div>
    </div>
  );
}
