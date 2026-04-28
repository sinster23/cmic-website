'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, FlaskConical, ClipboardCheck, BarChart2, FileText } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/Cta';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

/* ─── Data ───────────────────────────────────────────────── */
const whatWeDo = [
  'Mine-head sample collection with strict chain-of-custody',
  'Stockyard and wagon-top sampling',
  'Railway siding and unloading point sampling',
  'Composite and incremental sampling techniques',
  'Sample division and preparation as per IS / ASTM standards',
  'On-site supervision of third-party sampling activities',
];

const process = [
  {
    num: '01',
    icon: FlaskConical,
    title: 'Sample Collection',
    desc: 'Our trained inspectors collect samples directly at mine heads, stockyards, or sidings following ASTM / IS protocols to guarantee representativeness.',
  },
  {
    num: '02',
    icon: ClipboardCheck,
    title: 'Sample Preparation',
    desc: 'Collected samples are divided, crushed, and prepared under controlled conditions — maintaining integrity throughout the process.',
  },
  {
    num: '03',
    icon: BarChart2,
    title: 'Testing & Analysis',
    desc: 'Prepared samples are dispatched to NABL-accredited laboratories for precise parameter-wise analysis as per agreed test scope.',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Report & Certification',
    desc: 'A comprehensive, transparent test report is issued with all parameters, methodology references, and certified findings for your records.',
  },
];

const industries = [
  'Coal & Power Sector',
  'Iron & Steel Industries',
  'Cement Industries',
  'Manufacturing Sector',
  'Mining & Minerals',
  'Government & PSUs',
];

const whyUs = [
  { title: 'ASTM & IS Compliant', desc: 'All sampling activities strictly follow ASTM International and Indian Standard methodologies.' },
  { title: 'NABL-Accredited Labs', desc: 'Testing performed in association with NABL-accredited laboratories for certified, reliable results.' },
  { title: 'Experienced Field Team', desc: 'Qualified inspectors with hands-on experience across major coal and mineral corridors in India.' },
  { title: 'Transparent Reporting', desc: '100% unbiased, third-party reporting — delivering data your procurement decisions can rely on.' },
];

/* ─── Component ──────────────────────────────────────────── */
export default function MineralSamplingPage() {
  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* Hero */
        .ms-hero {
          position: relative;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Section paddings */
        .ms-section { padding: 80px 8%; }
        .ms-section-grey { padding: 80px 8%; background: #f7f9fc; }
        .ms-section-dark { padding: 80px 8%; background: #1e3a8a; }

        /* Overview grid */
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: flex-start;
          max-width: 1140px;
          margin: 0 auto;
        }

        /* Stacked images (right col of overview) */
        .stacked-imgs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 12px;
        }
        .stacked-imgs img:first-child {
          grid-column: 1 / -1;
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 12px;
        }
        .stacked-imgs img:not(:first-child) {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
        }

        /* Process cards */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1140px;
          margin: 0 auto;
        }
        .process-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 32px 24px;
          position: relative;
          transition: background 0.3s ease;
        }
        .process-card:hover {
          background: rgba(0,147,76,0.15);
        }

        /* Why us grid */
        .whyus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 1140px;
          margin: 0 auto;
        }
        .whyus-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 28px 24px;
          border: 1px solid #e8edf4;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .whyus-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.07);
          border-color: #00934c;
        }

        /* Industries row */
        .industries-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          max-width: 1140px;
          margin: 0 auto;
        }

        /* What we do split */
        .whatwedo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          max-width: 1140px;
          margin: 0 auto;
        }
        .whatwedo-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 16px;
        }

        /* checklist */
        .checklist { list-style: none; margin: 0; padding: 0; }
        .checklist li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 14.5px;
          color: #444;
          line-height: 1.65;
          margin-bottom: 14px;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .overview-grid, .whatwedo-grid { grid-template-columns: 1fr; gap: 40px; }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .whyus-grid { grid-template-columns: 1fr; }
          .ms-section, .ms-section-grey, .ms-section-dark { padding: 60px 6%; }
          .whatwedo-img { height: 300px; }
        }
        @media (max-width: 580px) {
          .ms-hero { height: 200px; }
          .process-grid { grid-template-columns: 1fr; }
          .ms-section, .ms-section-grey, .ms-section-dark { padding: 48px 5%; }
          .stacked-imgs img:first-child { height: 200px; }
          .stacked-imgs img:not(:first-child) { height: 140px; }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="ms-hero">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-bg-7.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.70) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#00934c', zIndex: 2 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(2rem, 6vw, 3.8rem)', color: '#fff', letterSpacing: '-1px', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            MINERAL SAMPLING
          </h1>
        </motion.div>
      </section>

      {/* ─── 2. OVERVIEW ─── */}
      <section className="ms-section">
        <div className="overview-grid">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Mineral Sampling
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', color: '#1e3a8a', lineHeight: 1.2, marginBottom: 0, letterSpacing: '-0.3px' }}>
              Accurate Sample Collection<br />at Every Stage
            </h2>
            <div style={{ width: '42px', height: '3px', background: '#00934c', margin: '18px 0 22px' }} />
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              Mineral sampling is a critical first step in quality assurance — and getting it right requires experience, precision, and adherence to globally accepted standards. CMIC's sampling team operates across mine heads, stockyards, railway sidings, and port locations throughout India.
            </p>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              Every sample collected by our inspectors follows strict chain-of-custody protocols as per <strong style={{ color: '#1a1a1a' }}>ASTM International</strong> and <strong style={{ color: '#1a1a1a' }}>Indian Standard (IS) methodologies</strong> — ensuring that the sample is truly representative of the cargo or lot being evaluated.
            </p>

            {/* Why Choose us inline */}
            <h3 style={{ ...oswald, fontWeight: 600, fontSize: '1.15rem', color: '#1e3a8a', letterSpacing: '0.3px', marginBottom: '16px' }}>
              Why Choose CMIC for Mineral Sampling?
            </h3>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85 }}>
              As one of India's professionally managed third-party inspection agencies, our teams are deployed at major coal and mineral corridors — giving clients real-time, unbiased data to support procurement, dispatch, and compliance decisions.
            </p>
          </motion.div>

          {/* Stacked images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stacked-imgs"
          >
            <img src="/services/smp1.jpg" alt="Mineral sampling at mine head" />
            <img src="/services/smp2.webp" alt="Stockyard sample collection" />
            <img src="/services/smp3.jpeg" alt="Sample preparation" />
          </motion.div>

        </div>
      </section>

      {/* ─── 3. WHAT WE DO ─── */}
      <section className="ms-section-grey">
        <div className="whatwedo-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Our Scope
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', color: '#1e3a8a', lineHeight: 1.2, marginBottom: 0, letterSpacing: '-0.3px' }}>
              What We Do in<br />Mineral Sampling
            </h2>
            <div style={{ width: '42px', height: '3px', background: '#00934c', margin: '18px 0 28px' }} />

            <ul className="checklist">
              {whatWeDo.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} color="#00934c" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: '#00934c', color: '#fff',
                padding: '12px 28px', borderRadius: '100px',
                fontFamily: "'Oswald', sans-serif", fontWeight: 600,
                fontSize: '13px', letterSpacing: '1.5px', textTransform: 'uppercase',
                textDecoration: 'none', marginTop: '28px',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#007a3e'}
              onMouseLeave={e => e.currentTarget.style.background = '#00934c'}
            >
              Request Sampling Quote <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/services/smp4.jpeg" alt="Field sampling activity" className="whatwedo-img" />
          </motion.div>

        </div>
      </section>

      {/* ─── 5. COMPREHENSIVE SCOPE ─── */}
      <section className="ms-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '1140px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: '#1e3a8a', letterSpacing: '-0.3px', marginBottom: '12px' }}>
              Comprehensive{' '}
              <span style={{ color: '#00934c', textDecoration: 'underline', textDecorationColor: '#00934c', textUnderlineOffset: '6px' }}>
                Mineral Sampling
              </span>{' '}
              Scope
            </h2>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#666', maxWidth: '680px', margin: '0 auto' }}>
              CMIC offers sampling services across all major mineral and coal types — ensuring precise, representative results that our clients can rely on.
            </p>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <p style={{ ...nunito, fontWeight: 700, fontSize: '14px', color: '#1e3a8a', marginBottom: '20px' }}>Our sampling expertise covers:</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px 32px' }}>
            {[
              'Steam / Non-Coking Coal',
              'Coking Coal & Coke',
              'Iron Ore & Iron Ore Fines',
              'Limestone & Dolomite',
              'Bauxite & Aluminium Ore',
              'Manganese Ore',
              'Chromite Ore',
              'Critical Minerals (Lithium, Cobalt, etc.)',
              'Fly Ash & Bottom Ash',
              'Pet Coke',
              'Coal Washery Products',
              'Minerals at Port / Rail / Road',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={16} color="#00934c" strokeWidth={2} style={{ flexShrink: 0 }} />
                <span style={{ ...nunito, fontSize: '14px', color: '#444' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── 8. CTA ─── */}
      <CTASection />
    </div>
  );
}