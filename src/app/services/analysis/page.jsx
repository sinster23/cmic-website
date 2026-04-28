'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Thermometer,
  Layers,
  Zap,
  FlaskConical,
  FileText,
  ClipboardCheck,
  BarChart2,
} from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/Cta';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

/* ─── Data ───────────────────────────────────────────────── */
const whatWeDo = [
  'Total Moisture determination as per ASTM / IS standards',
  'Proximate Analysis — moisture, ash, volatile matter & fixed carbon',
  'Ultimate Analysis — C, H, N, S, O elemental breakdown',
  'Gross Calorific Value (GCV) testing using bomb calorimeter',
  'Size analysis and sieve testing of mineral samples',
  'Testing in association with NABL-accredited laboratories',
];

const process = [
  {
    num: '01',
    icon: FlaskConical,
    title: 'Sample Receipt',
    desc: 'Prepared samples arrive at our associated NABL-accredited laboratory with full chain-of-custody documentation and unique identification.',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Sample Conditioning',
    desc: 'Samples are air-dried, crushed, and divided as per ASTM D2013 / IS 436 procedures to prepare representative sub-samples for each test.',
  },
  {
    num: '03',
    icon: BarChart2,
    title: 'Instrumental Analysis',
    desc: 'Each parameter is tested using state-of-the-art equipment — bomb calorimeter, TGA, CHN-S analyser — following the specified test method.',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Certified Report',
    desc: 'A comprehensive test report is issued citing all parameters, reference methods, test date, and laboratory NABL accreditation details.',
  },
];

const analysisParameters = [
  {
    icon: Thermometer,
    title: 'Total Moisture',
    desc: 'Determined by two-stage air-drying method as per IS 1350 / ASTM D3302. Critical for energy value and handling assessment.',
  },
  {
    icon: Layers,
    title: 'Proximate Analysis',
    desc: 'Covers Inherent Moisture, Ash Content, Volatile Matter, and Fixed Carbon — the fundamental characterisation of any solid fuel.',
  },
  {
    icon: ClipboardCheck,
    title: 'Ultimate Analysis',
    desc: 'Elemental determination of Carbon, Hydrogen, Nitrogen, Sulphur, and Oxygen — essential for combustion modelling and emission estimates.',
  },
  {
    icon: Zap,
    title: 'Gross Calorific Value',
    desc: 'Measured using calibrated bomb calorimeter as per ASTM D5865 / IS 1350 Pt-2 — the primary parameter for coal pricing and procurement.',
  },
];

const minerals = [
  'Steam / Non-Coking Coal',
  'Coking Coal & Metallurgical Coke',
  'Iron Ore & Iron Ore Fines',
  'Limestone & Dolomite',
  'Bauxite & Aluminium Ore',
  'Manganese Ore',
  'Chromite Ore',
  'Pet Coke',
  'Fly Ash & Bottom Ash',
  'Coal Washery Products',
  'Lignite & Sub-bituminous Coal',
  'Critical Minerals (Lithium, Cobalt, etc.)',
];

const whyUs = [
  { title: 'NABL-Accredited Labs', desc: 'All testing is performed exclusively through our network of NABL-accredited laboratories, ensuring certified and legally compliant results.' },
  { title: 'ASTM & IS Methods', desc: 'Every test follows ASTM International or Indian Standard methodologies — globally recognised benchmarks for mineral analysis.' },
  { title: 'State-of-the-Art Equipment', desc: 'From bomb calorimeters to CHN-S analysers, our partner labs deploy the latest instruments for precision analysis.' },
  { title: 'Unbiased Third-Party Reports', desc: '100% independent reporting — no commercial interest in the cargo outcome, only accurate data you can rely on.' },
];

/* ─── Component ──────────────────────────────────────────── */
export default function AnalysisPage() {
  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* Hero */
        .an-hero {
          position: relative;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Section paddings */
        .an-section      { padding: 80px 8%; }
        .an-section-grey { padding: 80px 8%; background: #f7f9fc; }
        .an-section-dark { padding: 80px 8%; background: #1e3a8a; }

        /* Overview grid */
        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: flex-start;
          max-width: 1140px;
          margin: 0 auto;
        }

        /* Stacked images */
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

        /* Parameters cards */
        .params-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1140px;
          margin: 0 auto;
        }
        .param-card {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 28px 24px;
        }

        /* Process cards (dark bg) */
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

        /* Minerals scope grid */
        .minerals-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px 32px;
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
          .whyus-grid, .params-grid { grid-template-columns: 1fr; }
          .an-section, .an-section-grey, .an-section-dark { padding: 60px 6%; }
          .whatwedo-img { height: 300px; }
          .minerals-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .an-hero { height: 200px; }
          .process-grid { grid-template-columns: 1fr; }
          .an-section, .an-section-grey, .an-section-dark { padding: 48px 5%; }
          .stacked-imgs img:first-child { height: 200px; }
          .stacked-imgs img:not(:first-child) { height: 140px; }
          .minerals-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="an-hero">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-bg-5.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.70) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#00934c', zIndex: 2 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(2rem, 6vw, 3.8rem)', color: '#fff', letterSpacing: '-1px', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            MINERAL ANALYSIS
          </h1>
        </motion.div>
      </section>

      {/* ─── 2. OVERVIEW ─── */}
      <section className="an-section">
        <div className="overview-grid">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Analysis Services
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', color: '#1e3a8a', lineHeight: 1.2, marginBottom: 0, letterSpacing: '-0.3px' }}>
              Comprehensive Mineral Analysis<br />Through NABL-Accredited Labs
            </h2>
            <div style={{ width: '42px', height: '3px', background: '#00934c', margin: '18px 0 22px' }} />
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              Accurate mineral analysis is the backbone of quality assurance in any coal or mineral supply chain. CMIC facilitates comprehensive mineral analysis using state-of-the-art equipment and methodologies — providing precise, reliable results your procurement and compliance decisions depend on.
            </p>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              All testing is performed in association with <strong style={{ color: '#1a1a1a' }}>NABL-accredited laboratories</strong>, following <strong style={{ color: '#1a1a1a' }}>ASTM International</strong> and <strong style={{ color: '#1a1a1a' }}>Indian Standard (IS) methodologies</strong> — globally recognised benchmarks that guarantee accuracy, repeatability, and regulatory compliance.
            </p>

            <h3 style={{ ...oswald, fontWeight: 600, fontSize: '1.15rem', color: '#1e3a8a', letterSpacing: '0.3px', marginBottom: '16px' }}>
              Why Choose CMIC for Mineral Analysis?
            </h3>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85 }}>
              As a professionally managed third-party inspection company, CMIC delivers unbiased, independent analysis results with no commercial stake in the cargo outcome — giving you data you can truly trust.
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
            <img src="/services/ana1.jpeg" alt="Laboratory mineral analysis" />
            <img src="/services/ana2.webp" alt="NABL accredited lab testing" />
            <img src="/services/ana3.webp" alt="Bomb calorimeter GCV testing" />
          </motion.div>

        </div>
      </section>

      {/* ─── 3. ANALYSIS PARAMETERS ─── */}
      <section className="an-section-grey">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '1140px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Parameters Covered
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: '#1e3a8a', letterSpacing: '-0.3px', marginBottom: '12px' }}>
              What We{' '}
              <span style={{ color: '#00934c', textDecoration: 'underline', textDecorationColor: '#00934c', textUnderlineOffset: '6px' }}>
                Analyse
              </span>
            </h2>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#666', maxWidth: '680px', margin: '0 auto' }}>
              Our mineral analysis covers all critical parameters required for quality assessment, pricing, and compliance reporting.
            </p>
          </div>

          <div className="params-grid">
            {analysisParameters.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="param-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={20} color="#00934c" strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ ...oswald, fontWeight: 600, fontSize: '1.05rem', color: '#1e3a8a', marginBottom: '8px', letterSpacing: '0.2px' }}>
                    {title}
                  </h3>
                  <p style={{ ...nunito, fontWeight: 400, fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── 4. WHAT WE DO ─── */}
      <section className="an-section">
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
              What We Do in<br />Mineral Analysis
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
              Request Analysis Quote <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/services/ana4.jpeg" alt="Laboratory analysis in progress" className="whatwedo-img" />
          </motion.div>

        </div>
      </section>


      {/* ─── 6. MINERALS SCOPE ─── */}
      <section className="an-section-grey">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '1140px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: '#1e3a8a', letterSpacing: '-0.3px', marginBottom: '12px' }}>
              Minerals &{' '}
              <span style={{ color: '#00934c', textDecoration: 'underline', textDecorationColor: '#00934c', textUnderlineOffset: '6px' }}>
                Materials
              </span>{' '}
              We Analyse
            </h2>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#666', maxWidth: '680px', margin: '0 auto' }}>
              CMIC's analysis services span all major coal and mineral types across the Indian and international commodity market.
            </p>
          </div>

          <div className="minerals-grid">
            {minerals.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={16} color="#00934c" strokeWidth={2} style={{ flexShrink: 0 }} />
                <span style={{ ...nunito, fontSize: '14px', color: '#444' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </div>
  );
}