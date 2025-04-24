'use client';
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const benefits = [
  {
    title: "Partage instantané",
    description: "Transférez vos coordonnées, profils sociaux ou informations professionnelles instantanément en un seul geste—sans application ni saisie."
  },
  {
    title: "Sans contact & hygiénique",
    description: "Partagez vos données sans remettre votre téléphone ou carte. Parfait pour des interactions modernes et sans contact."
  },
  {
    title: "Toujours à jour",
    description: "Mettez à jour vos infos en ligne—votre carte NFC partage toujours la dernière version, contrairement aux cartes papier."
  },
  {
    title: "Écologique",
    description: "Réduisez les déchets liés aux cartes de visite imprimées. Une seule carte NFC peut être réutilisée à l'infini."
  },
  {
    title: "Impression professionnelle",
    description: "Démarquez-vous avec un réseautage moderne et innovant, mémorable et pratique."
  },
  {
    title: "Compatible multi-plateformes",
    description: "Fonctionne avec la plupart des smartphones modernes—aucune application spéciale requise pour le destinataire."
  }
];

export default function BenefitsSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(
  typeof window !== 'undefined' ? window.innerWidth <= 900 : false
);

React.useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 900);
  };
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const dx = touchEndX.current - touchStartX.current;
      if (dx > 48 && current > 0) setCurrent(current - 1);
      else if (dx < -48 && current < benefits.length - 1) setCurrent(current + 1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Arrow navigation
  const handlePrev = () => setCurrent(c => Math.max(0, c - 1));
  const handleNext = () => setCurrent(c => Math.min(benefits.length - 1, c + 1));

  return (
    <section id="tab1"
      style={{
        width: '100%',
        maxWidth: 1100,
        margin: '80px auto',
        padding: '56px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(24,36,64,0.22)',
        borderRadius: '22px',
        boxShadow: '0 4px 32px 0 rgba(20,30,60,0.10)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1.5px solid rgba(255,255,255,0.09)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          color: '#fff',
          fontSize: '2.2rem',
          fontWeight: 700,
          marginBottom: 32,
          letterSpacing: '0.01em',
          textAlign: 'center',
          width: '100%',
        }}
      >
        Pourquoi utiliser une carte NFC ?
      </motion.h2>
      {/* Desktop grid */}
      <div
        className="benefits-grid"
        style={{
          display: isMobile ? 'none' : 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 980,
        }}
      >
        {benefits.map((b, idx) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            style={{
              background: 'rgba(34,52,110,0.24)',
              borderRadius: '18px',
              padding: '28px 24px',
              minWidth: 260,
              maxWidth: 320,
              color: '#fff',
              boxShadow: '0 2px 16px 0 rgba(20,30,60,0.09)',
              border: '1px solid rgba(255,255,255,0.07)',
              flex: '1 1 260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '12px',
            }}
          >
            <span style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: 4 }}>{b.title}</span>
            <span style={{ fontWeight: 400, fontSize: '1rem', opacity: 0.82 }}>{b.description}</span>
          </motion.div>
        ))}
      </div>
      {/* Mobile slider */}
      <div
        className="benefits-slider"
        style={{
          display: isMobile ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 380,
          minHeight: 210,
          position: 'relative',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 18 }}>
          <button onClick={handlePrev} disabled={current === 0} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 28, opacity: current === 0 ? 0.3 : 1, cursor: current === 0 ? 'not-allowed' : 'pointer', marginRight: 12 }}>&#8592;</button>
          <AnimatePresence mode="wait">
            <motion.div
              key={benefits[current].title}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                background: 'rgba(34,52,110,0.24)',
                borderRadius: '18px',
                padding: '28px 24px',
                minWidth: 260,
                maxWidth: 340,
                color: '#fff',
                boxShadow: '0 2px 16px 0 rgba(20,30,60,0.09)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '12px',
                width: '100%',
              }}
            >
              <span style={{ fontWeight: 600, fontSize: '1.15rem', marginBottom: 4 }}>{benefits[current].title}</span>
              <span style={{ fontWeight: 400, fontSize: '1rem', opacity: 0.82 }}>{benefits[current].description}</span>
            </motion.div>
          </AnimatePresence>
          <button onClick={handleNext} disabled={current === benefits.length - 1} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 28, opacity: current === benefits.length - 1 ? 0.3 : 1, cursor: current === benefits.length - 1 ? 'not-allowed' : 'pointer', marginLeft: 12 }}>&#8594;</button>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
          {benefits.map((_, idx) => (
            <span key={idx} style={{ width: 7, height: 7, borderRadius: '50%', background: idx === current ? '#fff' : '#aaa', opacity: idx === current ? 0.9 : 0.4, display: 'inline-block' }} />
          ))}
        </div>
      </div>
    </section>
  );
}
