"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl text-brand-green" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: <FaEnvelope className="text-3xl text-brand-green" />,
      title: "Email",
      details: ["info@marcheinnovation.com", "support@marcheinnovation.com"],
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-brand-green" />,
      title: "Location",
      details: ["Atal Incubation Centre (AIC)-Pondicherry Engineering College Campus, Pillaichavady, Puducherry 605014"],
    },
    {
      icon: <FaClock className="text-3xl text-brand-green" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-brand-beige dark:to-gray-800">
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=80"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-beige/90 via-gray-900/80 to-brand-green-dark/70 dark:from-black/90 dark:via-black/80 dark:to-black/70" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get in <span className="gradient-blue">Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office & Support Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop&q=80"
                alt="Our office"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Modern Office</h3>
                <p className="text-gray-200 text-sm">Visit our headquarters</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=80"
                alt="Support team"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Expert Team</h3>
                <p className="text-gray-200 text-sm">Dedicated support staff</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                alt="Consultation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Free Consultation</h3>
                <p className="text-gray-200 text-sm">Expert guidance available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl text-center hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg text-black font-bold mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-600 dark:text-gray-300">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
                 style={{ color: "#3D5A3C" }}
            >
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="Marche Innovation"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="your@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-brand-green"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-brand-green resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-green to-brand-green-dark text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass rounded-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98731668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl text-[#3D5A3C] font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-green mr-3">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Free initial consultation for your project
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green mr-3">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Expert advice from experienced engineers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green mr-3">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Custom solutions tailored to your needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-green mr-3">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">
                      Transparent pricing and timeline estimates
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
