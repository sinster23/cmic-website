'use client';

import React from 'react';
import { ChevronRight, Factory, MapPin, FlaskConical, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const stats = [
    { 
      number: '125+', 
      label: 'Materials Available',
      delay: 0.2 
    },
    { 
      number: '97+', 
      label: 'Complete Projects',
      delay: 0.3 
    },
    { 
      number: '7+', 
      label: 'Years Experience',
      delay: 0.4 
    },
  ];

  const highlights = [
    {
      icon: Factory,
      title: 'Industries Served',
      description: 'Coal, Cement, Iron & Steel, Manufacturing',
      delay: 0.5
    },
    {
      icon: MapPin,
      title: 'Operational Reach',
      description: 'Pan-India Presence',
      delay: 0.6
    },
    {
      icon: FlaskConical,
      title: 'Testing Standards',
      description: 'ASTM & IS Compliant Methods',
      delay: 0.7
    },
    {
      icon: Handshake,
      title: 'Client Base',
      description: 'Public & Private Sector Organizations',
      delay: 0.8
    },
  ];

  return (
    <section className="relative py-10 sm:py-15 lg:py-20 bg-[#1f1f1f] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-block mb-4 sm:mb-6">
              <div className="flex items-center gap-2 px-4 py-2 ">
                <div className="w-2 h-2 bg-[#f6d8bd] rotate-45" />
                <span className="text-[#f6d8bd] text-xs sm:text-sm font-bold tracking-wider uppercase">
                  Who We Are
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#fafafa] leading-tight mb-6">
              About <span className='text-red-500'>CMIC</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#fafafa]/80 leading-relaxed mb-5">
              <p>
                Carbonson Minerals Inspection Company is a professionally managed organization specializing in coal and mineral inspection, sampling, supervision, and liaisoning services. We are committed to delivering accurate, transparent, and reliable inspection solutions that support informed decision-making across industrial operations.
              </p>
              
              <p>
                With extensive experience working across coal, cement, iron & steel, and manufacturing sectors, we assist both public and private sector organizations in maintaining quality compliance and operational efficiency. Our services are carried out in accordance with established ASTM and IS standards, in collaboration with NABL-accredited laboratories.
              </p>
            </div>

            {/* CTA Button */}
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#f6d8bd] text-[#f6d8bd] font-bold text-sm sm:text-base hover:bg-[#f6d8bd] hover:text-[#1f1f1f] transition-all duration-300"
              >
                View Our Services
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
          </motion.div>

          {/* Right Content - Stats & Highlights */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: stat.delay }}
                  className="text-center p-4 sm:p-6 group"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#b11212] mb-2 ">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-[#fafafa]/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: item.delay }}
                  className="p-4  group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 transition-colors">
                      <item.icon className="w-5 h-5 text-[#f6d8bd]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-[#fafafa] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#fafafa]/70 leading-relaxed">
                        {item.description}
                      </p>
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