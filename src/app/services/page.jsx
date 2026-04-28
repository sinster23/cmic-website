'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/home/Cta';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

/* ─── All Services Data ──────────────────────────────────── */
const allServices = [
  {
    slug: 'mineral-sampling',
    id: 'mineral-sampling',
    titleBold: 'Mineral',
    titleLight: ' Sampling',
    desc: 'Our experienced team collects mineral samples directly from mine heads, stockyards, and railway sidings, adhering to strict protocols to maintain sample integrity and representativeness. Every sample is handled with precision to ensure the data you receive is accurate and reliable.',
    image: '/services/serv1.jpeg',
    readMore: true,
  },
  {
    slug: 'analysis',
    id: 'analysis',
    titleBold: 'Analysis',
    titleLight: '',
    desc: 'We facilitate comprehensive mineral analysis utilizing ASTM and Indian Standard (IS) methods in association with NABL-accredited laboratories. Parameters covered include Total Moisture, Proximate Analysis, Ultimate Analysis, and Gross Calorific Value — delivering state-of-the-art, accurate results.',
    image: '/services/serv2.jpeg',
    readMore: true,
  },
  {
    slug: 'joint-sampling-inspection',
    id: 'joint-sampling-inspection',
    titleBold: 'Joint Sampling',
    titleLight: ' & Inspection',
    desc: 'We specialize in joint sampling, witnessing, and inspection services for the minerals industry. Our meticulous approach ensures comprehensive evaluations at loading and unloading points, guaranteeing the highest standards of quality and compliance with exceptional, detailed results for every client.',
    image: '/services/serv3.jpeg',
    readMore: true,
  },
  {
    slug: 'liaisoning-supervision',
    id: 'liaisoning-supervision',
    titleBold: 'Liaisoning',
    titleLight: ' & Supervision',
    desc: 'We execute liaisoning and supervision contracts with the utmost satisfaction of our clients. Our highly qualified professionals supervise the complete work including loading and unloading — handling Coal India Limited subsidiaries (BCCL, CCL, ECL, SECL, MCL, NCL, WCL) and managing Rail & Road lifting programs.',
    image: '/services/serv4.jpeg',
    readMore: true,
  },
  {
    slug: null,
    id: 'tarpaulin',
    titleBold: 'Tarpaulin',
    titleLight: ' Covering & Uncovering',
    desc: 'We also provide covering and uncovering of rakes on the top of wagons at different sidings and ports using good quality laminated tarpaulin with 100% waterproofing. This ensures your coal cargo reaches its destination fully protected from weather and external elements.',
    image: '/services/serv5.jpeg',
    readMore: false,
  },
  {
    slug: null,
    id: 'escorting',
    titleBold: 'Escorting',
    titleLight: ' Service',
    desc: 'We have a group of trained and experienced security staff and guards who shoulder the full responsibility of protecting coal rakes — without burdening you on statutory obligations pertaining to labour laws. Our personnel ensure safe and secure transit at every stage of the journey.',
    image: '/services/serv6.jpeg',
    readMore: false,
  },
  {
    slug: null,
    id: 'manpower',
    titleBold: 'Manpower',
    titleLight: ' Service',
    desc: 'Our company possesses the expertise and capabilities required to collaborate with your company in establishing a robust and reliable manpower supply chain. Our reputation for delivering high-quality manpower services aligns with your goals and objectives — from skilled supervisors to field operatives.',
    image: '/services/serv7.jpeg',
    readMore: false,
  },
];

/* ─── Component ──────────────────────────────────────────── */
export default function ServicesPage() {
  // Handle hash-based smooth scrolling on mount and hash change
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      // Small delay to ensure the DOM has rendered
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navbarHeight = 120; // accounts for top bar + navbar height
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    };

    // Scroll on initial load if hash present
    scrollToHash();

    // Also listen for hash changes (e.g. clicking hash links on same page)
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .srv-hero {
          position: relative;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .srv-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          max-width: 1140px;
          margin: 0 auto;
        }
        .srv-row.reverse {
          direction: rtl;
        }
        .srv-row.reverse > * {
          direction: ltr;
        }

        .srv-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }
        .srv-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
          border-radius: 16px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #00934c;
          color: #fff;
          border: none;
          padding: 12px 28px;
          border-radius: 100px;
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease;
          margin-top: 24px;
        }
        .read-more-btn:hover {
          background: #007a3e;
          transform: translateX(4px);
        }

        .srv-section {
          padding: 72px 8%;
          /* scroll-margin-top offsets the fixed navbar so the section
             lands in view when scrolled to via anchor */
          scroll-margin-top: 120px;
        }
        .srv-section:nth-child(even) {
          background: #f7f9fc;
        }
        .srv-section:nth-child(odd) {
          background: #fff;
        }

        .support-label-row {
          max-width: 1140px;
          margin: 0 auto 0;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0 8% 0;
        }

        @media (max-width: 860px) {
          .srv-row,
          .srv-row.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 32px;
          }
          .srv-img { height: 280px; }
          .srv-section { padding: 52px 6%; }
        }
        @media (max-width: 520px) {
          .srv-hero { height: 200px; }
          .srv-img { height: 220px; }
          .srv-section { padding: 44px 5%; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="srv-hero">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-bg-4.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.68) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#00934c', zIndex: 2 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#fff', letterSpacing: '-1px', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            OUR SERVICES
          </h1>
          <p style={{ ...nunito, fontWeight: 600, fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginTop: '14px', letterSpacing: '0.5px' }}>
            Precision Inspection · Quality Monitoring · Transparent Reporting
          </p>
        </motion.div>
      </section>

      {/* ─── SERVICE ROWS ─── */}
      {allServices.map(({ slug, id, titleBold, titleLight, desc, image, readMore }, i) => {
        const isReverse = i % 2 !== 0;
        const showSupportHeader = i === 4;

        return (
          <React.Fragment key={id}>
            {showSupportHeader && (
              <div style={{ background: '#ffffff', padding: '56px 8% 0' }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
                  <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Additional Offerings
                  </p>
                  <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#1e3a8a', letterSpacing: '-0.3px', margin: 0 }}>
                    Support Services
                  </h2>
                </div>
              </div>
            )}

            {/* id placed here so the anchor lands at the section top */}
            <section
              id={id}
              className="srv-section"
              style={{ paddingTop: showSupportHeader ? '40px' : undefined }}
            >
              <div className={`srv-row${isReverse ? ' reverse' : ''}`}>

                {/* Image */}
                <motion.div
                  className="srv-img-wrap"
                  initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={image} alt={titleBold + titleLight} className="srv-img" />
                  <div style={{
                    position: 'absolute', bottom: 0,
                    left: isReverse ? 'auto' : 0,
                    right: isReverse ? 0 : 'auto',
                    width: '5px', height: '72px',
                    background: '#00934c',
                  }} />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', color: '#1e3a8a', lineHeight: 1.2, marginBottom: '16px', letterSpacing: '-0.3px' }}>
                    <strong style={{ color: '#1e3a8a' }}>{titleBold}</strong>
                    <span style={{ fontWeight: 500, color: '#6b7280' }}>{titleLight}</span>
                  </h2>

                  <p style={{ ...nunito, fontWeight: 400, fontSize: '15px', color: '#555', lineHeight: 1.85, margin: 0 }}>
                    {desc}
                  </p>

                  {readMore && (
                    <Link href={`/services/${slug}`} className="read-more-btn">
                      Read More <ArrowRight size={14} strokeWidth={2.5} />
                    </Link>
                  )}
                </motion.div>

              </div>
            </section>
          </React.Fragment>
        );
      })}

      {/* ─── CTA ─── */}
      <CTASection />
    </div>
  );
}