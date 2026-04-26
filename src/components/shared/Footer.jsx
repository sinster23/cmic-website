'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Clients', href: '/clients' },
  ];

  const services = [
    { name: 'Minerals Sampling', href: '/services/sampling' },
    { name: 'Inspection & Witnessing', href: '/services/inspection' },
    { name: 'Liaisoning & Supervision', href: '/services/liaisoning' },
    { name: 'Analysis & Testing', href: '/services/analysis' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0d5a99] via-[#0c5a9e] to-[#0a4d8a] text-white overflow-hidden">

      {/* Google Fonts — Oswald + Nunito Sans */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap');
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <a href="/" className="flex items-center gap-3 group">
                <img src="/logo1.png" alt="Carbonson Minerals Logo" className="w-10 h-10 lg:w-12 lg:h-12" />
                <div>
                  <div
                    className="text-white text-base leading-tight"
                    style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                  >
                    Carbonson Minerals
                  </div>
                  <div
                    className="text-white/70 text-xs"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}
                  >
                    Inspection Company
                  </div>
                </div>
              </a>

              <p
                className="text-sm text-white/80 leading-relaxed"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
              >
                Professional mineral inspection, sampling, and supervision services across India.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors group"
                  >
                    <social.icon className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3
                className="text-white text-lg mb-4 pb-2 border-b-2 border-white/30 inline-block uppercase"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: '0.06em' }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors inline-block"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3
                className="text-white text-lg mb-4 pb-2 border-b-2 border-white/30 inline-block uppercase"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: '0.06em' }}
              >
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-sm text-white/80 hover:text-white transition-colors inline-block"
                      style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3
                className="text-white text-lg mb-4 pb-2 border-b-2 border-white/30 inline-block uppercase"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: '0.06em' }}
              >
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+913263558195"
                    className="flex items-start gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>+91 326 355 8195</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@carbonsonminerals.in"
                    className="flex items-start gap-2 text-sm text-white/80 hover:text-white transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>info@carbonsonminerals.in</span>
                  </a>
                </li>
                <li>
                  <div
                    className="flex items-start gap-2 text-sm text-white/80"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
                  >
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                      123 Business Park, Industrial Area,<br />
                      Bhubaneswar, Odisha - 751001
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-6 lg:px-12 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Copyright */}
              <p
                className="text-xs text-white/70 text-center md:text-left"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 400 }}
              >
                © {new Date().getFullYear()} Carbonson Minerals Inspection Company. All rights reserved.
              </p>

              {/* Certifications */}
              <div
                className="flex items-center gap-4 text-xs text-white/70"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}
              >
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-[#00934c] rounded-full" />
                  NABL Accredited
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-[#00934c] rounded-full" />
                  ISO Certified
                </span>
              </div>

              {/* Legal Links + Scroll to Top */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 text-xs">
                  <a
                    href="/privacy-policy"
                    className="text-white/70 hover:text-white transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                  >
                    Privacy Policy
                  </a>
                  <span className="text-white/30">|</span>
                  <a
                    href="/terms"
                    className="text-white/70 hover:text-white transition-colors"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                  >
                    Terms & Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}