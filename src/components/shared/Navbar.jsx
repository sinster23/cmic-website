'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Minerals Sampling', href: '/services/sampling' },
    { name: 'Inspection & Witnessing', href: '/services/inspection' },
    { name: 'Liaisoning & Supervision', href: '/services/liaisoning' },
    { name: 'Analysis & Testing', href: '/services/analysis' },
    { name: 'Tarpaulin Covering', href: '/services/tarpaulin' },
    { name: 'Escorting Service', href: '/services/escorting' },
    { name: 'Manpower Service', href: '/services/manpower' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: services
    },
    { name: 'Clients', href: '/clients' },
    { name: 'Work Profile', href: '/work-profile' },
    { name: 'Our Team', href: '/team' },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1f1f1f]/95 backdrop-blur-md shadow-lg"
            : "bg-[#1f1f1f]"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Logo Icon */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#b11212] to-[#c1121f] flex items-center justify-center font-black text-white text-lg lg:text-xl transform group-hover:scale-105 transition-transform">
                  CM
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f6d8bd]" />
              </div>
              <div className="hidden md:block">
                <div className="text-[#fafafa] font-black text-sm lg:text-base leading-tight">
                  Carbonson Minerals
                </div>
                <div className="text-[#f6d8bd] text-xs font-semibold">
                  Inspection Company
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setActiveDropdown(index)
                  }
                  onMouseLeave={() =>
                    link.hasDropdown && setActiveDropdown(null)
                  }
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-[#fafafa]/80 hover:text-[#f6d8bd] transition-colors"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-[#2a2a2a] border border-[#3a3a3a] shadow-2xl"
                      >
                        {link.dropdownItems.map((item, idx) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15, delay: idx * 0.05 }}
                            className="block px-5 py-3 text-sm text-[#fafafa]/80 hover:bg-[#b11212] hover:text-white transition-colors border-b border-[#3a3a3a] last:border-0"
                          >
                            {item.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Contact Us CTA */}
              <a
                href="/contact"
                className="ml-2 px-6 py-2.5 bg-[#b11212] text-white text-sm font-bold hover:bg-[#c1121f] transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#f6d8bd] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#2a2a2a] border-t border-[#3a3a3a] overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        className="flex-1 px-4 py-3 text-sm font-semibold text-[#fafafa]/80 hover:text-[#f6d8bd] hover:bg-[#1f1f1f] transition-colors"
                      >
                        {link.name}
                      </a>
                      {link.hasDropdown && (
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="px-4 py-3 text-[#f6d8bd]"
                          aria-label="Toggle dropdown"
                        >
                          <motion.div
                            animate={{
                              rotate: activeDropdown === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {link.hasDropdown && activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-1 bg-[#1f1f1f] overflow-hidden"
                        >
                          {link.dropdownItems.map((item, idx) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: idx * 0.03 }}
                              className="block px-4 py-2 text-xs text-[#fafafa]/70 hover:text-[#f6d8bd] hover:bg-[#2a2a2a] transition-colors"
                            >
                              • {item.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Mobile Contact CTA */}
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="block mx-4 mt-4 px-6 py-3 bg-[#b11212] text-white text-sm font-bold text-center hover:bg-[#c1121f] transition-colors"
                >
                  Contact Us
                </motion.a>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="px-4 pt-4 mt-4 border-t border-[#3a3a3a] space-y-3"
                >
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-xs text-[#f6d8bd]/80"
                  >
                    <Phone className="w-3 h-3" />
                    <span>+91 123 456 7890</span>
                  </a>
                  <a
                    href="mailto:info@carbonsonminerals.com"
                    className="flex items-center gap-2 text-xs text-[#f6d8bd]/80"
                  >
                    <Mail className="w-3 h-3" />
                    <span>info@carbonsonminerals.com</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}