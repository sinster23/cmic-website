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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm sm:text-base text-gray-600 font-medium tracking-wide mb-3"
          >
            Nationwide Presence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] mb-4"
          >
            Why Choose Carbonson Minerals
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-[#00934c] font-semibold"
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
                {/* Connector Line (hidden on mobile, visible on lg+) */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 border-t-2 border-dashed border-gray-300 -z-10" />
                )}

                {/* Card Content */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    {/* Dashed Circle Border */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                      {/* Inner White Circle */}
                      <div className="w-22 h-22 sm:w-26 sm:h-26 rounded-full bg-white shadow-lg flex items-center justify-center relative">
                        {/* Step Number Badge */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#00934c] text-white flex items-center justify-center font-bold text-sm shadow-md">
                          {feature.number}
                        </div>
                        
                        {/* Icon */}
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00934c]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs">
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