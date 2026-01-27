'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
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

  return (
    <footer className="relative bg-[#1f1f1f] text-[#fafafa] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")`,
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-[#b11212]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-[#f6d8bd]/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
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
                  <div className="text-[#fafafa] font-black text-base leading-tight">
                    Carbonson Minerals
                  </div>
                  <div className="text-[#f6d8bd] text-xs font-semibold">
                    Inspection Company
                  </div>
                </div>
              </a>

              <p className="text-sm text-[#fafafa]/70 leading-relaxed">
                Professional mineral inspection, sampling, and supervision services across India.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-[#2a2a2a] border border-[#3a3a3a] flex items-center justify-center hover:bg-[#b11212] hover:border-[#b11212] transition-colors group"
                  >
                    <social.icon className="w-4 h-4 text-[#fafafa]/70 group-hover:text-white transition-colors" />
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
              <h3 className="text-[#f6d8bd] font-bold text-sm mb-4 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[#fafafa]/70 hover:text-[#f6d8bd] transition-colors inline-block"
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
              <h3 className="text-[#f6d8bd] font-bold text-sm mb-4 uppercase tracking-wider">
                Our Services
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-sm text-[#fafafa]/70 hover:text-[#f6d8bd] transition-colors inline-block"
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
              <h3 className="text-[#f6d8bd] font-bold text-sm mb-4 uppercase tracking-wider">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+911234567890"
                    className="flex items-start gap-3 text-sm text-[#fafafa]/70 hover:text-[#f6d8bd] transition-colors group"
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#b11212]" />
                    <span>+91 123 456 7890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@carbonsonminerals.com"
                    className="flex items-start gap-3 text-sm text-[#fafafa]/70 hover:text-[#f6d8bd] transition-colors group"
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#b11212]" />
                    <span>info@carbonsonminerals.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-[#fafafa]/70">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#b11212]" />
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
        <div className="border-t border-[#3a3a3a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-xs text-[#fafafa]/60 text-center md:text-left">
                © {new Date().getFullYear()} Carbonson Minerals Inspection Company. All rights reserved.
              </p>

              {/* Certifications */}
              <div className="flex items-center gap-4 text-xs text-[#fafafa]/60">
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-[#b11212] rounded-full" />
                  NABL Accredited
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-[#b11212] rounded-full" />
                  ISO Certified
                </span>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-4 text-xs">
                <a
                  href="/privacy-policy"
                  className="text-[#fafafa]/60 hover:text-[#f6d8bd] transition-colors"
                >
                  Privacy Policy
                </a>
                <span className="text-[#fafafa]/30">|</span>
                <a
                  href="/terms"
                  className="text-[#fafafa]/60 hover:text-[#f6d8bd] transition-colors"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}