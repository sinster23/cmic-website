'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import CTASection from '@/components/home/Cta';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

/* ─── Gallery Data ───────────────────────────────────────────
   19 images distributed across 4 operational categories.
   Tall/wide flags create the asymmetric field-report rhythm. */
const galleryItems = [
  { n: 1,  file: 'gal1.png',  cat: 'sampling',    label: 'Night Sample Collection',    size: 'wide' },
  { n: 2,  file: 'gal2.png',  cat: 'sampling',    label: 'Manual Sample Turning',      size: 'tall' },
  { n: 3,  file: 'gal3.png',  cat: 'analysis',    label: 'Laboratory Testing',         size: 'normal' },
  { n: 4,  file: 'gal4.png',  cat: 'supervision', label: 'Stockyard Overview',         size: 'normal' },
  { n: 5,  file: 'gal5.png',  cat: 'sampling',    label: 'Wagon Top Sampling',         size: 'normal' },
  { n: 6,  file: 'gal6.png',  cat: 'inspection',  label: 'Joint Witnessing',           size: 'wide' },
  { n: 7,  file: 'gal7.png',  cat: 'supervision', label: 'Liaison Site Visit',         size: 'normal' },
  { n: 8,  file: 'gal8.png',  cat: 'sampling',    label: 'Conveyor Belt Sampling',     size: 'tall' },
  { n: 9,  file: 'gal9.png',  cat: 'sampling',    label: 'Loader-Assisted Sampling',   size: 'normal' },
  { n: 10, file: 'gal10.png', cat: 'inspection',  label: 'Stockyard Site Check',       size: 'normal' },
  { n: 11, file: 'gal11.png', cat: 'sampling',    label: 'Return Rake Sampling',       size: 'wide' },
  { n: 12, file: 'gal12.png', cat: 'inspection',  label: 'Site Inspection Team',       size: 'normal' },
  { n: 13, file: 'gal13.png', cat: 'sampling',    label: 'Rake Top Sampling',          size: 'normal' },
  { n: 14, file: 'gal14.png', cat: 'inspection',  label: 'Process Line Inspection',    size: 'tall' },
  { n: 15, file: 'gal15.png', cat: 'analysis',    label: 'XRF Analysis',               size: 'normal' },
  { n: 16, file: 'gal16.png', cat: 'analysis',    label: 'Workshop Equipment Testing', size: 'normal' },
  { n: 17, file: 'gal17.png', cat: 'sampling',    label: 'Stockpile Sample Collection',size: 'wide' },
  { n: 18, file: 'gal18.png', cat: 'supervision', label: 'Site Visit & Liaison',       size: 'normal' },
  { n: 19, file: 'gal19.png', cat: 'analysis',    label: 'Laboratory Cross-Check',     size: 'normal' },
];

const filters = [
  { key: 'all',         label: 'All Work' },
  { key: 'sampling',    label: 'Sampling' },
  { key: 'analysis',    label: 'Analysis' },
  { key: 'inspection',  label: 'Inspection' },
  { key: 'supervision', label: 'Supervision' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibleItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.cat === activeFilter);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % visibleItems.length));
  }, [visibleItems.length]);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length));
  }, [visibleItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  // Reset lightbox if the active filter changes the visible set
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeFilter]);

  const current = lightboxIndex !== null ? visibleItems[lightboxIndex] : null;

  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .gal-hero {
          position: relative;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .gal-filter-bar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: #fff;
          border-bottom: 1px solid #eef1f5;
          padding: 20px 8%;
        }
        .gal-filter-row {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .gal-filter-pill {
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 10px 20px;
          border-radius: 100px;
          border: 1.5px solid #e2e6ec;
          background: #fff;
          color: #555;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .gal-filter-pill:hover {
          border-color: #00934c;
          color: #00934c;
        }
        .gal-filter-pill.active {
          background: #00934c;
          border-color: #00934c;
          color: #fff;
        }

        .gal-grid-section {
          padding: 56px 8% 88px;
          background: #f7f9fc;
        }
        .gal-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 200px;
          gap: 18px;
        }
        .gal-tile {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          background: #e8ebf0;
        }
        .gal-tile.wide { grid-column: span 2; }
        .gal-tile.tall { grid-row: span 2; }

        .gal-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gal-tile:hover img {
          transform: scale(1.07);
        }

        .gal-tile-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10,20,15,0) 45%, rgba(8,16,12,0.86) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 16px 18px;
        }
        .gal-tile:hover .gal-tile-overlay {
          opacity: 1;
        }
        .gal-tile-index {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 700;
          font-size: 10.5px;
          letter-spacing: 2px;
          color: #6be3a4;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .gal-tile-label {
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #fff;
          letter-spacing: 0.3px;
        }
        .gal-zoom-icon {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(-6px);
          transition: all 0.25s ease;
        }
        .gal-tile:hover .gal-zoom-icon {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Lightbox ── */
        .gal-lightbox {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(10, 14, 12, 0.94);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 80px;
        }
        .gal-lightbox-img-wrap {
          position: relative;
          max-width: 1100px;
          max-height: 82vh;
          width: 100%;
        }
        .gal-lightbox-img-wrap img {
          width: 100%;
          height: 82vh;
          object-fit: contain;
          display: block;
        }
        .gal-lightbox-caption {
          text-align: center;
          margin-top: 18px;
        }
        .gal-lightbox-close,
        .gal-lightbox-nav {
          position: absolute;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .gal-lightbox-close:hover,
        .gal-lightbox-nav:hover {
          background: #00934c;
          border-color: #00934c;
        }
        .gal-lightbox-close { top: 24px; right: 32px; }
        .gal-lightbox-nav.prev { left: 24px; top: 50%; transform: translateY(-50%); }
        .gal-lightbox-nav.next { right: 24px; top: 50%; transform: translateY(-50%); }

        /* ── Responsive ── */
        @media (max-width: 980px) {
          .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
          .gal-tile.wide { grid-column: span 2; }
        }
        @media (max-width: 620px) {
          .gal-hero { height: 200px; }
          .gal-filter-bar { padding: 16px 5%; }
          .gal-filter-row { gap: 8px; }
          .gal-filter-pill { padding: 8px 16px; font-size: 11px; }
          .gal-grid-section { padding: 36px 5% 64px; }
          .gal-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 150px; gap: 10px; }
          .gal-tile.wide { grid-column: span 2; }
          .gal-tile.tall { grid-row: span 1; }
          .gal-lightbox { padding: 90px 20px 40px; }
          .gal-lightbox-nav.prev { left: 8px; }
          .gal-lightbox-nav.next { right: 8px; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="gal-hero">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/gallery-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.68) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#00934c', zIndex: 2 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#fff', letterSpacing: '-1px', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            GALLERY
          </h1>
          <p style={{ ...nunito, fontWeight: 600, fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginTop: '14px', letterSpacing: '0.5px' }}>
            Field Sampling · Laboratory Analysis · Site Inspection · Rake Supervision
          </p>
        </motion.div>
      </section>

      {/* ─── FILTER BAR ─── */}
      <div className="gal-filter-bar">
        <div className="gal-filter-row">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`gal-filter-pill${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── GRID ─── */}
      <section className="gal-grid-section">
        <div className="gal-grid">
          {visibleItems.map((item, idx) => (
            <motion.div
              key={item.file}
              className={`gal-tile ${item.size}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (idx % 8) * 0.05 }}
              onClick={() => openLightbox(idx)}
            >
              <img src={`/gallery/${item.file}`} alt={item.label} loading="lazy" />
              <div className="gal-zoom-icon">
                <Maximize2 size={14} color="#1e3a8a" strokeWidth={2.4} />
              </div>
              <div className="gal-tile-overlay">
                <div className="gal-tile-index">Site {String(item.n).padStart(2, '0')}</div>
                <div className="gal-tile-label">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="gal-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <button className="gal-lightbox-close" onClick={closeLightbox} aria-label="Close">
              <X size={20} />
            </button>
            <button
              className="gal-lightbox-nav prev"
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              className="gal-lightbox-nav next"
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              className="gal-lightbox-img-wrap"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={`/gallery/${current.file}`} alt={current.label} />
              <div className="gal-lightbox-caption">
                <div style={{ ...nunito, fontWeight: 700, fontSize: '11px', letterSpacing: '2px', color: '#6be3a4', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Site {String(current.n).padStart(2, '0')} · {filters.find((f) => f.key === current.cat)?.label}
                </div>
                <div style={{ ...oswald, fontWeight: 600, fontSize: '17px', color: '#fff' }}>
                  {current.label}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── CTA ─── */}
      <CTASection />
    </div>
  );
}