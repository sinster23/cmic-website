'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const values = [
    { 
      label: 'INTEGRITY',
      percentage: 100,
      delay: 0.3
    },
    { 
      label: 'TRUST',
      percentage: 100,
      delay: 0.4
    },
    { 
      label: 'CONFIDENCE',
      percentage: 100,
      delay: 0.5
    },
  ];

  return (
    <section className="relative py-12 sm:py-15 lg:py-18 bg-white overflow-hidden">
      {/* Decorative Dots Pattern - Top Right */}
      <div className="absolute top-8 right-8 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1e3a8a" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      {/* Decorative "LAB" Text Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] sm:text-[250px] lg:text-[300px] font-black text-gray-100 opacity-20 select-none pointer-events-none leading-none">
       ABOUT
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6"
            >
              Leading the Industry
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed mb-8"
            >
              <p>
                <span className="font-bold">Carbonson Minerals Inspection Company (CMIC)</span> is a professionally managed third-party inspection agency specializing in Coal, Mineral & Critical Mineral Inspection & Witnessing, Joint Sampling, Quality Monitoring, Handling Supervision and Liaison Services across India.
              </p>
              
              <p>
                With over 3+ years of industry experience, we support public and private sector organizations in coal, cement, iron & steel, and manufacturing industries by ensuring quality compliance, quantity verification, and transparent reporting.
              </p>

              <p>
                Our inspection and sampling activities are conducted strictly as per ASTM and Indian Standard (IS) methods, with testing performed in association with NABL-accredited laboratories.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Values with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-8 uppercase tracking-wide">
                In Every Service, We Assure:
              </h3>
            </motion.div>

            {/* Progress Bars */}
            <div className="space-y-8">
              {values.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  {/* Label and Percentage */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm sm:text-base font-bold text-[#00934c] uppercase tracking-wide">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#1e3a8a]">
                      {item.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar Background */}
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                    {/* Progress Bar Fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: item.delay + 0.2, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00934c] to-[#00b35c] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}