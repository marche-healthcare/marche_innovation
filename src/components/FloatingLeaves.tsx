"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface EnergyParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  angle: number;
  distance: number;
  size: number;
  opacity: number;
  color: string;
  trail: { x: number; y: number }[];
}

interface LightStreak {
  startAngle: number;
  length: number;
  speed: number;
  distance: number;
  width: number;
  opacity: number;
  color: string;
}

export default function FloatingLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<EnergyParticle[]>([]);
  const streaksRef = useRef<LightStreak[]>([]);
  const timeRef = useRef(0);

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

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    // Vibrant neon green colors
    const colors = ["#00FF88", "#22C55E", "#10B981", "#00FF66"];

    // Initialize energy particles spreading from center
    const particleCount = 60;
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 100;
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: 0,
        vy: 0,
        speed: 0.4 + Math.random() * 0.6,
        angle: angle,
        distance: distance,
        size: 2 + Math.random() * 3,
        opacity: 0.6 + Math.random() * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: [],
      };
    });

    // Initialize dynamic light streaks
    const streakCount = 25;
    streaksRef.current = Array.from({ length: streakCount }, () => ({
      startAngle: Math.random() * Math.PI * 2,
      length: 80 + Math.random() * 150,
      speed: 0.5 + Math.random() * 0.8,
      distance: Math.random() * 200,
      width: 1 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Animation loop
    let animationId: number;
    const animate = () => {
      timeRef.current += 0.01;
      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;

      // Clear with pure white background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Add subtle center softening for text readability
      const centerSoft = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 400);
      centerSoft.addColorStop(0, "rgba(255, 255, 255, 0.6)");
      centerSoft.addColorStop(0.5, "rgba(255, 255, 255, 0.3)");
      centerSoft.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = centerSoft;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw dynamic light streaks
      streaksRef.current.forEach((streak) => {
        streak.distance += streak.speed;
        const maxDistance = Math.max(canvas.offsetWidth, canvas.offsetHeight) * 0.8;
        
        if (streak.distance > maxDistance) {
          streak.distance = 0;
          streak.startAngle = Math.random() * Math.PI * 2;
        }

        const startX = centerX + Math.cos(streak.startAngle) * streak.distance;
        const startY = centerY + Math.sin(streak.startAngle) * streak.distance;
        const endX = centerX + Math.cos(streak.startAngle) * (streak.distance + streak.length);
        const endY = centerY + Math.sin(streak.startAngle) * (streak.distance + streak.length);

        // Create glowing line
        const lineGradient = ctx.createLinearGradient(startX, startY, endX, endY);
        lineGradient.addColorStop(0, `${streak.color}00`);
        lineGradient.addColorStop(0.5, streak.color + Math.floor(streak.opacity * 255).toString(16).padStart(2, '0'));
        lineGradient.addColorStop(1, `${streak.color}00`);

        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = streak.width;
        ctx.shadowBlur = 15;
        ctx.shadowColor = streak.color;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Update and draw energy particles with trails
      particlesRef.current.forEach((particle) => {
        // Update particle position - spread from center
        particle.distance += particle.speed;
        particle.x = centerX + Math.cos(particle.angle) * particle.distance;
        particle.y = centerY + Math.sin(particle.angle) * particle.distance;

        // Add to trail
        particle.trail.push({ x: particle.x, y: particle.y });
        if (particle.trail.length > 8) particle.trail.shift();

        // Reset when too far
        const maxDistance = Math.max(canvas.offsetWidth, canvas.offsetHeight);
        if (particle.distance > maxDistance * 0.9) {
          particle.distance = 0;
          particle.angle = Math.random() * Math.PI * 2;
          particle.trail = [];
        }

        // Draw motion blur trail
        particle.trail.forEach((point, index) => {
          const trailOpacity = (index / particle.trail.length) * particle.opacity * 0.5;
          ctx.beginPath();
          ctx.arc(point.x, point.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + Math.floor(trailOpacity * 255).toString(16).padStart(2, '0');
          ctx.fill();
        });

        // Draw main particle with glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;

        // Add bright core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
      });

      // Add subtle central energy burst glow on white
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 250);
      centerGlow.addColorStop(0, "rgba(0, 255, 136, 0.05)");
      centerGlow.addColorStop(0.5, "rgba(34, 197, 94, 0.02)");
      centerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}
