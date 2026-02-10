'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show top bar only when at the very top of the page
      if (currentScrollY < 10) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }
      
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Top Info Bar - Auto hide/show on scroll */}
      <motion.div
        initial={{ height: 'auto', opacity: 1 }}
        animate={{ 
          height: showTopBar ? 'auto' : 0,
          opacity: showTopBar ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-gradient-to-r from-[#0d5a99] to-[#0c5a9e]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-10 text-xs">
            {/* Left Side - Contact Info */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">+91 123 456 7890</span>
              </a>
              <a
                href="mailto:info@carbonsonminerals.com"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">info@carbonsonminerals.com</span>
              </a>
              <span className="hidden lg:flex items-center gap-1.5 text-white/90">
                <MapPin className="w-3.5 h-3.5" />
                <span>carbonsonminerals.com</span>
              </span>
            </div>

            {/* Right Side - Quick Links */}
            <div className="flex items-center gap-4 sm:gap-6 text-white/90 font-medium uppercase tracking-wide">
              <a href="/information" className="hover:text-white transition-colors hidden md:block">
                Information Hub
              </a>
              <a href="/career" className="hover:text-white transition-colors hidden sm:block">
                Career
              </a>
              <a href="/login" className="hover:text-white transition-colors">
                Customer Login
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-white shadow-md ${
          showTopBar ? 'top-10' : 'top-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Logo Icon */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#b11212] to-[#c1121f] flex items-center justify-center font-black text-white text-xl lg:text-2xl transform group-hover:scale-105 transition-transform">
                  CM
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f6d8bd]" />
              </div>
              <div className="hidden sm:block">
                <div className="text-gray-900 font-black text-base lg:text-lg leading-tight">
                  Carbonson Minerals
                </div>
                <div className="text-[#00934c] text-xs font-semibold">
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
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase transition-colors ${
                      index === 0 
                        ? 'text-[#00934c] hover:text-[#007a3d]' 
                        : 'text-gray-700 hover:text-[#00934c]'
                    }`}
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
                        className="absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl border border-gray-200"
                      >
                        {link.dropdownItems.map((item, idx) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15, delay: idx * 0.05 }}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-[#00934c] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                          >
                            {item.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Request for Quote CTA */}
              <a
                href="/contact"
                className="ml-2 px-6 py-2.5 bg-[#00934c] text-white text-sm font-bold uppercase hover:bg-[#007a3d] transition-colors rounded-full"
              >
                Request for Quote
              </a>

              {/* Search Icon */}
              <button
                className="ml-2 p-2 text-gray-700 hover:text-[#00934c] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#00934c] transition-colors"
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
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
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
                        className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 hover:text-[#00934c] hover:bg-gray-50 transition-colors uppercase"
                      >
                        {link.name}
                      </a>
                      {link.hasDropdown && (
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="px-4 py-3 text-[#00934c]"
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
                          className="pl-4 space-y-1 bg-gray-50 overflow-hidden"
                        >
                          {link.dropdownItems.map((item, idx) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: idx * 0.03 }}
                              className="block px-4 py-2 text-xs text-gray-600 hover:text-[#00934c] hover:bg-white transition-colors"
                            >
                              • {item.name}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Mobile Quick Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4 mt-4 border-t border-gray-200 space-y-2"
                >
                  <a
                    href="/information"
                    className="block px-4 py-2 text-xs font-medium text-gray-600 hover:text-[#00934c] uppercase"
                  >
                    Information Hub
                  </a>
                  <a
                    href="/career"
                    className="block px-4 py-2 text-xs font-medium text-gray-600 hover:text-[#00934c] uppercase"
                  >
                    Career
                  </a>
                  <a
                    href="/login"
                    className="block px-4 py-2 text-xs font-medium text-gray-600 hover:text-[#00934c] uppercase"
                  >
                    Customer Login
                  </a>
                </motion.div>

                {/* Mobile Contact CTA */}
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="block mx-4 mt-4 px-6 py-3 bg-[#00934c] text-white text-sm font-bold text-center hover:bg-[#007a3d] transition-colors rounded-full uppercase"
                >
                  Request for Quote
                </motion.a>

                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="px-4 pt-4 mt-4 border-t border-gray-200 space-y-3"
                >
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <Phone className="w-3 h-3" />
                    <span>+91 123 456 7890</span>
                  </a>
                  <a
                    href="mailto:info@carbonsonminerals.com"
                    className="flex items-center gap-2 text-xs text-gray-600"
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

      {/* Spacer to prevent content jump */}
      <div className={`${showTopBar ? 'h-[104px] lg:h-[120px]' : 'h-16 lg:h-20'} transition-all duration-300`} />
    </>
  );
}