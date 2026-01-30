"use client";

import { motion } from "framer-motion";
import { FaCube, FaAtom, FaMicrochip } from "react-icons/fa";

export default function Floating3DCards() {
  const cards = [
    {
      icon: <FaCube className="text-6xl text-blue-400" />,
      title: "3D Modeling",
      position: { top: "20%", left: "10%" },
      delay: 0,
    },
    {
      icon: <FaAtom className="text-6xl text-purple-400" />,
      title: "Innovation",
      position: { top: "60%", left: "15%" },
      delay: 0.2,
    },
    {
      icon: <FaMicrochip className="text-6xl text-cyan-400" />,
      title: "Technology",
      position: { top: "40%", right: "15%" },
      delay: 0.4,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="absolute glass p-6 rounded-2xl pointer-events-auto cursor-pointer"
          style={{
            ...card.position,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          initial={{ opacity: 0, scale: 0, rotateY: -180 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: card.delay },
            scale: { duration: 1, delay: card.delay },
            rotateY: { duration: 1, delay: card.delay },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            },
          }}
          whileHover={{
            scale: 1.1,
            rotateY: 15,
            rotateX: 15,
            transition: { duration: 0.3 },
          }}
        >
          <div className="flex flex-col items-center gap-3">
            {card.icon}
            <span className="text-sm font-semibold text-white">{card.title}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
