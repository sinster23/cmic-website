'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, FileCheck } from 'lucide-react';

export default function WhyChooseUsSection() {
  const features = [
    {
      number: '01',
      icon: CheckCircle,
      title: 'Client-Focused Approach',
      description: 'We understand client-specific operational requirements and deliver customized inspection and supervision solutions.'
    },
    {
      number: '02',
      icon: Shield,
      title: 'Independent & Unbiased Inspection',
      description: 'As a third-party agency, we ensure transparent, impartial, and verifiable inspection reporting.'
    },
    {
      number: '03',
      icon: Award,
      title: 'High Accuracy & Reliability',
      description: 'Sampling and inspection are performed with strict procedural control to ensure representative and dependable results.'
    },
    {
      number: '04',
      icon: FileCheck,
      title: 'Standards Compliance',
      description: 'All testing and analysis are conducted through NABL-accredited laboratories as per ASTM & IS standards.'
    }
  ];

  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-white overflow-hidden">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          {/* Eyebrow label — Nunito Sans 600 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base text-gray-600 tracking-wide mb-3"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
          >
            Nationwide Presence
          </motion.p>

          {/* Main heading — Oswald 700 */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[#1e3a8a]"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-0.5px',
              lineHeight: 1.15,
            }}
          >
            Why Choose Carbonson Minerals
          </motion.h2>

          {/* Subheading — Nunito Sans 700 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#00934c]"
            style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}
          >
            Commitment to Accuracy, Integrity & Reliability
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 border-t-2 border-dashed border-gray-300 -z-10" />
                )}

                <div className="flex flex-col items-center text-center">

                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <div className="w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-white shadow-lg flex items-center justify-center relative">

                        {/* Step Number Badge — Oswald */}
                        <div
                          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#00934c] text-white flex items-center justify-center shadow-md text-sm"
                          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                        >
                          {feature.number}
                        </div>

                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00934c]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Card Title — Oswald 600 */}
                  <h3
                    className="mb-3 text-[#1e3a8a]"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 600,
                      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                      letterSpacing: '0.02em',
                      lineHeight: 1.2,
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description — Nunito Sans 400 */}
                  <p
                    className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}