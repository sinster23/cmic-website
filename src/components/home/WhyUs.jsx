'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhyUsSection() {
  const reasons = [
    {
      title: 'Client-Centric Approach',
      description:
        'We actively understand our clients\' operational requirements and deliver tailored inspection and supervision solutions aligned with their objectives.',
    },
    {
      title: 'Accuracy & Reliability',
      description:
        'Our inspection and sampling processes are carried out with meticulous attention to detail, ensuring reliable results at every stage of operation.',
    },
    {
      title: 'Compliance With Standards',
      description:
        'All analysis and testing are conducted in accordance with ASTM and Indian Standard (IS) methods through NABL-accredited laboratories.',
    },
    // {
    //   title: 'Experienced Industry Professionals',
    //   description:
    //     'Our team comprises trained and experienced professionals with practical exposure across coal, cement, iron & steel, and manufacturing sectors.',
    // },
    // {
    //   title: 'Transparency & Ethical Practices',
    //   description:
    //     'We uphold honesty, transparency, and ethical conduct as fundamental principles in all our operations.',
    // },
    // {
    //   title: 'Timely & Efficient Execution',
    //   description:
    //     'We value time management and operational efficiency, ensuring smooth coordination and timely completion of assignments.',
    // },
  ];

  return (
    <section className="relative py-10 sm:py-10 lg:py-20 bg-[#f6d8bd] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Image with Sandpaper Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Sandpaper Texture Container */}
            <div className="relative">
              {/* Main Image Container with Sandpaper Effect */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                {/* Sandpaper Texture Overlay */}
                <div
                  className="absolute inset-0 z-10 mix-blend-overlay opacity-40"
                  style={{
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/subtle-grunge.png")`,
                    backgroundSize: '200px',
                  }}
                />
                
                {/* Image */}
                <img
                  src="/why.png"
                  alt="Quality inspection and testing"
                  className="w-full h-full object-cover"
                />
                
                {/* Grain Texture */}
                <div
                  className="absolute inset-0 z-10 opacity-20"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1f1f1f] leading-tight mb-4">
                Why Choose{' '}
                <span className="text-[#b11212]">Carbonson Minerals</span>
              </h2>
              <p className="text-base sm:text-lg text-[#1f1f1f]/70 font-medium">
                Committed to accuracy, integrity, and dependable service delivery.
              </p>
            </motion.div>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative"
                >
                  {/* Card Background */}
                  <div className="relative p-5 sm:p-6 border-2 border-[#1f1f1f]/10  transition-all duration-300 ">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#b11212] flex items-center justify-center  transition-transform duration-300">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-[#1f1f1f] mb-2 transition-colors duration-300">
                          {reason.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#1f1f1f]/70 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}