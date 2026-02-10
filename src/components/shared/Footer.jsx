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

      {/* Scroll to Top Button - Vertical "Email" text */}
      <div className="absolute top-0 right-0 h-full flex items-center">
        <button
          onClick={scrollToTop}
          className="bg-[#00934c] hover:bg-[#007a3d] text-white px-3 py-6 transition-colors flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <span className="writing-mode-vertical text-xs font-bold tracking-widest uppercase">
            Email
          </span>
        </button>
      </div>

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
              {/* Logo */}
              <a href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#b11212] to-[#c1121f] flex items-center justify-center font-black text-white text-xl transform group-hover:scale-105 transition-transform">
                    CM
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f6d8bd]" />
                </div>
                <div>
                  <div className="text-white font-black text-base leading-tight">
                    Carbonson Minerals
                  </div>
                  <div className="text-white/70 text-xs font-semibold">
                    Inspection Company
                  </div>
                </div>
              </a>

              <p className="text-sm text-white/80 leading-relaxed">
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
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b-2 border-white/30 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors inline-block"
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
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b-2 border-white/30 inline-block">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-sm text-white/80 hover:text-white transition-colors inline-block"
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
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b-2 border-white/30 inline-block">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+911234567890"
                    className="flex items-start gap-2 text-sm text-white/80 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>+91 123 456 7890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@carbonsonminerals.com"
                    className="flex items-start gap-2 text-sm text-white/80 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>info@carbonsonminerals.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-sm text-white/80">
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
              <p className="text-xs text-white/70 text-center md:text-left">
                © {new Date().getFullYear()} Carbonson Minerals Inspection Company. All rights reserved.
              </p>

              {/* Certifications */}
              <div className="flex items-center gap-4 text-xs text-white/70">
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
                  >
                    Privacy Policy
                  </a>
                  <span className="text-white/30">|</span>
                  <a
                    href="/terms"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </div>

                {/* Scroll to Top Circle Button */}
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-full bg-[#00934c] hover:bg-[#007a3d] flex items-center justify-center transition-colors"
                  aria-label="Scroll to top"
                >
                  <ChevronUp className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for vertical text */}
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </footer>
  );
}