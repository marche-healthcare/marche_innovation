"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface GlassPane {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotationSpeedX: number;
  rotationSpeedY: number;
  rotationSpeedZ: number;
  width: number;
  height: number;
  color: string;
}

interface LightStreak {
  x: number;
  y: number;
  z: number;
  speed: number;
  length: number;
  opacity: number;
}

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panesRef = useRef<GlassPane[]>([]);
  const streaksRef = useRef<LightStreak[]>([]);
  const cameraAngleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    const colors = [
      "rgba(6, 182, 212, 0.15)", // cyan
      "rgba(147, 51, 234, 0.15)", // deep purple
      "rgba(20, 184, 166, 0.15)", // teal
      "rgba(59, 130, 246, 0.2)", // blue
    ];

    // Initialize glass panes
    panesRef.current = Array.from({ length: 8 }, () => ({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      z: Math.random() * 800 - 400,
      rotationX: Math.random() * Math.PI * 2,
      rotationY: Math.random() * Math.PI * 2,
      rotationZ: Math.random() * Math.PI * 2,
      rotationSpeedX: (Math.random() - 0.5) * 0.003,
      rotationSpeedY: (Math.random() - 0.5) * 0.003,
      rotationSpeedZ: (Math.random() - 0.5) * 0.003,
      width: 150 + Math.random() * 100,
      height: 200 + Math.random() * 150,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Initialize light streaks
    streaksRef.current = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      z: Math.random() * 1000,
      speed: 0.8 + Math.random() * 1.2,
      length: 30 + Math.random() * 70,
      opacity: 0.3 + Math.random() * 0.4,
    }));

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;

      // Update camera orbit
      cameraAngleRef.current += 0.0005;

      // Draw light streaks
      streaksRef.current.forEach((streak) => {
        streak.x += streak.speed;
        
        if (streak.x > canvas.offsetWidth + streak.length) {
          streak.x = -streak.length;
          streak.y = Math.random() * canvas.offsetHeight;
        }

        const gradient = ctx.createLinearGradient(
          streak.x,
          streak.y,
          streak.x + streak.length,
          streak.y
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, 0)`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${streak.opacity})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(streak.x, streak.y, streak.length, 2);
      });

      // Draw glass panes with 3D transforms
      const sortedPanes = [...panesRef.current].sort((a, b) => b.z - a.z);

      sortedPanes.forEach((pane) => {
        // Update rotations
        pane.rotationX += pane.rotationSpeedX;
        pane.rotationY += pane.rotationSpeedY;
        pane.rotationZ += pane.rotationSpeedZ;

        // Apply camera orbit
        const orbitRadius = 100;
        const orbitX = Math.cos(cameraAngleRef.current) * orbitRadius;
        const orbitZ = Math.sin(cameraAngleRef.current) * orbitRadius;

        // Calculate 3D projection
        const perspective = 1000;
        const scale = perspective / (perspective - pane.z + orbitZ);
        const projectedX = centerX + (pane.x + orbitX) * scale;
        const projectedY = centerY + pane.y * scale;

        if (scale > 0 && scale < 3) {
          ctx.save();
          ctx.translate(projectedX, projectedY);

          // Apply 3D rotations
          const rotMatrix = scale * 0.8;
          ctx.transform(
            Math.cos(pane.rotationY) * rotMatrix,
            Math.sin(pane.rotationX) * rotMatrix * 0.5,
            -Math.sin(pane.rotationY) * rotMatrix * 0.5,
            Math.cos(pane.rotationX) * rotMatrix,
            0,
            0
          );

          // Draw glass pane with clean edges (no blur)
          const opacity = Math.max(0.2, Math.min(0.6, scale * 0.4));
          
          // Clean fill - no shadow/blur
          ctx.fillStyle = pane.color.replace("0.15", String(opacity * 0.8));
          ctx.fillRect(-pane.width / 2, -pane.height / 2, pane.width, pane.height);

          // Sharp border
          ctx.strokeStyle = pane.color.replace("0.15", String(opacity * 2.5));
          ctx.lineWidth = 2.5 * scale;
          ctx.strokeRect(-pane.width / 2, -pane.height / 2, pane.width, pane.height);

          // Inner accent line
          ctx.strokeStyle = pane.color.replace("0.15", String(opacity * 1.5));
          ctx.lineWidth = 1 * scale;
          ctx.strokeRect(
            -pane.width / 2 + 5,
            -pane.height / 2 + 5,
            pane.width - 10,
            pane.height - 10
          );

          ctx.restore();
        }
      });

      // Draw central geometric orb (clean, no blur)
      const orbPulse = Math.sin(Date.now() * 0.002) * 0.3 + 0.7;
      
      // Outer ring
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80 * orbPulse, 0, Math.PI * 2);
      ctx.stroke();

      // Middle ring
      ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50 * orbPulse, 0, Math.PI * 2);
      ctx.stroke();

      // Core circle - solid, no gradient
      ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30 * orbPulse, 0, Math.PI * 2);
      ctx.fill();

      // Center dot
      ctx.fillStyle = "rgba(139, 208, 255, 0.9)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12 * orbPulse, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      {/* Clean overlay - no blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-green-light/5 via-transparent to-brand-beige/5 pointer-events-none" />
    </div>
  );
}
