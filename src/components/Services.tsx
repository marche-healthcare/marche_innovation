"use client";

import { useEffect, useRef } from "react";
import { FaStethoscope, FaCogs, FaFlask, FaLightbulb, FaTools } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <FaStethoscope className="text-5xl text-white" />,
      title: "Custom Medical Equipment",
      description: "State-of-the-art medical devices designed for hospitals, clinics, and healthcare facilities.",
    },
    {
      icon: <FaCogs className="text-5xl text-white" />,
      title: "Engineering Equipment Design",
      description: "Precision-engineered solutions for industrial and mechanical engineering applications.",
    },
    {
      icon: <FaFlask className="text-5xl text-white" />,
      title: "Prototype Manufacturing",
      description: "Rapid prototyping and testing to validate your concepts before full-scale production.",
    },
    {
      icon: <FaLightbulb className="text-5xl text-white" />,
      title: "R&D and Innovation",
      description: "Collaborative research and development to bring your innovative ideas to life.",
    },
    {
      icon: <FaTools className="text-5xl text-white" />,
      title: "Maintenance & Upgrades",
      description: "Ongoing support, maintenance, and equipment upgrades to ensure peak performance.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardRefs.current;
    const cta = ctaRef.current;

    if (!section || !title || !subtitle || !cardsContainer || cards.length === 0) return;

    // Create GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=4000", // Extended scroll area for all animations
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Phase 1: Title centered -> moves to top (0-25% of timeline)
    tl.fromTo(
      title,
      {
        y: "40vh", // Start centered vertically
        x: "-50%",
        left: "50%",
        opacity: 1,
      },
      {
        y: 0,
        x: 0,
        left: 0,
        ease: "power2.out",
        duration: 1,
      },
      0
    );

    // Fade in subtitle as title reaches position (20-30% of timeline)
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      0.8
    );

    // Phase 2: Cards appear stacked in center (30-40% of timeline)
    tl.fromTo(
      cards,
      {
        opacity: 0,
        scale: 0.9,
        x: (index) => {
          const col = index % 3;
          return `${(1 - col) * 100}%`;
        },
        y: (index) => {
          const row = Math.floor(index / 3);
          return (1 - row) * 350;
        },
      },
      {
        opacity: 1,
        stagger: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      1.5
    );

    // Phase 3: Cards move to grid positions one by one (40-100% of timeline)
    cards.forEach((card, index) => {
      if (!card) return;
      
      tl.to(
        card,
        {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        2 + index * 0.3 // Stagger each card
      );
    });

    // Phase 4: Fade in CTA button at the end
    if (cta) {
      tl.to(
        cta,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        3.5 // After all cards are in place
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 overflow-hidden" 
      style={{ 
        backgroundImage: 'url(/images/our_services1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold text-white mb-6 relative drop-shadow-lg"
            style={{ position: 'relative' }}
          >
            Our <span style={{ color: '#C5F542' }}>Services</span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-white max-w-2xl drop-shadow-md"
          >
            Comprehensive solutions for all your medical and engineering equipment needs
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={cardsContainerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group relative overflow-hidden rounded-lg cursor-pointer backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-shadow"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                transformOrigin: 'center center',
              }}
            >
              <div className="p-8 min-h-[320px] flex flex-col">
                <div className="mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-white/90 flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold" style={{ color: '#C5F542' }}>
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="mt-20 text-center opacity-0" style={{ transform: 'translateY(30px)' }}>
          <Link
            href="/services"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all text-lg hover:scale-105"
            style={{ backgroundColor: '#C5F542', color: '#1F2937' }}
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
