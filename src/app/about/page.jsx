'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Flame, Factory, Settings, Hammer, Mountain, Building2
} from 'lucide-react';
import CTASection from '@/components/home/Cta';
import WhyChooseUsSection from '@/components/home/WhyUs';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

export default function AboutPage() {
  const [activeJourney, setActiveJourney] = useState(0);

  const focusAreas = [
    { icon: Flame,     title: 'Iron & Steel Industries',  desc: 'Quality inspection and sampling for iron ore, steel inputs, and related minerals.' },
    { icon: Factory,   title: 'Cement Industries',         desc: 'Coal and mineral quality monitoring for cement manufacturing operations.' },
    { icon: Settings,  title: 'Manufacturing Industries',  desc: 'Third-party inspection services for manufacturing sector procurement.' },
    { icon: Hammer,    title: 'Coal & Power Sector',       desc: 'End-to-end coal inspection, rake supervision, and quality compliance.' },
    { icon: Mountain,  title: 'Mining & Minerals',         desc: 'Critical mineral sampling and witnessing at mine heads and stockyards.' },
    { icon: Building2, title: 'Government & PSUs',         desc: 'Liaison and supervision services for public sector coal and mineral operations.' },
  ];

  const journeySteps = [
    {
      period: '2021 — Founding',
      title: 'Incorporated with Purpose',
      desc: 'Carbonson Minerals Inspection Company (CMIC) was established as a professionally managed third-party inspection agency focused on the coal and minerals sector in India.',
    },
    {
      period: '2022 — Growth',
      title: 'Expanding Reach',
      desc: 'Rapidly expanded operational presence across major coal and mineral corridors in India — covering mines, stockyards, railway sidings, and port locations.',
    },
    {
      period: '2023 — Present',
      title: 'Trusted Partner',
      desc: 'Today CMIC serves public and private sector organizations across coal, cement, iron & steel, and manufacturing — with 97+ completed projects and 125+ grades inspected.',
    },
  ];

  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* ── Responsive styles ── */}
      <style>{`
        /* Hero */
        .about-hero {
          position: relative;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ── Section 2: Main About ── */
        .about-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-main-section {
          padding: 80px 8%;
          background: #fff;
        }

        /* ── Section 3: Trusted Experts ── */
        .trusted-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .trusted-section {
          padding: 80px 8%;
          background: #f7f9fc;
        }

        /* ── Section 5: Focus Areas ── */
        .focus-section {
          padding: 60px 8%;
          background: #fff;
        }
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 56px 32px;
        }

        /* ── Stats row ── */
        .stats-row {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }

        /* Image badge absolute positions stay as-is on desktop */
        .img-badge-green {
          position: absolute;
          bottom: -24px;
          left: -24px;
          z-index: 2;
          background: #00934c;
          color: #fff;
          padding: 20px 28px;
          box-shadow: 0 8px 32px rgba(0,147,76,0.3);
        }
        .img-badge-blue {
          position: absolute;
          bottom: 24px;
          right: -20px;
          background: #1e3a8a;
          color: #fff;
          padding: 16px 24px;
          box-shadow: 0 8px 32px rgba(30,58,138,0.3);
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .about-main-grid,
          .trusted-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          /* Swap trusted image/text to natural order on mobile */
          .trusted-image-col { order: 1; }
          .trusted-text-col  { order: 2; }

          .about-main-section,
          .trusted-section {
            padding: 60px 6%;
          }

          .focus-section {
            padding: 50px 6%;
          }

          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
          }

          /* On tablet the offset badges look odd; bring them in */
          .img-badge-green {
            bottom: -16px;
            left: -8px;
            padding: 14px 20px;
          }
          .img-badge-blue {
            right: 0;
            bottom: 16px;
            padding: 12px 18px;
          }

          /* Decorative border offset on image */
          .img-offset-border {
            display: none;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 580px) {
          .about-hero {
            height: 200px;
          }

          .about-main-section,
          .trusted-section {
            padding: 48px 5%;
          }

          .focus-section {
            padding: 44px 5%;
          }

          .focus-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .stats-row {
            gap: 20px;
          }

          .img-badge-green {
            position: static;
            margin-top: 16px;
            display: inline-block;
          }
          .img-badge-blue {
            position: static;
            display: inline-block;
            margin-top: 12px;
          }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="about-hero">
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/hero-bg-9.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.65) 100%)',
            zIndex: 1,
          }}
        />

        {/* Green accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '6px',
            background: '#00934c',
            zIndex: 2,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1
            style={{
              ...oswald,
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 6vw, 4rem)',
              color: '#fff',
              letterSpacing: '-1px',
              margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.4)',
            }}
          >
            ABOUT US
          </h1>
        </motion.div>
      </section>

      {/* ─── 2. MAIN ABOUT ─── */}
      <section className="about-main-section">
        <div className="about-main-grid">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '13px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Our Story
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', color: '#1e3a8a', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.5px' }}>
              A Legacy of Precision in<br />Mineral Inspection
            </h2>
            <div style={{ width: '48px', height: '4px', background: '#00934c', marginBottom: '28px' }} />
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>
              <strong style={{ ...nunito, fontWeight: 700, color: '#1a1a1a' }}>
                Carbonson Minerals Inspection Company (CMIC)
              </strong>{' '}
              is a professionally managed third-party inspection agency specializing in Coal, Mineral
              &amp; Critical Mineral Inspection &amp; Witnessing, Joint Sampling, Quality Monitoring,
              Handling Supervision, and Liaison Services across India.
            </p>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>
              We are committed to excellence in every facet of mineral inspection and analysis. With
              a steadfast dedication to precision, reliability, and efficiency, we redefine industry
              standards and exceed client expectations.
            </p>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#444', lineHeight: 1.8 }}>
              Our comprehensive range of services encompasses sampling, joint sampling, analysis,
              liaisoning, witnessing, and supervision — ensuring thorough and accurate assessments at
              every stage of the process.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div
              className="img-offset-border"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '3px solid #00934c',
                zIndex: 0,
              }}
            />
            <img
              src="/about2.jpeg"
              alt="CMIC Team"
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 1 }}
            />
            <div className="img-badge-green">
              <div style={{ ...oswald, fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>3+</div>
              <div style={{ ...nunito, fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.9 }}>
                Years of<br />Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. TRUSTED EXPERTS ─── */}
      <section className="trusted-section">
        <div className="trusted-grid">
          {/* Image */}
          <motion.div
            className="trusted-image-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <img
              src="/about1.jpeg"
              alt="Inspection in action"
              style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
            />
            <div className="img-badge-blue">
              <div style={{ ...oswald, fontWeight: 700, fontSize: '1.6rem', lineHeight: 1 }}>97+</div>
              <div style={{ ...nunito, fontWeight: 700, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.9 }}>
                Projects<br />Completed
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="trusted-text-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '13px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              About Us — We Are
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', color: '#1e3a8a', lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.5px' }}>
              THE TRUSTED EXPERTS<br />IN MINERAL INSPECTION
            </h2>
            <div style={{ width: '48px', height: '4px', background: '#00934c', marginBottom: '28px' }} />
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>
              With over 3+ years of industry experience, we support public and private sector
              organizations in coal, cement, iron &amp; steel, and manufacturing industries by
              ensuring quality compliance, quantity verification, and transparent reporting.
            </p>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>
              Our inspection and sampling activities are conducted strictly as per ASTM and Indian
              Standard (IS) methods, with testing performed in association with NABL-accredited
              laboratories — delivering insightful data your operations can rely on.
            </p>
            <div className="stats-row">
              {[
                ['125+', 'Grades Inspected'],
                ['97+', 'Projects Done'],
                ['100%', 'Transparency'],
              ].map(([num, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ ...oswald, fontWeight: 700, fontSize: '1.8rem', color: '#00934c', lineHeight: 1 }}>{num}</div>
                  <div style={{ ...nunito, fontWeight: 600, fontSize: '11px', color: '#666', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. FOCUS AREAS ─── */}
      <section className="focus-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '34px' }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Carbonson Minerals Inspection Co.
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', color: '#1e3a8a', letterSpacing: '-0.5px', margin: '0 0 20px' }}>
              Our Focus Areas
            </h2>
          </motion.div>

          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 12px' }}
              >
                <div style={{ width: '76px', height: '76px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <Icon size={40} color="#00934c" strokeWidth={1.5} />
                </div>
                <h4 style={{ ...oswald, fontWeight: 600, fontSize: '1rem', color: '#1e3a8a', letterSpacing: '0.5px', textTransform: 'uppercase', margin: '0 0 12px' }}>
                  {title}
                </h4>
                <p style={{ ...nunito, fontWeight: 400, fontSize: '13px', color: '#666', lineHeight: 1.75, margin: 0 }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ─── 8. CTA ─── */}
      <CTASection />
    </div>
  );
}