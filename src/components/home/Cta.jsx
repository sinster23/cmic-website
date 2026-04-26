'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const features = [
    'NABL-Accredited Testing',
    'ASTM & IS Compliant',
    'Pan-India Presence',
    '3+ Years Experience'
  ];

  return (
    <section className="relative py-8 sm:py-10 lg:py-14 overflow-hidden">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero-bg-4.jpg')` }}
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#00934c] opacity-95" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Main Heading — Oswald 700 */}
            <h2
              className="text-white mb-2 sm:mb-3"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                letterSpacing: '-0.5px',
                lineHeight: 1.15,
              }}
            >
              Ready to Get Started?
            </h2>

            {/* Subheading — Oswald 600 */}
            <p
              className="text-white/95 mb-3 sm:mb-4"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                letterSpacing: '0.01em',
              }}
            >
              Partner With a Trusted Mineral Inspection Company
            </p>

            {/* Description — Nunito Sans 400 */}
            <p
              className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
            >
              Contact us today to discuss your Coal, Mineral & Critical Mineral inspection, sampling, or supervision requirements.
            </p>

            {/* Feature Badges — Nunito Sans 700 */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 lg:mb-0">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                  <span
                    className="text-xs sm:text-sm text-white"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA — Nunito Sans 800 */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#00934c] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: '0.9rem' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative flex items-center gap-2">
                Get a Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>

            {/* Secondary CTA — Nunito Sans 800 */}
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#00934c] transition-all duration-300 rounded-lg"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: '0.9rem' }}
            >
              <span className="relative flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}