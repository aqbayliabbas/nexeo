'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll to section and close mobile menu
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  // Main nav style
  const navStyle: React.CSSProperties = {
    transformOrigin: 'center',
    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    height: '64px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    background: 'transparent',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: 'none',
    borderRadius: '18px',
    margin: '1rem',
    position: 'relative',
    zIndex: 1001,
    flexDirection: 'row',
  };

  const rightSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    position: 'relative',
  };

  // Hamburger button style
  const hamburgerStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: menuOpen ? 9999 : 1004, // bring to front when open
    outline: 'none',
    position: menuOpen ? 'fixed' : 'relative',
    top: menuOpen ? 18 : undefined,
    right: menuOpen ? 18 : undefined,
    left: menuOpen ? 'auto' : undefined,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  };

  const hamburgerBarCommon: React.CSSProperties = {
    position: 'absolute',
    left: 8,
    right: 8,
    height: 4,
    borderRadius: 2,
    background: '#fff',
    transition: 'all 0.35s cubic-bezier(.4,2.3,.3,1)',
  };

  const barTop: React.CSSProperties = {
    ...hamburgerBarCommon,
    top: 12,
    transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
  };
  const barMiddle: React.CSSProperties = {
    ...hamburgerBarCommon,
    top: 18,
    opacity: menuOpen ? 0 : 1,
    transform: menuOpen ? 'scaleX(0.4)' : 'none',
  };
  const barBottom: React.CSSProperties = {
    ...hamburgerBarCommon,
    top: 24,
    transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
  };

  // Mobile menu dropdown style (list under navbar)
  const mobileMenuStyle: React.CSSProperties = {
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: 'rgba(30,30,30,0.97)',
    zIndex: 1500,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '0.5rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    borderRadius: '0 0 18px 18px',
    padding: '1.2rem 2rem 1.5rem 2rem',
    animation: menuOpen ? 'dropdownOpen 0.32s cubic-bezier(.4,2.3,.3,1)' : 'none',
  };

  // Add keyframes for dropdown animation
  const dropdownKeyframes = `
    @keyframes dropdownOpen {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <motion.nav
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={navStyle}
    >
      {/* Logo on the left */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        style={{ fontWeight: 700, fontSize: '1.5rem', color: '#fff', textDecoration: 'none', zIndex: 1003 }}
      >nexeo</motion.a>

      {/* Right section: hamburger, links, CTA */}
      <div style={rightSectionStyle}>
        {/* Hamburger for mobile */}
        <button
          aria-label="Toggle menu"
          style={{
            ...hamburgerStyle,
            display: 'none',
          }}
          className="hamburger-btn"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span style={barTop} />
          <span style={barMiddle} />
          <span style={barBottom} />
        </button>

        {/* Center Tabs Desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="navbar-links"
          style={{ display: 'flex', gap: '2rem', zIndex: 1002 }}
        >
          <a href="#tab1" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }} onClick={e => handleMenuClick(e, '#tab1')}>Avantages</a>
          <a href="#tab2" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }} onClick={e => handleMenuClick(e, '#tab2')}>Avis</a>
          <a href="#tab3" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }} onClick={e => handleMenuClick(e, '#tab3')}>Produits</a>
        </motion.div>

        {/* CTA Desktop */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="navbar-cta"
          style={{
            padding: '0.5rem 1.25rem',
            background: '#fff',
            color: '#212121',
            borderRadius: '24px',
            fontWeight: 600,
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            border: '1px solid #e0e0e0',
            textDecoration: 'none',
            transition: 'background 0.2s',
            zIndex: 1002,
          }}
        >Contact</motion.a>
      </div>

      {/* Mobile Menu Dropdown */}
      <div style={mobileMenuStyle} className="mobile-menu">
        <a href="#tab1" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.15rem', padding: '0.7rem 0', width: '100%' }} onClick={e => handleMenuClick(e, '#tab1')}>Benifits</a>
        <a href="#tab2" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.15rem', padding: '0.7rem 0', width: '100%' }} onClick={e => handleMenuClick(e, '#tab2')}>Reviews</a>
        <a href="#tab3" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1.15rem', padding: '0.7rem 0', width: '100%' }} onClick={e => handleMenuClick(e, '#tab3')}>Products</a>
        <a href="#contact" style={{ color: '#212121', background: '#fff', borderRadius: '24px', padding: '0.7rem 1.5rem', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', marginTop: '1.1rem' }} onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* Responsive CSS with style tag and dropdown animation keyframes */}
      <style>{`
        ${dropdownKeyframes}
        @media (max-width: 900px) {
          .navbar-links, .navbar-cta {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
            position: relative;
          }
          .mobile-menu {
            box-shadow: 0 8px 24px rgba(0,0,0,0.15);
            border-radius: 0 0 18px 18px;
          }
          .navbar-logo {
            margin-right: auto;
          }
          .right-section {
            margin-left: auto;
          }
        }
        @media (min-width: 901px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
}
