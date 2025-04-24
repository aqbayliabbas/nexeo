'use client';
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Yacine B.",
    text: "Super facile à utiliser et tout le monde a été impressionné lors de mon dernier événement ! Je recommande vivement.",
  },
  {
    name: "Imane Z.",
    text: "Un vrai changement pour le networking. Plus besoin de cartes papier et toujours des infos à jour !",
  },
  {
    name: "Sofiane L.",
    text: "Rapide, moderne et tellement pratique. Mes clients adorent !",
  },
  {
    name: "Nesrine K.",
    text: "J'ai été surprise par la simplicité. Aspect professionnel et fonctionne partout.",
  },
  {
    name: "Walid A.",
    text: "Parfait pour les réunions d'affaires. 5 étoiles !",
  },
  {
    name: "Sara M.",
    text: "La meilleure solution pour partager mes coordonnées. J'adore le design !",
  },
];

function Stars() {
  return (
    <span style={{ color: '#FFD700', fontSize: '1.2rem', letterSpacing: '2px' }}>
      {'★★★★★'}
    </span>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

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

  // Infinite cycling logic
  const cycle = (idx: number) => {
    if (idx < 0) return reviews.length - 1;
    if (idx >= reviews.length) return 0;
    return idx;
  };

  // No auto-slide on mobile, user must swipe or use arrows

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const dx = touchEndX.current - touchStartX.current;
      if (dx > 48 && current > 0) {
        setDirection(-1);
        setCurrent(current - 1);
      } else if (dx < -48 && current < reviews.length - 1) {
        setDirection(1);
        setCurrent(current + 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };
  // Arrow navigation
  const handlePrev = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(current - 1);
    }
  };
  const handleNext = () => {
    if (current < reviews.length - 1) {
      setDirection(1);
      setCurrent(current + 1);
    }
  };

  return (
    <section id="tab2"
      style={{
        width: '100%',
        maxWidth: 1100,
        margin: '80px auto',
        padding: '64px 0 72px 0',
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
        Avis des utilisateurs
      </motion.h2>
      {/* Desktop grid */}
      <div
        className="reviews-grid"
        style={{
          display: isMobile ? 'none' : 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 980,
        }}
      >
        {reviews.map((r, idx) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            style={{
              background: 'rgba(44,62,130,0.30)',
              borderRadius: '18px',
              padding: '40px 32px',
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
            <Stars />
            <span style={{ fontWeight: 400, fontSize: '1.14rem', opacity: 0.95, marginBottom: 12 }}>{r.text}</span>
            <span style={{ fontWeight: 600, fontSize: '1rem', opacity: 0.75 }}>— {r.name}</span>
          </motion.div>
        ))}
      </div>
      {/* Mobile slider */}
      <div
        className="reviews-slider"
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
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 18, height: 220 }}>
          <button onClick={handlePrev} disabled={current === 0} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 28, opacity: current === 0 ? 0.3 : 1, cursor: current === 0 ? 'not-allowed' : 'pointer', marginRight: 12 }}>&#8592;</button>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={reviews[current].name}
              initial={{ x: direction === 1 ? 60 : -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === 1 ? -60 : 60, opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                background: 'rgba(34,52,110,0.24)',
                borderRadius: '18px',
                padding: '38px 24px',
                minWidth: 260,
                maxWidth: 340,
                color: '#fff',
                boxShadow: '0 2px 16px 0 rgba(20,30,60,0.09)',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                textAlign: 'center',
              }}
            >
              <Stars />
              <span style={{ fontWeight: 400, fontSize: '1.06rem', opacity: 0.92, marginBottom: 8, display: 'block', width: '100%', textAlign: 'center' }}>{reviews[current].text}</span>
              <span style={{ fontWeight: 600, fontSize: '1rem', opacity: 0.75, display: 'block', width: '100%', textAlign: 'center' }}>— {reviews[current].name}</span>
            </motion.div>
          </AnimatePresence>
          <button onClick={handleNext} disabled={current === reviews.length - 1} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 28, opacity: current === reviews.length - 1 ? 0.3 : 1, cursor: current === reviews.length - 1 ? 'not-allowed' : 'pointer', marginLeft: 12 }}>&#8594;</button>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
          {reviews.map((_, idx) => (
            <span key={idx} style={{ width: 7, height: 7, borderRadius: '50%', background: idx === current ? '#fff' : '#aaa', opacity: idx === current ? 0.9 : 0.4, display: 'inline-block' }} />
          ))}
        </div>
      </div>
    </section>
  );
}
