"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    {
      image: '/hero-bg-8.jpeg',
      label: 'Coal Inspection',
      heading: 'Precision Coal Inspection Across the Supply Chain',
      subtext:
        'Delivering highly accurate, independent coal inspection services — from mine dispatch to port discharge — backed by certified technical expertise.',
    },
    {
      image: '/hero-bg-11.jpeg',
      label: 'Conveyor & Bulk Handling',
      heading: 'On-Site Conveyor & Bulk Material Supervision',
      subtext:
        'End-to-end supervision and sampling across conveyor systems, stockyards, and bulk handling terminals for Coal, Minerals, and Critical Minerals.',
    },
    {
      image: '/hero-bg-12.jpeg',
      label: 'Iron Ore Inspection',
      heading: 'End-to-End Iron Ore Sampling & Quality Assurance',
      subtext:
        'Independent iron ore inspection, lot sampling, and moisture analysis ensuring strict grade compliance from origin to final destination.',
    },
    {
      image: '/hero-bg-10.jpeg',
      label: 'Field Sampling',
      heading: 'Systematic Field Sampling by Certified Professionals',
      subtext:
        'Rigorous on-site sampling services using ASTM and IS-compliant methodologies — ensuring representative, traceable samples at every stage.',
    },
    {
      image: '/hero-bg-9.jpeg',
      label: 'Laboratory Testing',
      heading: 'Comprehensive Lab Testing in NABL-Accredited Facilities',
      subtext:
        'Proximate, ultimate, and trace element analysis conducted in NABL-accredited laboratories using proven, internationally recognised methodologies.',
    },
  ];

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startInterval();
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startInterval();
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startInterval();
  };

  return (
    <div className="relative h-[75vh] min-h-[500px] overflow-hidden bg-gray-900">

      {/* ── Slides ── */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          </div>
        ))}
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-20 h-full flex items-center px-5 sm:px-10 lg:pl-24 lg:pr-20">
        <div className="w-full max-w-xl">

          {/* Label tag — always green */}
          <span className="inline-flex items-center gap-1.5 bg-green-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
            {slides[currentSlide].label}
          </span>

          {/* Heading */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-white leading-tight mb-4"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9), 0 0 50px rgba(0,0,0,0.7)' }}
          >
            {slides[currentSlide].heading}
          </h2>

          {/* Subtext */}
          <p
            className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-md"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}
          >
            {slides[currentSlide].subtext}
          </p>

          {/* CTA Buttons — fixed, never change */}
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4">
            <button className="group flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-green-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wide hover:bg-green-800 transition-all duration-300 hover:shadow-xl">
              Request Inspection Quote
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-transparent text-white font-bold text-xs sm:text-sm uppercase tracking-wide border-2 border-white hover:bg-white hover:text-green-700 transition-all duration-300">
              Contact Our Expert
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Slide Counter ── */}
      <div className="absolute top-5 right-16 lg:right-20 z-30 text-white/50 text-xs font-mono font-bold tracking-widest select-none">
        {String(currentSlide + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(slides.length).padStart(2, '0')}
      </div>

      {/* ── Navigation Arrows ── */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-6 lg:right-14 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-white/80 hover:bg-white transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      {/* ── Dot Indicators — always green ── */}
      <div className="absolute bottom-14 sm:bottom-10 left-5 sm:left-10 lg:left-24 z-30 flex gap-2 sm:gap-3 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 h-2 sm:h-2.5 ${
              index === currentSlide
                ? 'w-7 sm:w-9 bg-green-700'
                : 'w-2 sm:w-2.5 bg-white/60 hover:bg-white/90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ── Mobile Bottom Bar CTAs — fixed colours ── */}
      <div className="flex lg:hidden absolute bottom-0 left-0 right-0 z-30">
        <button className="flex-1 py-2.5 bg-green-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-green-800 transition-colors text-center border-r border-white/20">
          Quote
        </button>
        <button className="flex-1 py-2.5 bg-teal-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-teal-800 transition-colors text-center border-r border-white/20">
          Call
        </button>
        <button className="flex-1 py-2.5 bg-slate-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors text-center">
          Email
        </button>
      </div>

    </div>
  );
}