"use client";

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t-2 border-brand-lime/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Marche <span className="text-brand-lime">Innovation</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovating medical and engineering solutions for a better tomorrow.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                <FaTwitter size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                <FaFacebook size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  Request Equipment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/medical-equipment" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  Medical Equipment Development
                </Link>
              </li>
              <li>
                <Link href="/services/engineering-equipment" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  Engineering Equipment Design
                </Link>
              </li>
              <li>
                <Link href="/services/prototype-manufacturing" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  Prototype Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/services/rd-innovation" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  R&D and Innovation
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance-support" className="text-gray-400 hover:text-brand-lime transition-colors duration-300">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wide text-sm">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-brand-lime" />
                <span>123 Innovation Drive<br />Tech City, TC 12345, USA</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-brand-lime" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-brand-lime" />
                <span>info@marcheinnovation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Marche Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
