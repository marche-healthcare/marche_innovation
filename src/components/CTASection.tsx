"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            Ready to Bring Your Project to Life?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our team of expert engineers is ready to turn your vision into reality. 
            Get a free consultation and quote today.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 10px 30px rgba(255, 255, 255, 0.3)",
                  "0 20px 50px rgba(59, 130, 246, 0.6)",
                  "0 10px 30px rgba(255, 255, 255, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <Link
                href="/request"
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all transform flex items-center justify-center gap-2"
              >
                Request Equipment
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
