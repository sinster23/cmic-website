"use client";
import React from 'react';
import { ChevronRight, Shield, Award, FileCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden bg-[#1f1f1f] pt-16 lg:pt-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('hero-bg.png')`,
          }}
        />
        
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f]/85 via-[#1f1f1f]/75 to-[#1f1f1f]/65" />
        
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-4xl w-full py-20 sm:py-0">

          {/* Main Heading with staggered animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-[1.1] animate-fadeInUp">
            <span className="text-[#fafafa] block">Carbonson Minerals</span>
            <span className="text-[#b11212] block mt-1 sm:mt-2" style={{ fontFamily: 'Georgia, serif' }}>
              Inspection Company
            </span>
          </h1>

          {/* Sub-heading */}
          <div className="relative mb-4 sm:mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#f6d8bd] leading-relaxed">
              Delivering precision, reliability, and trust in mineral inspection and sampling services across India.
            </h2>
            <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#b11212] to-transparent" />
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#fafafa]/80 max-w-3xl mb-6 sm:mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Carbonson Minerals Inspection Company is a trusted name in coal and mineral inspection, 
            offering end-to-end services including sampling, supervision, liaisoning, and analysis 
            in collaboration with <span className="text-[#f6d8bd] font-semibold">NABL-accredited laboratories</span>.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#f6d8bd]">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">NABL Accredited</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#f6d8bd]">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[#f6d8bd]">
              <FileCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">Pan-India Services</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            {/* Primary CTA */}
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#b11212] text-white font-bold text-sm sm:text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#b11212]/50">
              <div className="absolute inset-0 bg-[#c1121f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                Contact Us
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-[#f6d8bd] font-bold text-sm sm:text-base md:text-lg border-2 border-[#f6d8bd] transition-all duration-300 hover:bg-[#f6d8bd] hover:text-[#1f1f1f]">
              <span className="flex items-center justify-center gap-2">
                Our Services
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Decorative element */}
          <div className="mt-8 sm:mt-12 flex items-center gap-3 sm:gap-4 opacity-40">
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#b11212] rotate-45" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#f6d8bd] rotate-45" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#b11212] rotate-45" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#b11212] to-transparent" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}