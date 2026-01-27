'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Eye, 
  Users, 
  ClipboardCheck,
  CheckCircle2,
  Shield,
  TrendingUp
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Minerals Sampling',
      description: 'Accurate and representative sampling of coal and minerals, conducted in accordance with prescribed industry procedures.',
      delay: 0.2
    },
    {
      icon: Eye,
      title: 'Inspection & Witnessing',
      description: 'Independent inspection and witnessing services at loading and unloading points to ensure quality and quantity compliance.',
      delay: 0.3
    },
    {
      icon: Users,
      title: 'Liaisoning & Supervision',
      description: 'Professional liaisoning and supervision for coal movement, rake supervision, and coordination with concerned authorities.',
      delay: 0.4
    },
    {
      icon: FlaskConical,
      title: 'Analysis & Testing',
      description: 'Mineral analysis carried out through NABL-accredited laboratories following ASTM and IS standards.',
      delay: 0.5
    },
  ];

  const additionalServices = [
    'Tarpaulin Covering & Uncovering',
    'Escorting Services',
    'Manpower Support'
  ];

  const features = [
    {
      icon: Shield,
      text: 'NABL-Accredited Lab Partners'
    },
    {
      icon: CheckCircle2,
      text: 'ASTM & IS Standards Compliance'
    },
    {
      icon: TrendingUp,
      text: 'Transparent Reporting Process'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#f6d8bd] overflow-hidden">
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
            Our <span className="text-[#b11212]">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#1f1f1f]/70"
          >
            Delivering reliable mineral inspection and supervision services.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 lg:items-stretch">
          {/* Left Side - Service Cards Grid */}
          <div className="lg:col-span-2 flex flex-col">
            {/* 2x2 Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: service.delay }}
                  className="group relative border-2 border-[#1f1f1f]/10 p-6  transition-all duration-300 flex flex-col"
                >
                  
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-[#b11212] transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#1f1f1f] mb-3  transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1f1f1f]/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Image with Text Below */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 flex flex-col"
          >
           {/* Text Below Image */}
            <div className="mb-6">
              <p className="text-sm text-[#1f1f1f] leading-relaxed">
                We provide comprehensive inspection, supervision, and liaisoning services that support smooth mineral movement and ensure compliance at every operational stage. Our client-focused approach, technical expertise, and transparent processes make us a reliable partner across industries.
              </p>
            </div>
            {/* Image with Sandpaper Effect */}
            <div className="relative overflow-hidden flex-grow">
              {/* Sandpaper Texture Overlay */}
              <div
                className="absolute inset-0 z-10 mix-blend-overlay opacity-40"
                style={{
                  backgroundImage: `url("https://www.transparenttextures.com/patterns/subtle-grunge.png")`,
                  backgroundSize: '200px',
                }}
              />
              
              {/* Paper Edge Effect */}
              <div className="absolute inset-0 z-20 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
              
              {/* Image */}
              <img 
                src="/minerals.jpg" 
                alt="Inspection Services"
                className="w-full h-full object-cover"
              />
              
              {/* Grain Texture */}
              <div
                className="absolute inset-0 z-10 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
              />
              
              {/* Decorative Corners */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#f6d8bd] z-30" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#f6d8bd] z-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}