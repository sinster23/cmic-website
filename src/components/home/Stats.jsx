'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ target, duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && !started) {
      const timeout = setTimeout(() => {
        setStarted(true);
        const startTime = performance.now();
        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(target);
        };
        requestAnimationFrame(animate);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [inView, started, target, duration, delay]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const stats = [
    { number: 125, suffix: '+', label: 'Mineral, Critical Mineral & Coal Grades Inspected', delay: 0 },
    { number: 97,  suffix: '+', label: 'Projects Successfully Completed',                   delay: 200 },
    { number: 3,   suffix: '+', label: 'Years of Industry Experience',                      delay: 400 },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Nunito+Sans:wght@600;700&display=swap');
      `}</style>

      {/* Green banner — flush left, margin only on right */}
      <section
        className="relative py-5 sm:py-18 lg:py-12 bg-[#00934c] overflow-hidden"
        style={{ marginRight: '150px' }}
      >
        {/* Subtle blobs */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-10 sm:px-14 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-0">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center pt-8 sm:pt-0 first:pt-0 sm:px-10"
              >
                {/* Number — Oswald */}
                <div
                  className="flex items-baseline gap-1 mb-3"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                >
                  <span className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none">
                    <CountUp target={stat.number} duration={2000} delay={stat.delay} />
                  </span>
                  <span className="text-3xl sm:text-4xl text-white leading-none">{stat.suffix}</span>
                </div>

                {/* Label — Nunito Sans */}
                <p
                  className="text-xs sm:text-sm text-white/90 uppercase tracking-widest leading-snug max-w-[180px]"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}