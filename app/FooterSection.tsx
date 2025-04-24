import React from "react";

export default function FooterSection() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'rgba(24,36,64,0.32)',
        color: '#e7eaf3',
        borderTop: '1.5px solid rgba(255,255,255,0.09)',
        padding: '38px 0 26px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        marginTop: 54,
        gap: 14,
        letterSpacing: 0.01,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <img
        src="/nexeo.png"
        alt="Nexeo Logo"
        style={{ height: '18px', width: 'auto', objectFit: 'contain', marginBottom: 6 }}
      />
      <div style={{ opacity: 0.8, padding: '0 18px' }}>Révolutionner le networking avec la technologie NFC.</div>
      <span style={{ color: '#fff', opacity: 0.7, fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Nexeo. Tous droits réservés.
      </span>
      <div style={{ display: 'flex', gap: 18, marginTop: 8 }}>
        <a href="mailto:contact@nexeo.tech" style={{ color: '#e7eaf3', textDecoration: 'none', fontWeight: 500 }}>Contactez-nous</a>
        <a href="https://nexeo.tech" target="_blank" rel="noopener noreferrer" style={{ color: '#e7eaf3', textDecoration: 'none', fontWeight: 500 }}>Site web</a>
        <a href="#" style={{ color: '#e7eaf3', textDecoration: 'none', fontWeight: 500 }}>Confidentialité</a>
      </div>
      {/* Responsive center alignment for mobile */}
      <style>{`
        @media (max-width: 900px) {
          footer, footer > div, footer > span, footer > img {
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }
          footer > div[style*='display: flex'] {
            flex-direction: column !important;
            gap: 10px !important;
          }
          footer > div[style*='opacity: 0.8'] {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
