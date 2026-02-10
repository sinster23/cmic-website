'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function IndustriesCapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const capabilities = [
    {
      title: 'INDUSTRIES SERVED',
      content: 'We serve a wide range of industries including Coal, Cement, Iron & Steel, and Manufacturing.'
    },
    {
      title: 'OPERATIONAL REACH',
      content: 'Our operations extend across India, ensuring a strong Pan-India presence and seamless service delivery.'
    },
    {
      title: 'TESTING STANDARDS',
      content: 'All testing and analytical procedures are carried out using ASTM and IS compliant methods.'
    },
    {
      title: 'CLIENT BASE',
      content: 'We proudly work with both Public and Private Sector organizations across diverse domains.'
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-10 sm:py-12 lg:py-15 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-sm sm:text-base text-gray-600 font-medium tracking-wide">
                Globally Acclaimed For
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6"
            >
              Industries & <span className="block">Capabilities</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10"
            >
              As a professionally managed inspection company, CMIC has established a strong presence across key industrial sectors in India. With our advanced inspection methodologies, qualified personnel, and streamlined services, we help organizations from varied industries maintain quality compliance and operational excellence.
            </motion.p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  {/* Circle */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#00934c"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
                      whileInView={{ strokeDashoffset: "0" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      strokeDasharray="283"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base sm:text-lg font-bold text-[#00934c]">100%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-800 uppercase">
                    Client-Centric<br />Approach
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  {/* Circle */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#00934c"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
                      whileInView={{ strokeDashoffset: "0" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                      strokeDasharray="283"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-base sm:text-lg font-bold text-[#00934c]">100%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-800 uppercase">
                    Transparent<br />Procedure
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border border-gray-200 bg-white shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-300 ${
                    openIndex === index ? 'bg-[#00934c] text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold text-sm sm:text-base uppercase tracking-wide">
                    {item.title}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-white border-t border-gray-200">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}