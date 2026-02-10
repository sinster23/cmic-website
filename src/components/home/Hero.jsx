"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/hero-bg-1.webp',
      subtext: 'Delivering highly accurate, fully transparent, and completely independent inspection services backed by technical expertise and industry best practices',
    },
    {
      image: '/hero-bg-2.jpg',
      subtext: 'End-to-end inspection, sampling, and on-site supervision services for Coal, Minerals, and Critical Minerals across the entire supply chain',
    },
    {
      image: '/hero-bg-3.jpg',
      subtext: 'Comprehensive laboratory testing and analysis carried out in close association with NABL-accredited laboratories using proven methodologies',
    },
    {
      image: '/hero-bg-4.png',
      subtext: 'Ensuring strict compliance with ASTM and IS standards to guarantee reliability, consistency, safety, and regulatory confidence',
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[75vh] min-h-[600px] overflow-hidden bg-gray-100">
      {/* Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
            
            {/* Light overlay for better text readability */}
            <div className="absolute inset-0 bg-white/40" />
          </div>
        ))}
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          {/* Main Title - Fixed across all slides */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif  text-black mb-8 leading-tight">
            Carbonson Minerals<br />Inspection Company
          </h1>

          {/* Subtext - Changes with each slide */}
          <div className="min-h-[60px] mb-10">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed transition-opacity duration-500">
              {slides[currentSlide].subtext}
            </p>
          </div>

          {/* CTA Buttons - Green Theme */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="group relative px-8 py-4 bg-green-700 text-black font-bold text-base overflow-hidden transition-all duration-300 hover:bg-green-800 hover:shadow-xl rounded-sm">
              <span className="flex items-center justify-center gap-2">
                Request Inspection Quote
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="group px-8 py-4 bg-white text-green-700 font-bold text-base border-2 border-green-700 rounded-sm transition-all duration-300 hover:bg-green-700 hover:text-white hover:shadow-xl">
              <span className="flex items-center justify-center gap-2">
                Contact Our Expert
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-3 bg-green-800'
                : 'w-3 h-3 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}