"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
}

export default function Scene3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Initialize particles
    const particleCount = 100;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      z: Math.random() * 1000,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      speedZ: Math.random() * 2 + 0.5,
    }));

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particlesRef.current.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.z -= particle.speedZ;

        // Reset particle if it goes out of bounds
        if (particle.z < 1) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.offsetWidth;
          particle.y = Math.random() * canvas.offsetHeight;
        }

        if (particle.x < 0 || particle.x > canvas.offsetWidth) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.offsetHeight) {
          particle.speedY *= -1;
        }

        // Calculate perspective
        const scale = 1000 / (1000 + particle.z);
        const x2d = particle.x * scale + (canvas.offsetWidth / 2) * (1 - scale);
        const y2d = particle.y * scale + (canvas.offsetHeight / 2) * (1 - scale);
        const size = particle.size * scale;

        // Mouse interaction
        const dx = mouseRef.current.x - x2d;
        const dy = mouseRef.current.y - y2d;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          particle.speedX += dx * 0.0001;
          particle.speedY += dy * 0.0001;
        }

        // Draw particle
        const opacity = 1 - particle.z / 1000;
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        particlesRef.current.forEach((other) => {
          const otherScale = 1000 / (1000 + other.z);
          const otherX = other.x * otherScale + (canvas.offsetWidth / 2) * (1 - otherScale);
          const otherY = other.y * otherScale + (canvas.offsetHeight / 2) * (1 - otherScale);
          
          const dist = Math.sqrt((x2d - otherX) ** 2 + (y2d - otherY) ** 2);
          
          if (dist < 150 && particle.z > other.z) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 150) * opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(otherX, otherY);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
}
