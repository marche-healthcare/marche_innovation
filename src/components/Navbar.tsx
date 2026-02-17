"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
  ];

  return (
    <motion.nav
      className="fixed w-full z-[9999] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? '#1F2937' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Marche <span style={{ color: '#3D5A3C' }}>Innovation</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:opacity-70 transition-opacity font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/request"
              className="px-6 py-2.5 rounded-lg font-semibold transition-all text-sm uppercase tracking-wider"
              style={{ backgroundColor: '#C5F542', color: '#1F2937' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: '#1F2937' }}
          >
            <div className="px-6 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:opacity-70 transition-opacity font-medium py-2 uppercase tracking-wider text-sm"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                href="/request"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 rounded-lg font-semibold text-center transition-all uppercase tracking-wider text-sm"
                style={{ backgroundColor: '#C5F542', color: '#1F2937' }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
