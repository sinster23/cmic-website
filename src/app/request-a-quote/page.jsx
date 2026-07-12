'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Award, FileCheck, Send } from 'lucide-react';

const oswald = { fontFamily: "'Oswald', sans-serif" };
const nunito = { fontFamily: "'Nunito Sans', sans-serif" };

/* Same four points as the homepage Why Choose Us section */
const whyChooseUs = [
  {
    icon: CheckCircle,
    title: 'Client-Focused Approach',
    description: 'We understand client-specific operational requirements and deliver customized inspection and supervision solutions.',
  },
  {
    icon: Shield,
    title: 'Independent & Unbiased Inspection',
    description: 'As a third-party agency, we ensure transparent, impartial, and verifiable inspection reporting.',
  },
  {
    icon: Award,
    title: 'High Accuracy & Reliability',
    description: 'Sampling and inspection are performed with strict procedural control to ensure representative and dependable results.',
  },
  {
    icon: FileCheck,
    title: 'Standards Compliance',
    description: 'All testing and analysis are conducted through NABL-accredited laboratories as per ASTM & IS standards.',
  },
];

const serviceOptions = [
  'Mineral Sampling',
  'Analysis',
  'Joint Sampling & Inspection',
  'Liaisoning & Supervision',
  'Tarpaulin Covering & Uncovering',
  'Escorting Service',
  'Manpower Service',
  'Others',
];

export default function RequestQuotePage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / email service.
    console.log('Quote request:', form);
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#fff', color: '#1a1a1a' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .rq-hero {
          position: relative;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .rq-section {
          padding: 72px 8% 96px;
          background: #f7f9fc;
        }
        .rq-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: start;
        }

        .rq-why-item {
          display: flex;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #e7ebf1;
        }
        .rq-why-item:first-of-type { padding-top: 0; }
        .rq-why-item:last-of-type { border-bottom: none; }
        .rq-why-icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #eaf7f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rq-form-card {
          background: #fff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 28px rgba(20, 35, 60, 0.07);
          border: 1px solid #eef1f5;
        }

        .rq-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        .rq-input,
        .rq-textarea {
          width: 100%;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 14.5px;
          color: #1a1a1a;
          padding: 13px 16px;
          border: 1.5px solid #dde2e9;
          border-radius: 8px;
          background: #fff;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }
        .rq-input:focus,
        .rq-textarea:focus {
          border-color: #00934c;
          box-shadow: 0 0 0 3px rgba(0,147,76,0.12);
        }
        .rq-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: 'Nunito Sans', sans-serif;
        }

        .rq-services-label {
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #1e3a8a;
          letter-spacing: 0.3px;
          margin-bottom: 14px;
        }
        .rq-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 20px;
          margin-bottom: 26px;
        }
        .rq-service-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-family: 'Nunito Sans', sans-serif;
          font-size: 13.5px;
          color: #444;
          user-select: none;
        }
        .rq-checkbox {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          border: 1.5px solid #cfd6de;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        .rq-checkbox.checked {
          background: #00934c;
          border-color: #00934c;
        }

        .rq-submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #00934c;
          color: #fff;
          border: none;
          padding: 14px 36px;
          border-radius: 100px;
          font-family: 'Oswald', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.2s ease;
        }
        .rq-submit-btn:hover {
          background: #007a3e;
          transform: translateX(2px);
        }

        .rq-success {
          font-family: 'Nunito Sans', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #00934c;
          background: #eaf7f0;
          border: 1px solid #c9ecd7;
          border-radius: 10px;
          padding: 16px 20px;
        }

        @media (max-width: 900px) {
          .rq-grid { grid-template-columns: 1fr; gap: 40px; }
          .rq-form-card { padding: 28px; }
        }
        @media (max-width: 560px) {
          .rq-hero { height: 200px; }
          .rq-section { padding: 48px 5% 64px; }
          .rq-field-row { grid-template-columns: 1fr; gap: 16px; margin-bottom: 16px; }
          .rq-services-grid { grid-template-columns: 1fr; }
          .rq-form-card { padding: 22px; }
        }
      `}</style>

      {/* ─── HERO ─── */}
      <section className="rq-hero">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/handshakes.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.68) 100%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', background: '#00934c', zIndex: 2 }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 3 }}
        >
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(2.2rem, 6vw, 4rem)', color: '#fff', letterSpacing: '-1px', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            REQUEST A QUOTE
          </h1>
          <p style={{ ...nunito, fontWeight: 600, fontSize: '15px', color: 'rgba(255,255,255,0.75)', marginTop: '14px', letterSpacing: '0.5px' }}>
            Tell us about your requirement, and our team will get back to you with a detailed quote
          </p>
        </motion.div>
      </section>

      {/* ─── MAIN ─── */}
      <section className="rq-section">
        <div className="rq-grid">

          {/* ── Left: Why Choose Us ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ ...nunito, fontWeight: 700, fontSize: '12px', color: '#00934c', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Commitment to Accuracy, Integrity &amp; Reliability
            </p>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: '#1e3a8a', letterSpacing: '-0.4px', marginBottom: '8px' }}>
              Why Choose <span style={{ color: '#00934c' }}>Carbonson Minerals</span>
            </h2>
            <div style={{ width: '48px', height: '4px', background: '#00934c', margin: '20px 0 8px' }} />

            <div style={{ marginTop: '20px' }}>
              {whyChooseUs.map(({ icon: Icon, title, description }) => (
                <div className="rq-why-item" key={title}>
                  <div className="rq-why-icon">
                    <Icon size={20} color="#00934c" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ ...oswald, fontWeight: 600, fontSize: '15.5px', color: '#1e3a8a', margin: '0 0 6px', letterSpacing: '0.2px' }}>
                      {title}
                    </h3>
                    <p style={{ ...nunito, fontWeight: 400, fontSize: '13.5px', color: '#666', lineHeight: 1.7, margin: 0 }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rq-form-card">
              <h2 style={{ ...oswald, fontWeight: 700, fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', color: '#1e3a8a', marginBottom: '26px', letterSpacing: '-0.3px' }}>
                Tell Us More
              </h2>

              {submitted ? (
                <div className="rq-success">
                  Thank you — your request has been received. Our team will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="rq-field-row">
                    <input className="rq-input" type="text" placeholder="Full Name" value={form.name} onChange={handleChange('name')} required />
                    <input className="rq-input" type="text" placeholder="Company" value={form.company} onChange={handleChange('company')} />
                  </div>
                  <div className="rq-field-row">
                    <input className="rq-input" type="email" placeholder="Your Email" value={form.email} onChange={handleChange('email')} required />
                    <input className="rq-input" type="tel" placeholder="Your Phone" value={form.phone} onChange={handleChange('phone')} required />
                  </div>

                  <div className="rq-services-label">Services Required</div>
                  <div className="rq-services-grid">
                    {serviceOptions.map((service) => {
                      const checked = form.services.includes(service);
                      return (
                        <label className="rq-service-pill" key={service} onClick={() => toggleService(service)}>
                          <span className={`rq-checkbox${checked ? ' checked' : ''}`}>
                            {checked && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          {service}
                        </label>
                      );
                    })}
                  </div>

                  <textarea
                    className="rq-textarea"
                    placeholder="Share Detailed Requirement"
                    value={form.message}
                    onChange={handleChange('message')}
                    style={{ marginBottom: '26px' }}
                  />

                  <button type="submit" className="rq-submit-btn">
                    Submit Request <Send size={14} strokeWidth={2.4} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}