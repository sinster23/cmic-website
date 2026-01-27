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

  return (
    <section className="relative py-10 sm:py-12 lg:py-15 bg-[#f6d8bd] overflow-hidden">
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
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#b11212]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#1f1f1f]/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1f1f1f] leading-tight mb-4"
          >
            Our <span className="text-[#b11212]">Clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#1f1f1f]/70 font-medium"
          >
            Trusted by leading public and private sector organizations across industries.
          </motion.p>
        </div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group relative transition-all duration-300 "
              >
                {/* Logo Container */}
                <div className="relative h-20 w-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain  transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}