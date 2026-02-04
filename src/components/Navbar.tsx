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
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-blue-600">Marche</span>{" "}
              <span className={scrolled ? "text-gray-900 dark:text-white" : "text-white"}>Innovation</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  scrolled ? "text-gray-900 dark:text-white" : "text-white"
                } hover:text-blue-400 transition-colors font-medium`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Link */}
            <Link
              href="/services"
              className={`${
                scrolled ? "text-gray-900 dark:text-white" : "text-white"
              } hover:text-blue-400 transition-colors font-medium`}
            >
              Services
            </Link>
            
            <Link
              href="/request"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Request Equipment
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
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-900 dark:text-white hover:text-blue-400 transition-colors font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Services Link */}
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 dark:text-white hover:text-blue-400 transition-colors font-medium py-2"
              >
                Services
              </Link>
              
              <Link
                href="/request"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all"
              >
                Request Equipment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
