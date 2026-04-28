'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  Handshake,
  Train,
  Truck,
  ClipboardList,
  ShieldCheck,
  Users,
  FileText,
  BarChart2,
} from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/Cta';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

/* ─── Data ───────────────────────────────────────────────── */
const whatWeDo = [
  'Liaisoning with Coal India Limited subsidiaries — BCCL, CCL, ECL, SECL, MCL, NCL, WCL',
  'Submission of Programme against monthly linkage allotments',
  'Getting allotment & supply for coal wagons through DRM Office',
  'Managing Lifting Coal Permit for Rail & Road via DMO Office',
  'Supervision of complete loading and unloading operations',
  'Witnessing of weighment and wagon-wise quantity verification',
  'Supervision of rake movement — Point to Point monitoring',
  'Handling E-Auction coal and Iron Ore movements',
];

const process = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Programme Submission',
    desc: 'We submit lifting programmes against your monthly linkage allotment — ensuring your requirements are registered accurately with the concerned Coal India subsidiary.',
  },
  {
    num: '02',
    icon: Train,
    title: 'Wagon Allotment',
    desc: 'Our team liaises with the DRM Office to secure coal wagon allotments and supply schedules — coordinating rail logistics to meet your dispatch timelines.',
  },
  {
    num: '03',
    icon: Truck,
    title: 'Loading Supervision',
    desc: 'Experienced supervisory personnel are deployed at collieries and loading points to ensure proper loading of wagons, witnessing of weighment, and compliance with contract terms.',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Reporting & Closure',
    desc: 'Detailed supervision reports, quantity statements, and dispatch records are issued — giving you complete visibility over every rake and consignment handled.',
  },
];

const liaisonAreas = [
  {
    icon: Handshake,
    title: 'Coal India Subsidiary Liaison',
    desc: 'We handle all liaison activities with BCCL, CCL, ECL, SECL, MCL, NCL, and WCL — navigating government processes so you can focus on your core business.',
  },
  {
    icon: Train,
    title: 'Rail Lifting Programme',
    desc: 'Programme submission, wagon allotment via DRM Office, and Coal Lifting Permit management for Rail — covering the complete rail logistics lifecycle.',
  },
  {
    icon: Truck,
    title: 'Road Lifting Programme',
    desc: 'Coordination with DMO Office for road lifting permits and transport authorisation — ensuring smooth, compliant road movement of your coal consignments.',
  },
  {
    icon: BarChart2,
    title: 'E-Auction & Iron Ore Handling',
    desc: 'We take all responsibilities involved in E-Auction coal movements and Iron Ore transportation — from mine to different destinations across India.',
  },
];

const supervisionScope = [
  'Supervision at loading points — collieries & mine heads',
  'Supervision at unloading points — power plants, steel mills, consumers',
  'Point-to-Point rake movement monitoring',
  'Witnessing of weighment and tare weight verification',
  'Quality monitoring during loading operations',
  'Documentation of wagon-wise quantity and dispatch details',
  'Liaison with railway officials at sidings and yards',
  'Reporting of shortages, damages, or discrepancies in real time',
];

const coalIndiaSubsidiaries = [
  { code: 'BCCL', full: 'Bharat Coking Coal Limited' },
  { code: 'CCL',  full: 'Central Coalfields Limited' },
  { code: 'ECL',  full: 'Eastern Coalfields Limited' },
  { code: 'SECL', full: 'South Eastern Coalfields Limited' },
  { code: 'MCL',  full: 'Mahanadi Coalfields Limited' },
  { code: 'NCL',  full: 'Northern Coalfields Limited' },
  { code: 'WCL',  full: 'Western Coalfields Limited' },
];

const whyUs = [
  { title: 'Experienced Since 2023', desc: 'Executing liaisoning and supervision contracts since 2023, CMIC has built strong rapport with authorities at all levels across Coal India subsidiaries and government offices.' },
  { title: 'End-to-End Responsibility', desc: 'We take full responsibility for all activities — from moving coal and iron ore from mines to destination, including E-Auction coal and Rail & Road lifting programmes.' },
  { title: 'Qualified Supervisory Team', desc: 'Our highly qualified supervisory personnel are deployed at collieries and loading points to ensure proper loading, weighment witnessing, and quality compliance.' },
  { title: 'Client-First Execution', desc: 'We execute all liaisoning and supervision contracts to the utmost satisfaction of our clients — providing access to the desired quality and quantity of products.' },
];

/* ─── Component ──────────────────────────────────────────── */
export default function LiaisoningSupervisionPage() {
  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .ls-hero {
          position: relative;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .ls-section      { padding: 80px 8%; }
        .ls-section-grey { padding: 80px 8%; background: #f7f9fc; }
        .ls-section-dark { padding: 80px 8%; background: #1e3a8a; }

        .overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: flex-start;
          max-width: 1140px;
          margin: 0 auto;
        }

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

        /* Coal India subsidiaries table */
        .subsidiary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 1140px;
          margin: 0 auto;
        }
        .subsidiary-card {
          padding: 20px 16px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          text-align: center;
          transition: background 0.3s ease;
        }
        .subsidiary-card:hover {
          background: rgba(0,147,76,0.18);
        }

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

        .scope-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 48px;
        }

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

        @media (max-width: 960px) {
          .overview-grid, .whatwedo-grid { grid-template-columns: 1fr; gap: 40px; }
          .process-grid { grid-template-columns: repeat(2, 1fr); }
          .whyus-grid, .types-grid { grid-template-columns: 1fr; }
          .ls-section, .ls-section-grey, .ls-section-dark { padding: 60px 6%; }
          .whatwedo-img { height: 300px; }
          .subsidiary-grid { grid-template-columns: repeat(3, 1fr); }
          .scope-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 580px) {
          .ls-hero { height: 200px; }
          .process-grid { grid-template-columns: 1fr; }
          .ls-section, .ls-section-grey, .ls-section-dark { padding: 48px 5%; }
          .stacked-imgs img:first-child { height: 200px; }
          .stacked-imgs img:not(:first-child) { height: 140px; }
          .subsidiary-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section className="ls-hero">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-bg-8.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.70) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#00934c', zIndex: 2 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(2rem, 6vw, 3.8rem)', color: '#fff', letterSpacing: '-1px', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            LIAISONING & SUPERVISION
          </h1>
        </motion.div>
      </section>

      {/* ─── 2. OVERVIEW ─── */}
      <section className="ls-section">
        <div className="overview-grid">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Liaisoning & Supervision
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', color: '#1e3a8a', lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: 0 }}>
              End-to-End Liaisoning<br />with Complete Supervision
            </h2>
            <div style={{ width: '42px', height: '3px', background: '#00934c', margin: '18px 0 22px' }} />
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '18px' }}>
              Navigating India's complex coal procurement and logistics system requires deep institutional knowledge and trusted relationships with government bodies. CMIC has been executing liaisoning and supervision contracts since 2023 — to the utmost satisfaction of our clients.
            </p>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, marginBottom: '24px' }}>
              Our highly qualified professionals supervise the <strong style={{ color: '#1a1a1a' }}>complete work including loading and unloading</strong> — handling Coal India Limited subsidiaries and managing <strong style={{ color: '#1a1a1a' }}>Rail & Road lifting programmes</strong> with harmonious liaison at every level of authority.
            </p>

            <h3 style={{ ...oswald, fontWeight: 600, fontSize: '1.15rem', color: '#1e3a8a', letterSpacing: '0.3px', marginBottom: '16px' }}>
              Why Choose CMIC for Liaisoning?
            </h3>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85 }}>
              We take all responsibilities involved in moving coal and iron ore from mines to different destinations — including E-Auction coal — giving our clients seamless access to the desired quality and quantity of products without the administrative burden.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="stacked-imgs"
          >
            <img src="/services/ls1.jpg" alt="Liaisoning with coal authority" />
            <img src="/services/ls2.jpeg" alt="Coal rake supervision at siding" />
            <img src="/services/ls3.jpeg" alt="Loading supervision at colliery" />
          </motion.div>

        </div>
      </section>

      {/* ─── 3. LIAISON AREAS ─── */}
      <section className="ls-section-grey">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '1140px', margin: '0 auto' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Areas of Liaison
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: '#1e3a8a', letterSpacing: '-0.3px', marginBottom: '12px' }}>
              Where We{' '}
              <span style={{ color: '#00934c', textDecoration: 'underline', textDecorationColor: '#00934c', textUnderlineOffset: '6px' }}>
                Liaise
              </span>
            </h2>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#666', maxWidth: '680px', margin: '0 auto' }}>
              Our liaisoning expertise spans rail, road, and government channels — covering all the key touchpoints in India's coal and mineral supply chain.
            </p>
          </div>

          <div className="types-grid">
            {liaisonAreas.map(({ icon: Icon, title, desc }) => (
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
      <section className="ls-section">
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
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', color: '#1e3a8a', lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: 0 }}>
              What We Do in<br />Liaisoning & Supervision
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
              Enquire About Liaisoning <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/services/ls4.webp" alt="Supervisor overseeing coal loading operations" className="whatwedo-img" />
          </motion.div>

        </div>
      </section>

      {/* ─── 7. SUPERVISION SCOPE ─── */}
      <section className="ls-section-grey">
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
                Supervision
              </span>{' '}
              Scope
            </h2>
            <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#666', maxWidth: '680px', margin: '0 auto' }}>
              Our supervisory personnel provide complete on-ground coverage — from the mine to the consumer's gate.
            </p>
          </div>

          <div className="scope-grid" style={{ maxWidth: '1140px', margin: '0 auto' }}>
            {supervisionScope.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
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