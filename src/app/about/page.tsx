"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  const processSteps = [
    { step: "1", title: "Requirement Analysis", description: "We understand your specific needs and technical requirements" },
    { step: "2", title: "Design & Planning", description: "Our engineers create detailed designs and blueprints" },
    { step: "3", title: "Prototype Development", description: "We build and test initial prototypes for validation" },
    { step: "4", title: "Manufacturing", description: "Precision manufacturing with quality control at every stage" },
    { step: "5", title: "Testing & QA", description: "Rigorous testing to meet industry standards and regulations" },
    { step: "6", title: "Delivery & Support", description: "On-time delivery with ongoing maintenance and support" },
  ];

  const values = [
    { icon: "🎯", title: "Precision", description: "Engineering excellence in every product" },
    { icon: "🔬", title: "Innovation", description: "Cutting-edge technology and solutions" },
    { icon: "🛡️", title: "Safety", description: "Compliance with highest safety standards" },
    { icon: "⚡", title: "Quality", description: "Uncompromising quality at every step" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&auto=format&fit=crop&q=80"
            alt="Medical equipment innovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/70 dark:from-black/90 dark:via-black/80 dark:to-black/70" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About <span className="gradient-blue">Marche Innovattion</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A technology-driven innovation company specializing in custom medical and engineering equipment solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 gradient-blue">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To revolutionize the medical and engineering equipment industry by delivering innovative, custom-built solutions that enhance healthcare delivery and industrial efficiency. We empower our clients with cutting-edge technology, precision engineering, and unwavering commitment to quality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 gradient-blue">Our Vision</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  To be the global leader in custom equipment innovation, setting new standards for excellence, safety, and technological advancement. We envision a future where every healthcare facility and engineering firm has access to perfectly tailored solutions that drive success and save lives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass rounded-xl hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Process
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass p-6 rounded-xl hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-600" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Facility Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our World-Class Facilities
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=80"
                alt="Manufacturing facility"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">State-of-the-Art Manufacturing</h3>
                <p className="text-gray-200">Advanced equipment for precision production</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80"
                alt="Research and development team"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Expert Team</h3>
                <p className="text-gray-200">Dedicated professionals driving innovation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Expert Engineers" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-4xl font-bold gradient-blue mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
