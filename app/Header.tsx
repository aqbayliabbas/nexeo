'use client';
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '36px 16px 0 16px',
      minHeight: '60vh',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0 }}
        style={{
          display: 'inline-block',
          background: 'rgba(120, 119, 198, 0.18)',
          color: '#fff',
          borderRadius: '16px',
          padding: '5px 18px',
          fontWeight: 500,
          fontSize: '14px',
          marginBottom: '24px',
          border: '1px solid rgba(255,255,255,0.22)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Carte NFC numéro 1 en Algérie.
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          fontWeight: 700,
          fontSize: '2.5rem',
          lineHeight: 1.15,
          marginBottom: '14px',
          color: '#fff',
          maxWidth: '700px',
        }}
      >
        Votre identité professionnelle, partagée en un seul geste.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          color: 'rgba(255,255,255,0.88)',
          fontSize: '1.15rem',
          fontWeight: 400,
          marginBottom: '40px',
          maxWidth: '560px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        La carte de visite intelligente qui transmet vos coordonnées instantanément, sans contact et sans effort. Oubliez le papier, adoptez l’innovation.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 32 }}
      >
        <button
          style={{
            background: 'rgba(34,52,110,0.38)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1.1rem',
            padding: '14px 32px',
            borderRadius: 14,
            border: '1.5px solid rgba(255,255,255,0.18)',
            cursor: 'pointer',
            boxShadow: '0 4px 18px 0 rgba(34,52,110,0.13)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            letterSpacing: '0.01em',
            transition: 'background 0.18s, box-shadow 0.18s',
          }}
          onMouseOver={e => (e.currentTarget.style.background = 'rgba(34,52,110,0.60)')}
          onMouseOut={e => (e.currentTarget.style.background = 'rgba(34,52,110,0.38)')}
        >
          Obtenez votre carte NFC
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1px',
        }}
      >
        <motion.img
          src="/header-img.png"
          alt="Aperçu de l'application Chat Sync"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            maxWidth: '380px',
            width: '100%',
            borderRadius: '32px',
          }}
        />
      </motion.div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120vw',
          height: '120vh',
          background: 'radial-gradient(ellipse at center, rgba(34,52,110,0.44) 0%, rgba(10,16,40,0.22) 50%, rgba(10,10,20,0.01) 100%)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
