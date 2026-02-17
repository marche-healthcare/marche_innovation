"use client";

import { useEffect, useRef } from "react";

export default function AnimatedWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Animation parameters
    let time = 0;

    // Multiple flowing wave lines with glow effect
    const flowingLines = [
      { 
        yBase: 0.3, 
        amplitude: 80, 
        frequency: 0.008, 
        speed: 0.024, 
        phaseShift: 0,
        color: "rgba(59, 130, 246, 0.6)", // Bright blue
        glowColor: "rgba(59, 130, 246, 0.8)",
        lineWidth: 2
      },
      { 
        yBase: 0.35, 
        amplitude: 100, 
        frequency: 0.006, 
        speed: 0.019, 
        phaseShift: Math.PI / 3,
        color: "rgba(37, 99, 235, 0.5)",
        glowColor: "rgba(37, 99, 235, 0.7)",
        lineWidth: 2.5
      },
      { 
        yBase: 0.45, 
        amplitude: 120, 
        frequency: 0.005, 
        speed: 0.028, 
        phaseShift: Math.PI / 2,
        color: "rgba(96, 165, 250, 0.4)",
        glowColor: "rgba(96, 165, 250, 0.6)",
        lineWidth: 2
      },
      { 
        yBase: 0.55, 
        amplitude: 90, 
        frequency: 0.007, 
        speed: 0.016, 
        phaseShift: Math.PI,
        color: "rgba(30, 58, 138, 0.5)",
        glowColor: "rgba(30, 58, 138, 0.7)",
        lineWidth: 2
      },
      { 
        yBase: 0.65, 
        amplitude: 110, 
        frequency: 0.009, 
        speed: 0.021, 
        phaseShift: Math.PI * 1.5,
        color: "rgba(59, 130, 246, 0.3)",
        glowColor: "rgba(59, 130, 246, 0.5)",
        lineWidth: 1.5
      },
      { 
        yBase: 0.75, 
        amplitude: 70, 
        frequency: 0.01, 
        speed: 0.025, 
        phaseShift: Math.PI / 4,
        color: "rgba(147, 197, 253, 0.35)",
        glowColor: "rgba(147, 197, 253, 0.6)",
        lineWidth: 1.5
      }
    ];

    // Filled wave areas for depth
    const backgroundWaves = [
      { 
        yBase: 0.7, 
        amplitude: 100, 
        frequency: 0.006, 
        speed: 0.013, 
        color: "rgba(30, 58, 138, 0.15)" 
      },
      { 
        yBase: 0.8, 
        amplitude: 80, 
        frequency: 0.008, 
        speed: 0.016, 
        color: "rgba(37, 99, 235, 0.1)" 
      },
    ];

    // Draw flowing line with glow
    const drawFlowingLine = (line: typeof flowingLines[0]) => {
      ctx.beginPath();
      
      // Calculate smooth curve
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = 
          canvas.height * line.yBase + 
          Math.sin(x * line.frequency + time * line.speed + line.phaseShift) * line.amplitude +
          Math.sin(x * line.frequency * 2 + time * line.speed * 0.7) * line.amplitude * 0.3 +
          Math.cos(x * line.frequency * 0.5 + time * line.speed * 1.2) * line.amplitude * 0.2;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Draw glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = line.glowColor;
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.lineWidth;
      ctx.stroke();

      // Draw second glow layer for intensity
      ctx.shadowBlur = 35;
      ctx.shadowColor = line.glowColor;
      ctx.stroke();

      // Reset shadow
      ctx.shadowBlur = 0;
    };

    // Draw filled wave area
    const drawBackgroundWave = (wave: typeof backgroundWaves[0]) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x <= canvas.width; x += 5) {
        const y =
          canvas.height * wave.yBase +
          Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
          Math.cos(x * wave.frequency * 1.5 + time * wave.speed * 0.8) * wave.amplitude * 0.4;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(0.5, "#1e293b");
      gradient.addColorStop(1, "#334155");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw background filled waves for depth
      backgroundWaves.forEach(wave => drawBackgroundWave(wave));

      // Draw glowing flowing lines
      flowingLines.forEach(line => drawFlowingLine(line));

      time += 0.8;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
