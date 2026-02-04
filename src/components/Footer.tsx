"use client";

import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Marche Innovation</h3>
            <p className="text-gray-400 text-sm">
              Innovating medical and engineering solutions for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Request Equipment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/medical-equipment" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Medical Equipment Development
                </Link>
              </li>
              <li>
                <Link href="/services/engineering-equipment" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Engineering Equipment Design
                </Link>
              </li>
              <li>
                <Link href="/services/prototype-manufacturing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Prototype Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/services/rd-innovation" className="text-gray-400 hover:text-blue-400 transition-colors">
                  R&D and Innovation
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance-support" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" />
                <span>123 Innovation Drive<br />Tech City, TC 12345, USA</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@marcheinnovation.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Marche Innovation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
