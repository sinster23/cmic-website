'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const values = [
    { label: 'INTEGRITY', percentage: 100, delay: 0.3 },
    { label: 'TRUST', percentage: 100, delay: 0.4 },
    { label: 'CONFIDENCE', percentage: 100, delay: 0.5 },
  ];

  return (
    <section className="relative py-12 sm:py-15 lg:py-18 bg-white overflow-hidden">

      {/* Google Fonts — Oswald for headings, Nunito Sans for body */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap');

        .font-heading {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .font-body {
          font-family: 'Nunito Sans', sans-serif;
        }

        .font-label {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 800;
          letter-spacing: 0.08em;
        }
      `}</style>

      {/* Decorative Dots Pattern */}
      <div className="absolute top-8 right-8 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1e3a8a" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      {/* Decorative Background Text */}
      <div className="font-heading absolute right-0 top-1/2 -translate-y-1/2 text-[200px] sm:text-[250px] lg:text-[300px] text-gray-100 opacity-20 select-none pointer-events-none leading-none">
        ABOUT
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
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
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#1e3a8a] leading-tight mb-6"
            >
              Leading the Industry
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed mb-8"
            >
              <p>
                <span className="font-bold">Carbonson Minerals Inspection Company (CMIC)</span> is a professionally managed third-party inspection agency specializing in Coal, Mineral & Critical Mineral Inspection & Witnessing, Joint Sampling, Quality Monitoring, Handling Supervision and Liaison Services across India.
              </p>
              <p>
                With over 3+ years of industry experience, we support public and private sector organizations in coal, cement, iron & steel, and manufacturing industries by ensuring quality compliance, quantity verification, and transparent reporting.
              </p>
              <p>
                Our inspection and sampling activities are conducted strictly as per ASTM and Indian Standard (IS) methods.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Values */}
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
              <h3 className="font-label text-base sm:text-lg text-[#1e3a8a] mb-8 uppercase">
                In Every Service, We Assure:
              </h3>
            </motion.div>

            {/* Progress Bars */}
            <div className="space-y-8">
              {values.map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-label text-sm sm:text-base text-[#00934c]">
                      {item.label}
                    </span>
                    <span className="font-label text-sm sm:text-base text-[#1e3a8a]">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
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