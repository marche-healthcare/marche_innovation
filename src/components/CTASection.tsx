"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#F3F4F6' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center border-t border-b py-20"
          style={{ borderColor: '#D1D5DB' }}
        >
          <h2
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ color: '#1F2937' }}
          >
            Ready to <span style={{ color: '#C5F542' }}>innovate</span>?
          </h2>
          <p
            className="text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: '#4B5563' }}
          >
            Our team of expert engineers is ready to turn your vision into reality. 
            Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/request"
              className="group px-8 py-4 rounded-lg font-semibold transition-all text-lg flex items-center gap-2 justify-center"
              style={{ backgroundColor: '#C5F542', color: '#1F2937' }}
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="border-2 px-8 py-4 rounded-lg font-semibold transition-all text-lg"
              style={{ borderColor: 'black', color: '#000000' }}
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
