"use client";

import { motion } from "framer-motion";
import { FaRocket, FaUserMd, FaLightbulb, FaChartLine, FaHeart, FaGraduationCap } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      icon: <FaChartLine className="text-4xl text-brand-green" />,
      title: "Career Growth",
      description: "Continuous learning and advancement opportunities",
    },
    {
      icon: <FaHeart className="text-4xl text-brand-green" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: <FaRocket className="text-4xl text-brand-green" />,
      title: "Innovation Culture",
      description: "Work on cutting-edge technology and groundbreaking projects",
    },
    {
      icon: <FaGraduationCap className="text-4xl text-brand-green" />,
      title: "Learning & Development",
      description: "Professional training and educational support",
    },
  ];

  const openings = [
    {
      id: 1,
      title: "Senior Biomedical Engineer",
      department: "Engineering",
      location: "Tech City, USA / Remote",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
      description: "Lead the design and development of innovative medical equipment solutions. Collaborate with cross-functional teams to deliver cutting-edge products that improve patient care.",
      requirements: [
        "Bachelor's degree in Biomedical Engineering or related field",
        "5+ years of experience in medical device design",
        "Strong knowledge of FDA regulations and ISO standards",
        "Proficiency in CAD software and engineering analysis tools",
        "Excellent problem-solving and communication skills",
      ],
      responsibilities: [
        "Design and develop custom medical equipment solutions",
        "Conduct feasibility studies and risk assessments",
        "Collaborate with regulatory teams for compliance",
        "Mentor junior engineers and lead technical reviews",
        "Interface with clients to understand requirements",
      ],
    },
    {
      id: 2,
      title: "Industrial Equipment Designer",
      department: "Engineering",
      location: "Tech City, USA",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
      description: "Create innovative industrial equipment designs that enhance efficiency and safety. Work with state-of-the-art tools and technologies to bring concepts to reality.",
      requirements: [
        "Bachelor's degree in Mechanical or Industrial Engineering",
        "3+ years of equipment design experience",
        "Proficiency in SolidWorks, AutoCAD, or similar CAD tools",
        "Understanding of manufacturing processes and materials",
        "Strong attention to detail and quality",
      ],
      responsibilities: [
        "Develop detailed equipment designs and specifications",
        "Create 3D models and technical drawings",
        "Perform stress analysis and simulations",
        "Coordinate with manufacturing teams",
        "Support prototype testing and validation",
      ],
    },
    {
      id: 3,
      title: "Quality Assurance Manager",
      department: "Quality & Compliance",
      location: "Tech City, USA",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
      description: "Ensure our products meet the highest quality standards and regulatory requirements. Lead quality initiatives and continuous improvement programs.",
      requirements: [
        "Bachelor's degree in Engineering or Life Sciences",
        "5+ years in quality assurance/control",
        "Experience with ISO 13485 and FDA regulations",
        "Strong analytical and leadership skills",
        "Six Sigma or Lean certification preferred",
      ],
      responsibilities: [
        "Develop and implement quality management systems",
        "Lead internal and external audits",
        "Investigate and resolve quality issues",
        "Train staff on quality procedures",
        "Manage documentation and compliance processes",
      ],
    },
    {
      id: 4,
      title: "R&D Innovation Specialist",
      department: "Research & Development",
      location: "Tech City, USA / Hybrid",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=800&auto=format&fit=crop&q=80",
      description: "Drive innovation by researching emerging technologies and developing next-generation solutions. Shape the future of medical and industrial equipment.",
      requirements: [
        "Master's or PhD in Engineering, Physics, or related field",
        "3+ years in R&D or innovation roles",
        "Track record of patents or publications",
        "Experience with emerging technologies (AI, IoT, robotics)",
        "Excellent research and analytical skills",
      ],
      responsibilities: [
        "Conduct research on emerging technologies",
        "Develop innovative product concepts",
        "Prototype and test new solutions",
        "Collaborate with academic and industry partners",
        "Present findings to leadership and stakeholders",
      ],
    },
    {
      id: 5,
      title: "Clinical Applications Specialist",
      department: "Customer Success",
      location: "Multiple Locations",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      description: "Bridge the gap between technology and clinical practice. Train healthcare professionals and provide technical support for our medical equipment.",
      requirements: [
        "Clinical background (Nursing, RT, or Allied Health)",
        "2+ years of clinical experience",
        "Strong technical aptitude",
        "Excellent communication and training skills",
        "Willingness to travel (30-40%)",
      ],
      responsibilities: [
        "Conduct product training for healthcare professionals",
        "Provide on-site technical support",
        "Gather customer feedback for product improvements",
        "Assist with clinical evaluations and studies",
        "Develop training materials and documentation",
      ],
    },
    {
      id: 6,
      title: "Manufacturing Engineer",
      department: "Operations",
      location: "Tech City, USA",
      type: "Full-time",
      image: "https://images.unsplash.com/photo-1581092918484-8313e1f7e8e7?w=800&auto=format&fit=crop&q=80",
      description: "Optimize manufacturing processes and ensure efficient production of high-quality equipment. Drive operational excellence and continuous improvement.",
      requirements: [
        "Bachelor's degree in Manufacturing or Industrial Engineering",
        "3+ years in manufacturing engineering",
        "Knowledge of lean manufacturing principles",
        "Experience with production equipment and tooling",
        "Strong project management skills",
      ],
      responsibilities: [
        "Design and optimize manufacturing processes",
        "Improve production efficiency and reduce costs",
        "Troubleshoot manufacturing issues",
        "Implement quality control measures",
        "Collaborate with design and quality teams",
      ],
    },
  ];

  const companyPerks = [
    "Competitive salary and equity packages",
    "Flexible work arrangements",
    "Generous PTO and holidays",
    "401(k) matching",
    "Cutting-edge technology and tools",
    "Collaborative and inclusive culture",
    "Professional development stipend",
    "Health, dental, and vision insurance",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-brand-beige dark:to-gray-800">
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
            alt="Team collaboration"
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
              Join Our <span className="gradient-blue">Team</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Be part of a team that&apos;s revolutionizing medical and engineering equipment. 
              Work on meaningful projects that make a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
            style={{ color: "#3D5A3C" }}
          >
            Why Work With Us
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 glass rounded-xl hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl text-black font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "#3D5A3C" }}
          >
            Open Positions
          </motion.h2>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div
                  className="cursor-pointer flex flex-col md:flex-row gap-6"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  {/* Job Image */}
                  <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={job.image}
                      alt={job.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Job Content */}
                  <div className="flex-1 p-6 md:p-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl text-black font-bold mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300">
                          <span className="bg-brand-beige-light dark:bg-brand-green-dark px-3 py-1 rounded-full">
                            {job.department}
                          </span>
                          <span className="bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
                            {job.type}
                          </span>
                          <span className="bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full">
                            {job.location}
                          </span>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">{job.description}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedJob === job.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4"
                        
                      >
                        <svg
                          className="w-6 h-6 text-brand-green"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-6"
                    
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-lg mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-brand-green mr-2">•</span>
                              <span className="text-gray-600 dark:text-gray-300">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-brand-green mr-2">•</span>
                              <span className="text-gray-600 dark:text-gray-300">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="bg-gradient-to-r from-brand-green to-brand-green-dark text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
            style={{ color: "#3D5A3C" }}
          >
            <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We invest in our people because they&apos;re our greatest asset
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPerks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass p-4 rounded-lg flex items-center hover:shadow-lg transition-all"
              >
                <FaLightbulb className="text-brand-green text-2xl mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{perk}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-2xl"
            style={{ color: "#3D5A3C" }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We&apos;re always looking for talented individuals to join our team. 
              Send us your resume and let&apos;s talk about future opportunities.
            </p>
            <button className="bg-gradient-to-r from-brand-green to-brand-green-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Submit General Application
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
