"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function RequestPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    equipmentType: "",
    category: "",
    description: "",
    budget: "",
    timeline: "",
    specifications: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request submitted successfully! Our team will contact you within 24 hours.");
    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      equipmentType: "",
      category: "",
      description: "",
      budget: "",
      timeline: "",
      specifications: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Request Custom <span className="gradient-blue">Equipment</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fill out the form below and our engineering team will analyze your requirements and provide a detailed proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-12 px-4 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 gradient-blue">Company Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="John Doe"
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
                      className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Equipment Details */}
              <div className="pt-6">
                <h2 className="text-2xl font-bold mb-6 gradient-blue">Equipment Details</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium mb-2">
                        Equipment Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select Category</option>
                        <option value="medical">Medical Equipment</option>
                        <option value="engineering">Engineering Equipment</option>
                        <option value="biomedical">Biomedical Equipment</option>
                        <option value="industrial">Industrial Equipment</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="equipmentType" className="block text-sm font-medium mb-2">
                        Equipment Type *
                      </label>
                      <input
                        type="text"
                        id="equipmentType"
                        name="equipmentType"
                        value={formData.equipmentType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                        placeholder="e.g., Surgical Robot, Testing Machine"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      placeholder="Describe your equipment requirements, intended use, and any specific features needed..."
                    />
                  </div>

                  <div>
                    <label htmlFor="specifications" className="block text-sm font-medium mb-2">
                      Technical Specifications
                    </label>
                    <textarea
                      id="specifications"
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      placeholder="Any specific dimensions, power requirements, materials, certifications, or standards needed..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                        Expected Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="">Select Timeline</option>
                        <option value="urgent">Urgent (1-3 months)</option>
                        <option value="standard">Standard (3-6 months)</option>
                        <option value="flexible">Flexible (6-12 months)</option>
                        <option value="long-term">Long-term (12+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Upload Reference Files (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-600 transition-colors cursor-pointer">
                      <FaUpload className="text-4xl text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, CAD files, drawings, or images (Max 10MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Submit Equipment Request
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our terms and conditions. We&apos;ll respond within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
