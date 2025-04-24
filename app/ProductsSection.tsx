'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    title: "Carte NCF NEXEO",
    price: 2800,
    oldPrice: 4000,
  },
  {
    title: "Carte NEXEO NFC",
    price: 4200,
    oldPrice: 5000,
  }
];

export default function ProductsSection() {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900;

  // Mobile slider navigation
  const handlePrev = () => setCurrent(c => Math.max(0, c - 1));
  const handleNext = () => setCurrent(c => Math.min(products.length - 1, c + 1));

  return (
    <section id="tab3"
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
        Nos produits
      </motion.h2>
      {/* Desktop grid */}
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row', // Side by side
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 40,
            marginTop: 10,
            width: '100%',
          }}
        >
          {products.map((p, idx) => (
            <motion.div
              key={p.title + idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              style={{
                background: 'rgba(24,36,64,0.32)',
                borderRadius: '22px',
                padding: '32px 32px 24px 32px',
                minWidth: 340,
                maxWidth: 400,
                color: '#fff',
                boxShadow: '0 4px 32px 0 rgba(20,30,60,0.10)',
                border: '1.5px solid rgba(255,255,255,0.09)',
                flex: '1 1 340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                gap: '16px',
                position: 'relative',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                overflow: 'hidden',
                height: 600,
                minHeight: 600,
                maxHeight: 600,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
                <span style={{ fontWeight: 700, fontSize: '1.18rem', color: '#fff' }}>{p.title}</span>
              </div>
              <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8, marginBottom: 0, color: '#fff', letterSpacing: 2 }}>
                {p.price} <span style={{ color: '#b6c2d6', fontWeight: 400, fontSize: 18 }}>DZD</span>
              </div>
              <div style={{ color: '#f44', fontWeight: 600, fontSize: 13, marginTop: -8 }}>
                Prix initial <span style={{ textDecoration: 'line-through', fontWeight: 600 }}>{p.oldPrice} DZD</span>
              </div>
              {idx === 0 ? (
                <ul style={{
                  margin: '16px 0 0 0',
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
                  {['Carte NFC','Configuration facile','Partage d\'informations rapide','Impression professionnelle et forte','Utilisez-la avec fierté'].map((point, i) => (
                    <li key={point} style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(30,40,80,0.22)',
                      borderRadius: 22,
                      padding: '7px 18px 7px 13px',
                      color: '#e7eaf3',
                      fontSize: 13.5,
                      fontWeight: 500,
                      boxShadow: '0 1px 6px 0 rgba(30,40,80,0.08)',
                      backdropFilter: 'blur(6px)',
                      WebkitBackdropFilter: 'blur(6px)',
                      minHeight: 32,
                    }}>
                      <span style={{
                        display: 'inline-block',
                        width: 9,
                        height: 9,
                        borderRadius: '50%',
                        background: '#3b82f6',
                        marginRight: 11,
                      }} />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul style={{
                  margin: '16px 0 0 0',
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
                  {['Ajoutez un logo personnalisé','Carte NFC','Configuration facile','Partage d\'informations rapide','Impression professionnelle et forte','Utilisez-la avec fierté'].map((point, i) => (
                    <li key={point} style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(30,40,80,0.22)',
                      borderRadius: 22,
                      padding: '7px 18px 7px 13px',
                      color: '#e7eaf3',
                      fontSize: 13.5,
                      fontWeight: 500,
                      boxShadow: '0 1px 6px 0 rgba(30,40,80,0.08)',
                      backdropFilter: 'blur(6px)',
                      WebkitBackdropFilter: 'blur(6px)',
                      minHeight: 32,
                      marginRight: 11,
                    }}>
                      <span style={{
                        display: 'inline-block',
                        width: 9,
                        height: 9,
                        borderRadius: '50%',
                        background: '#3b82f6',
                        marginRight: 11,
                      }} />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <div style={{ width: '100%', marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                <button
                  style={{
                    background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    padding: '12px 28px',
                    borderRadius: 10,
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: 12,
                    boxShadow: '0 2px 12px 0 rgba(30,60,110,0.13)',
                  }}
                >
                  Commander maintenant
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {/* Mobile slider */}
      {isMobile && (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '98vw',
      minHeight: 420,
      position: 'relative',
      margin: '0 auto',
      gap: 24,
    }}
  >
    {products.map((p, idx) => (
      <motion.div
        key={p.title + idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: idx * 0.1 }}
        style={{
          background: 'rgba(24,36,64,0.32)',
          borderRadius: '22px',
          padding: '24px 10px',
          minWidth: '90vw',
          maxWidth: '98vw',
          color: '#fff',
          boxShadow: '0 4px 32px 0 rgba(20,30,60,0.10)',
          border: '1.5px solid rgba(255,255,255,0.09)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          overflow: 'hidden',
          minHeight: 420,
          textAlign: 'center',
        }}
      >
        <span style={{ fontWeight: 700, fontSize: '1.18rem', color: '#fff', textAlign: 'center' }}>{p.title}</span>
        <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8, marginBottom: 0, color: '#fff', letterSpacing: 2, textAlign: 'center' }}>
          {p.price} <span style={{ color: '#b6c2d6', fontWeight: 400, fontSize: 18 }}>DZD</span>
        </div>
        <div style={{ color: '#f44', fontWeight: 600, fontSize: 13, marginTop: -8, textAlign: 'center' }}>
          Prix initial <span style={{ textDecoration: 'line-through', fontWeight: 600 }}>{p.oldPrice} DZD</span>
        </div>
        <ul style={{
          margin: '16px 0 0 0',
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
          width: '100%',
        }}>
          {(idx === 0 ? ['Carte NFC','Configuration facile','Partage d\'informations rapide','Impression professionnelle et forte','Utilisez-la avec fierté'] : ['Ajoutez un logo personnalisé','Carte NFC','Configuration facile','Partage d\'informations rapide','Impression professionnelle et forte','Utilisez-la avec fierté']).map((point, i) => (
            <li key={point} style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(30,40,80,0.22)',
              borderRadius: 22,
              padding: '7px 18px 7px 13px',
              color: '#e7eaf3',
              fontSize: 13.5,
              fontWeight: 500,
              boxShadow: '0 1px 6px 0 rgba(30,40,80,0.08)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              minHeight: 32,
              width: '90%',
              margin: '0 auto',
            }}>
              <span style={{
                display: 'inline-block',
                width: 9,
                height: 9,
                borderRadius: '50%',
                background: '#3b82f6',
                marginRight: 11,
              }} />
              {point}
            </li>
          ))}
        </ul>
        <div style={{ width: '100%', marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
          <button
            style={{
              background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              padding: '12px 28px',
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer',
              marginTop: 12,
              boxShadow: '0 2px 12px 0 rgba(30,60,110,0.13)',
            }}
          >
            Commander maintenant
          </button>
        </div>
      </motion.div>
    ))}
  </div>
)}
    </section>
  );
}
