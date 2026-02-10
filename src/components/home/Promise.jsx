"use client";
import React from "react";
import { motion } from 'framer-motion';

export default function PromiseSection() {
  return (
      <section className="relative py-8 sm:py-12 lg:py-14 overflow-hidden bg-white">
     {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="text-center max-w-4xl mx-auto"
    >
      <div className="relative p-8 sm:p-10 lg:p-12">
        {/* Opening Quote */}
        <div className="absolute -top-4 left-8 text-6xl sm:text-7xl text-[#00934c] opacity-20 font-serif">
          "
        </div>

        {/* Quote Content */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed italic font-light relative z-10">
          We provide end-to-end inspection, supervision, and liaison services
          that ensure smooth mineral movement, regulatory compliance, and
          risk-free operations. Our technical expertise, transparent processes,
          and timely reporting make us a trusted inspection partner across
          industries.
        </p>

        {/* Closing Quote */}
        <div className="absolute -bottom-4 right-8 text-6xl sm:text-7xl text-[#00934c] opacity-20 font-serif">
          "
        </div>
      </div>
    </motion.div>
    </section>
  );
}
