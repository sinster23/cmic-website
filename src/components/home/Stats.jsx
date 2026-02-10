'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      number: '125',
      suffix: '+',
      label: 'Mineral, Critical Mineral & Coal Grades Inspected',
      delay: 0.2
    },
    {
      number: '97',
      suffix: '+',
      label: 'Projects Successfully Completed',
      delay: 0.3
    },
    {
      number: '3',
      suffix: '+',
      label: 'Years of Industry Experience',
      delay: 0.4
    },
  ];

  return (
    <section className="relative py-8 sm:py-12 lg:py-14 bg-[#00934c] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="text-center"
            >
              {/* Number with Plus */}
              <div className="mb-3">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-white inline-block"
                >
                  {stat.number}
                </motion.span>
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.3 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-white inline-block ml-1"
                >
                  {stat.suffix}
                </motion.span>
              </div>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay + 0.4 }}
                className="text-xs sm:text-sm lg:text-base text-white/90 font-medium uppercase tracking-wide leading-relaxed max-w-xs mx-auto"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}