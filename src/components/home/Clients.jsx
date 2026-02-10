'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ClientsSection() {
  const clients = [
    {
      name: 'Coal India',
      logo: '/clients/Coal_India_Logo.svg',
    },
    {
      name: 'NTPC',
      logo: '/clients/ntpc.png',
    },
    {
      name: 'UPRV',
      logo: '/clients/uprv.png',
    },
    {
      name: 'IFB Agro',
      logo: '/clients/ifb_agro.png',
    },
    {
      name: 'Gujarat Ambuja Exports',
      logo: '/clients/gujarat.png',
    },
    {
      name: 'Nuvoco',
      logo: '/clients/nuvoco.png',
    },
    {
      name: 'Mohit Minerals',
      logo: '/clients/mohit_minerals.png',
    },
    {
      name: 'Tirupati Minerals',
      logo: '/clients/tirupati_minerals.png',
    },
    {
      name: 'CCI',
      logo: '/clients/cci.avif',
    },
    {
      name: 'Wave Distil',
      logo: '/clients/wd.png',
    },
    {
      name: 'Shree Cement',
      logo: '/clients/shree_cement.png',
    },
    {
      name: 'ACC Limited',
      logo: '/clients/acc_limited.png',
    },
  ];

  // Triple the array for truly seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  // Calculate the width of one complete set
  // Logo width (192px on lg) + gap (80px on lg) = 272px per item
  const itemWidth = 272; // Adjust based on your actual logo width + gap
  const totalWidth = clients.length * itemWidth;

  return (
    <section className="relative pb-8 sm:pb-12 lg:pb-16 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight mb-4"
          >
            Our <span className="text-[#00934c]">Clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 font-medium"
          >
            Trusted by leading public and private sector organizations across industries.
          </motion.p>
        </div>

        {/* Auto-Scrolling Clients Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-12 sm:gap-16 lg:gap-20"
              animate={{
                x: [0, -totalWidth],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Adjust speed (higher = slower)
                  ease: "linear",
                },
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  {/* Logo Container */}
                  <div className="relative h-24 w-40 sm:h-28 sm:w-44 lg:h-32 lg:w-48 flex items-center justify-center bg-white transition-all duration-300 hover:shadow-md hover:border-[#00934c]/30">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-16 sm:max-h-20 lg:max-h-24 max-w-[85%] object-contain transition-all duration-300 opacity-60"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}