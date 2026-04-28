'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Users,
  ClipboardCheck,
  Scale,
  ShieldCheck,
  Eye,
  FileText,
  Truck,
  BarChart2,
} from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/Cta';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

/* ─── Data ───────────────────────────────────────────────── */
const whatWeDo = [
  'Joint sampling at loading points with buyer & seller representatives',
  'Witnessing of third-party sampling and preparation activities',
  'Comprehensive inspection at loading and unloading points',
  'Weighment witnessing and wagon-wise quantity verification',
  'Compliance checks against contract specifications and tolerances',
  'Dispatch and receipt inspection for road, rail, and port consignments',
];

const process = [
  {
    num: '01',
    icon: Users,
    title: 'Mobilisation',
    desc: 'Our qualified inspector is deployed to the agreed location — mine head, siding, port, or plant — with all necessary tools and documentation.',
  },
  {
    num: '02',
    icon: Eye,
    title: 'Witnessing & Sampling',
    desc: 'The inspector witnesses and participates in the joint sampling process alongside buyer and seller representatives, ensuring procedural compliance.',
  },
  {
    num: '03',
    icon: Scale,
    title: 'Quantity & Quality Check',
    desc: 'Weighment, size, and visual inspection are conducted at loading or unloading points. Any discrepancies are documented in real time.',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Inspection Certificate',
    desc: 'A detailed, signed inspection report and certificate is issued covering quantity, quality observations, and compliance status for all parties.',
  },
];

const inspectionTypes = [
  {
    icon: Truck,
    title: 'Loading Point Inspection',
    desc: 'On-site inspection at mine heads, stockyards, and railway sidings during loading — verifying quantity, quality, and proper wagon filling as per contract.',
  },
  {
    icon: BarChart2,
    title: 'Unloading Point Inspection',
    desc: 'Receipt-side inspection at power plants, steel mills, ports, and industrial consumers — reconciling dispatched vs received quantity and quality.',
  },
  {
    icon: ClipboardCheck,
    title: 'Joint Sampling & Witnessing',
    desc: 'Participating in and witnessing third-party or bilateral sampling activities, ensuring chain-of-custody and representativeness of samples taken.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Compliance Verification',
    desc: 'Cross-checking lab results against contractual quality specifications — GCV, ash, moisture, sulphur — and certifying compliance or deviation.',
  },
];

const whyUs = [
  { title: 'Meticulous & Methodical', desc: 'Every inspection follows a documented checklist — nothing is left to chance. Our structured approach catches discrepancies before they become disputes.' },
  { title: 'Neutral Third-Party Standing', desc: 'CMIC holds no commercial interest in the consignment outcome, making our inspection certificates accepted and trusted by all contracting parties.' },
  { title: 'Experienced Inspectors', desc: 'Our field inspectors bring hands-on experience across Coal India subsidiaries, private mines, ports, and industrial consumers across India.' },
  { title: 'Comprehensive Documentation', desc: 'Every inspection produces a detailed, signed report — inspection certificates, photo evidence, quantity statements, and quality observations in one package.' },
];

const clientTypes = [
  'Coal & Power Producers',
  'Steel & Iron Industries',
  'Cement Manufacturers',
  'Commodity Traders',
  'Mining Companies',
  'Government & PSUs',
  'Port & Logistics Operators',
  'Industrial End-Consumers',
  'Financial Institutions',
  'Export / Import Houses',
  'Coal India Subsidiaries',
  'Private Captive Consumers',
];

/* ─── Component ──────────────────────────────────────────── */
export default function JointSamplingInspectionPage() {
  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* Hero */
        .js-hero {
          position: relative;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Section paddings */
        .js-section      { padding: 80px 8%; }
        .js-section-grey { padding: 80px 8%; background: #f7f9fc; }
        .js-section-dark { padding: 80px 8%; background: #1e3a8a; }

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

        /* Inspection type cards */
        .types-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 1140px;
          margin: 0 auto;
        }
        .type-card {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 28px 24px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
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

        /* Clients scope grid */
        .clients-grid {
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
          .whyus-grid, .types-grid { grid-template-columns: 1fr; }
          .js-section, .js-section-grey, .js-section-dark { padding: 60px 6%; }
          .whatwedo-img { height: 300px; }
          .clients-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .js-hero { height: 200px; }
          .process-grid { grid-template-columns: 1fr; }
          .js-section, .js-section-grey, .js-section-dark { padding: 48px 5%; }
          .stacked-imgs img:first-child { height: 200px; }
          .stacked-imgs img:not(:first-child) { height: 140px; }
          .clients-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="js-hero">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-bg-6.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.70) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#00934c', zIndex: 2 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(2rem, 6vw, 3.8rem)', color: '#fff', letterSpacing: '-1px', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            JOINT SAMPLING & INSPECTION
          </h1>
        </motion.div>
      </section>

      {/* ─── 2. OVERVIEW ─── */}
      <section className="js-section">
        <div className="overview-grid">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Joint Sampling & Inspection
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', color: '#1e3a8a', lineHeight: 1.2, marginBottom: 0, letterSpacing: '-0.3px' }}>
              Meticulous Inspection at<br />Every Transfer Point
            </h2>
            <div style={{ width: '42px', height: '3px', background: '#00934c', margin: '18px 0 22px' }} />
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              When two parties transact minerals, the integrity of the quality and quantity determination must be beyond dispute. CMIC specialises in joint sampling, witnessing, and inspection services — deploying experienced inspectors to loading and unloading points to ensure every evaluation is thorough, unbiased, and compliant with contract terms.
            </p>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              Our <strong style={{ color: '#1a1a1a' }}>meticulous approach</strong> ensures comprehensive evaluations at various stages of the mineral supply chain — from mine head loading to consumer unloading — guaranteeing the highest standards of quality compliance and giving both buyers and sellers a trusted, independent assessment.
            </p>

            <h3 style={{ ...oswald, fontWeight: 600, fontSize: '1.15rem', color: '#1e3a8a', letterSpacing: '0.3px', marginBottom: '16px' }}>
              Why Choose CMIC for Joint Inspection?
            </h3>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85 }}>
              Our inspectors are seasoned professionals deployed across major coal corridors and mineral handling facilities throughout India — delivering real-time, on-ground visibility that protects your commercial interests at every consignment.
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
            <img src="/services/jsi1.jpeg" alt="Joint sampling at loading point" />
            <img src="/services/jsi2.jpeg" alt="Inspector witnessing wagon loading" />
            <img src="/services/jsi3.jpeg" alt="Quality inspection at unloading" />
          </motion.div>

        </div>
      </section>

      {/* ─── 3. INSPECTION TYPES ─── */}
      <section className="js-section-grey">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '1140px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Types of Inspection
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: '#1e3a8a', letterSpacing: '-0.3px', marginBottom: '12px' }}>
              What We{' '}
              <span style={{ color: '#00934c', textDecoration: 'underline', textDecorationColor: '#00934c', textUnderlineOffset: '6px' }}>
                Inspect
              </span>
            </h2>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#666', maxWidth: '680px', margin: '0 auto' }}>
              CMIC's inspection services cover all critical points in the mineral logistics chain — ensuring quality and quantity integrity from source to destination.
            </p>
          </div>

          <div className="types-grid">
            {inspectionTypes.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="type-card"
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
      <section className="js-section">
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
              What We Do in<br />Joint Sampling & Inspection
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
              Request Inspection Quote <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/services/jsi4.jpeg" alt="Inspector at site during joint sampling" className="whatwedo-img" />
          </motion.div>

        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </div>
  );
}