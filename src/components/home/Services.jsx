'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const services = [
    {
      image: '/service1.png',
      title: 'MINERALS, CRITICAL MINERAL & COAL SAMPLING',
      description: 'Representative sampling of coal and minerals at mines, stockyards, plants, sidings, ports, and unloading points as per prescribed ASTM & IS procedures.',
    },
    {
      image: '/service2.jpg',
      title: 'INSPECTION & WITNESSING',
      description: 'Third-party inspection and witnessing services at loading, unloading, and dispatch locations to verify quantity, quality, and compliance.',
    },
    {
      image: '/service3.jpg',
      title: 'HANDLING, LIAISONING & SUPERVISION',
      description: 'Professional liaison services for coal movement, rake supervision, loading supervision, and coordination with railways and concerned authorities.',
    },
    {
      image: '/service4.jpg',
      title: 'ANALYSIS & TESTING',
      description: 'Coal and mineral analysis conducted through NABL-accredited laboratories following approved ASTM & IS test methods.',
    },
  ];

  const scrollToSlide = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : services.length - 1;
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide < services.length - 1 ? currentSlide + 1 : 0;
    scrollToSlide(newIndex);
  };

  return (
    <section className="relative pb-40 md:pb-34 lg:pb-46 bg-white/90">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap');

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-[400px] sm:h-[450px] lg:h-[500px]"
        style={{
          backgroundImage: `url('/service0.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[180px] sm:h-[200px] lg:h-[220px]" />

        {/* Green Services Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#00934c] mx-4 sm:mx-8 lg:mx-12 px-6 sm:px-10 lg:px-16 pt-10 pb-72 sm:pb-80 lg:pb-96"
        >
          <div className="max-w-5xl mx-auto">

            {/* Main Heading — Oswald */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-6"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              Explore our <span style={{ fontWeight: 700 }}>Services</span>
            </motion.h2>

            {/* Description — Nunito Sans */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-sm sm:text-base leading-relaxed text-white"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
            >
              We invite you to explore our comprehensive range of mineral inspection, sampling, and testing services designed to meet the rigorous demands of the mining and mineral industry across India. Trust Carbonson Minerals for unmatched expertise, accurate analysis, and the highest standards of quality and compliance.
            </motion.p>
          </div>

          {/* Service Cards */}
          <div className="absolute left-0 right-0 top-[300px] sm:top-[260px] md:top-[300px] lg:top-[280px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Desktop Grid */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 lg:h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="bg-white px-4 py-5">
                      {/* Card Title — Oswald */}
                      <h3
                        className="uppercase leading-tight mb-2"
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          color: '#004a99',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {service.title}
                      </h3>
                      {/* Card Description — Nunito Sans */}
                      <p
                        className="line-clamp-3"
                        style={{
                          fontFamily: "'Nunito Sans', sans-serif",
                          fontWeight: 400,
                          fontSize: '0.75rem',
                          color: '#4b5563',
                          lineHeight: '1.6',
                        }}
                      >
                        {service.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00934c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="lg:hidden relative">
                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {services.map((service) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="w-full flex-shrink-0 snap-center px-2"
                    >
                      <div className="group relative overflow-hidden bg-white shadow-xl">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>

                        <div className="bg-white px-4 py-5">
                          <h3
                            className="uppercase leading-tight mb-2"
                            style={{
                              fontFamily: "'Oswald', sans-serif",
                              fontWeight: 600,
                              fontSize: '0.85rem',
                              color: '#004a99',
                              letterSpacing: '0.03em',
                            }}
                          >
                            {service.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "'Nunito Sans', sans-serif",
                              fontWeight: 400,
                              fontSize: '0.75rem',
                              color: '#4b5563',
                              lineHeight: '1.6',
                            }}
                          >
                            {service.description}
                          </p>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00934c]" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-[#00934c]" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-[#00934c]" />
                </button>

                <div className="flex justify-center gap-2 mt-6">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}