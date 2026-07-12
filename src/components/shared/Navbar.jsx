'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowTopBar(currentScrollY < 10);
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  /* ─── Smart hash-scroll handler ─────────────────────────
     If we're already on /services, scroll to the section directly.
     If we're on another page, navigate to /services first, then
     scroll once the page has loaded.
  ─────────────────────────────────────────────────────── */
  const handleHashLink = useCallback(
    (e, href) => {
      const [path, hash] = href.split('#');

      // Helper: scroll to an element id with navbar offset
      const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const navbarHeight = 120;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      };

      if (pathname === path || pathname === '/services') {
        // Already on the right page — just scroll
        e.preventDefault();
        scrollToId(hash);
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      } else {
        // Navigate to /services, then scroll after navigation
        e.preventDefault();
        router.push(`${path}#${hash}`);
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    },
    [pathname, router]
  );

  const services = [
    { name: 'Minerals Sampling',       href: '/services/mineral-sampling' },
    { name: 'Inspection & Witnessing', href: '/services/joint-sampling-inspection' },
    { name: 'Liaisoning & Supervision',href: '/services/liaisoning-supervision' },
    { name: 'Analysis & Testing',      href: '/services/analysis' },
    { name: 'Tarpaulin Covering',      href: '/services#tarpaulin',  isHash: true },
    { name: 'Escorting Service',       href: '/services#escorting',  isHash: true },
    { name: 'Manpower Service',        href: '/services#manpower',   isHash: true },
  ];

  const navLinks = [
    { name: 'Home',       href: '/' },
    { name: 'About Us',   href: '/about' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: services,
    },
    { name: 'Gallery',    href: '/gallery' },
    { name: 'Careers',    href: '/careers' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (link) => {
    if (link.href === '/') return pathname === '/';
    if (link.hasDropdown && link.dropdownItems) {
      return (
        pathname === link.href ||
        link.dropdownItems.some(
          (item) => !item.isHash && pathname === item.href
        )
      );
    }
    return pathname === link.href || pathname.startsWith(link.href + '/');
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  /* ─── Shared link renderer — decides between hash-click and normal <a> ── */
  const renderDropdownItem = (item, idx, isMobile = false) => {
    const isCurrentPage = !item.isHash && pathname === item.href;

    const commonStyle = isMobile
      ? {
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: isCurrentPage ? 700 : 600,
        }
      : {
          fontFamily: "'Nunito Sans', sans-serif",
          fontWeight: 600,
        };

    const className = isMobile
      ? `block px-4 py-2 text-xs transition-colors ${
          isCurrentPage
            ? 'text-[#00934c] font-bold'
            : 'text-gray-600 hover:text-[#00934c] hover:bg-white'
        }`
      : `block px-5 py-3 text-sm transition-colors border-b border-gray-100 last:border-0 ${
          isCurrentPage
            ? 'bg-[#00934c] text-white'
            : 'text-gray-700 hover:bg-[#00934c] hover:text-white'
        }`;

    if (item.isHash) {
      return (
        <motion.a
          key={item.name}
          href={item.href}
          onClick={(e) => handleHashLink(e, item.href)}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15, delay: idx * 0.05 }}
          className={className}
          style={commonStyle}
        >
          {isMobile ? `• ${item.name}` : item.name}
        </motion.a>
      );
    }

    return (
      <motion.a
        key={item.name}
        href={item.href}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15, delay: idx * 0.05 }}
        className={className}
        style={commonStyle}
      >
        {isMobile
          ? `${isCurrentPage ? '▸ ' : '• '}${item.name}`
          : item.name}
      </motion.a>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Nunito+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      {/* ─── Top Info Bar ─── */}
      <motion.div
        initial={{ height: 'auto', opacity: 1 }}
        animate={{ height: showTopBar ? 'auto' : 0, opacity: showTopBar ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-gradient-to-r from-[#0d5a99] to-[#0c5a9e]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+913263558195"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">+91 326 355 8195</span>
              </a>
              <a
                href="mailto:info@carbonson.in"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">info@carbonson.in</span>
              </a>
              <span
                className="hidden lg:flex items-center gap-1.5 text-white/90"
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>carbonson.in</span>
              </span>
            </div>
            <div
              className="flex items-center gap-4 sm:gap-6 text-white/90 uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '0.06em' }}
            >
              <a href="/information" className="hover:text-white transition-colors hidden md:block">Information Hub</a>
              <a href="/career"      className="hover:text-white transition-colors hidden sm:block">Career</a>
              <a href="/login"       className="hover:text-white transition-colors">Customer Login</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Main Navbar ─── */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 bg-white shadow-md ${
          showTopBar ? 'top-10' : 'top-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-19 lg:h-23">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img src="/logo2.png" alt="Carbonson Minerals Logo" className="w-16 h-18 lg:w-20 lg:h-20" />
              </div>
              <div className="hidden sm:block">
                <div
                  className="text-gray-900 text-base lg:text-xl leading-tight"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
                >
                  Carbonson Minerals
                </div>
                <div
                  className="text-purple-900 text-md"
                  style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}
                >
                  Inspection Company
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                const active = isActive(link);
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setActiveDropdown(index)}
                    onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className={`flex items-center gap-1 px-4 py-2 text-sm uppercase transition-colors ${
                        active ? 'text-[#00934c]' : 'text-gray-700 hover:text-[#00934c]'
                      }`}
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '0.06em' }}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </a>

                    {active && (
                      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#00934c]" />
                    )}

                    {/* Dropdown */}
                    <AnimatePresence>
                      {link.hasDropdown && activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 bg-white shadow-2xl border border-gray-200"
                        >
                          {link.dropdownItems.map((item, idx) =>
                            renderDropdownItem(item, idx, false)
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <a
                href="/request-a-quote"
                className="ml-2 px-6 py-2.5 bg-[#00934c] text-white text-sm uppercase hover:bg-[#007a3d] transition-colors rounded-full"
                style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '0.06em' }}
              >
                Request for Quote
              </a>

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
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ─── Mobile Menu ─── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link, index) => {
                  const active = isActive(link);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <div className={`flex items-center justify-between rounded-md ${active ? 'bg-[#00934c]/8' : ''}`}>
                        <a
                          href={link.href}
                          onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                          className={`flex-1 px-4 py-3 text-sm uppercase transition-colors ${
                            active
                              ? 'text-[#00934c] font-bold'
                              : 'text-gray-700 hover:text-[#00934c] hover:bg-gray-50'
                          }`}
                          style={{ fontFamily: "'Oswald', sans-serif", fontWeight: active ? 700 : 600, letterSpacing: '0.06em' }}
                        >
                          {active && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00934c] mr-2 mb-0.5" />
                          )}
                          {link.name}
                        </a>
                        {link.hasDropdown && (
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="px-4 py-3 text-[#00934c]"
                            aria-label="Toggle dropdown"
                          >
                            <motion.div
                              animate={{ rotate: activeDropdown === index ? 180 : 0 }}
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
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1 bg-gray-50 overflow-hidden"
                          >
                            {link.dropdownItems.map((item, idx) =>
                              renderDropdownItem(item, idx, true)
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {/* Mobile Quick Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4 mt-4 border-t border-gray-200 space-y-2"
                >
                  {['Information Hub', 'Career', 'Customer Login'].map((label) => (
                    <a
                      key={label}
                      href={`/${label.toLowerCase().replace(/\s/g, '-')}`}
                      className="block px-4 py-2 text-xs text-gray-600 hover:text-[#00934c] uppercase"
                      style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '0.06em' }}
                    >
                      {label}
                    </a>
                  ))}
                </motion.div>

                {/* Mobile CTA */}
                <motion.a
                  href="/contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="block mx-4 mt-4 px-6 py-3 bg-[#00934c] text-white text-sm text-center hover:bg-[#007a3d] transition-colors rounded-full uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, letterSpacing: '0.06em' }}
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
                    href="tel:+913263558195"
                    className="flex items-center gap-2 text-xs text-gray-600"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                  >
                    <Phone className="w-3 h-3" />
                    <span>+91 326 355 8195</span>
                  </a>
                  <a
                    href="mailto:info@carbonson.in"
                    className="flex items-center gap-2 text-xs text-gray-600"
                    style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 600 }}
                  >
                    <Mail className="w-3 h-3" />
                    <span>info@carbonson.in</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className={`${showTopBar ? 'h-[104px] lg:h-[120px]' : 'h-16 lg:h-20'} transition-all duration-300`} />
    </>
  );
}