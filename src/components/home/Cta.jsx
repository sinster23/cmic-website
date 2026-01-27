'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-18 bg-[#1f1f1f] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/cta.png")`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1f1f1f]/90" />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#b11212]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#f6d8bd]/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="w-2 h-2 bg-[#f6d8bd] rotate-45" />
              <span className="text-[#f6d8bd] text-xs sm:text-sm font-bold tracking-wider uppercase">
                Ready to Get Started?
              </span>
              <div className="w-2 h-2 bg-[#f6d8bd] rotate-45" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#fafafa] leading-tight mb-6"
          >
            Partner With a Trusted{' '}
            <span className="text-[#b11212]">Mineral Inspection</span> Company
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#fafafa]/80 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Get in touch to discuss your inspection, sampling, or supervision requirements.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary CTA - Contact Us */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#b11212] text-white font-bold text-sm sm:text-base hover:bg-[#8f0d0d] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Secondary CTA - Explore Services */}
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#f6d8bd] text-[#f6d8bd] font-bold text-sm sm:text-base hover:bg-[#f6d8bd] hover:text-[#1f1f1f] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#fafafa]/20"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-[#fafafa]/70 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#b11212] rounded-full" />
                <span>NABL-Accredited Partners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#b11212] rounded-full" />
                <span>ASTM & IS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#b11212] rounded-full" />
                <span>Pan-India Presence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#b11212] rounded-full" />
                <span>7+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}