"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaBullseye, FaFlask, FaShieldAlt, FaBolt, FaCogs, FaLightbulb, FaAward, FaUsers } from "react-icons/fa";
import Image from "next/image";
import StackedLayerReveal from "@/components/StackedLayerReveal";

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
    { 
      icon: FaBullseye, 
      title: "Precision", 
      description: "Engineering excellence in every product",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: FaLightbulb, 
      title: "Innovation", 
      description: "Cutting-edge technology and solutions",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: FaShieldAlt, 
      title: "Safety", 
      description: "Compliance with highest safety standards",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: FaBolt, 
      title: "Quality", 
      description: "Uncompromising quality at every step",
      gradient: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-brand-beige dark:to-gray-800">
      {/* Hero Section with Background */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden" style={{ zIndex: 1 }}>
        {/* Background Video */}
        <div className="absolute inset-0" style={{ zIndex: -1 }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/our_services.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About <span className="gradient-blue">Marche Innovation</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A technology-driven innovation company specializing in custom medical and engineering equipment solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Mission - Image Left, Content Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative h-96 w-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80"
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#6B8E23' }}>Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To revolutionize the medical and engineering equipment industry by delivering innovative, custom-built solutions that enhance healthcare delivery and industrial efficiency. We empower our clients with cutting-edge technology, precision engineering, and unwavering commitment to quality.
              </p>
            </div>
          </motion.div>

          {/* Vision - Image Right, Content Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="p-8 md:order-1">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#6B8E23' }}>Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To be the global leader in custom equipment innovation, setting new standards for excellence, safety, and technological advancement. We envision a future where every healthcare facility and engineering firm has access to perfectly tailored solutions that drive success and save lives.
              </p>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80"
                alt="Vision"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 overflow-hidden relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
            style={{ color: '#6B8E23' }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -90 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="group text-center p-8 glass rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.6, type: "spring" }
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0,0,0,0.1)",
                        "0 0 40px rgba(0,0,0,0.2)",
                        "0 0 20px rgba(0,0,0,0.1)"
                      ]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent className="text-4xl text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold mb-3 text-gray-800 dark:text-white"
                    whileHover={{ scale: 1.1, color: "#6B8E23" }}
                    transition={{ duration: 0.2 }}
                  >
                    {value.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 px-4 pb-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative isolate" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            style={{ color: '#6B8E23' }}
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12"
          >
            From concept to delivery, we follow a proven methodology to ensure excellence at every step
          </motion.p>
          <div className="relative">
            <StackedLayerReveal steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Team & Facility Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800 relative" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
              style={{ color: '#6B8E23' }}
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
      <section className="py-20 px-4 relative" style={{ zIndex: 2 }}>
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
