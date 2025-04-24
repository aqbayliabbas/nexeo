'use client';
import React from "react";

const brands = [
  { name: "ElPadre" },
  { name: "homeburger" },
  { name: "new heaven burger" },
];

import { motion } from "framer-motion";

export default function BrandsSection() {
  // Animated Counter component
  const AnimatedCounter = ({ to, suffix = '', duration = 2, label }: { to: number, suffix?: string, duration?: number, label: string }) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
      let start = 0;
      const increment = to / (duration * 60); // 60fps
      let frame: number;
      function animate() {
        start += increment;
        if (start < to) {
          setCount(Math.floor(start));
          frame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      }
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, [to, duration]);
    return (
      <div style={{
        minWidth: 80,
        color: '#e3e6ee',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 24px',
      }}>
        <span style={{ fontWeight: 700, fontSize: '1.32rem', color: '#fff', letterSpacing: 0 }}>{count}{suffix}</span>
        <span style={{ fontWeight: 500, fontSize: '0.92rem', color: '#7b8794', marginTop: 2, textAlign: 'center', lineHeight: 1.2 }}>{label}</span>
      </div>
    );
  };

  return (
    <section
      style={{
        width: '100%',
        margin: '36px 0 0 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0,
      }}
    >
      <AnimatedCounter to={100} label="Clients" />
      <AnimatedCounter to={140} label="Cartes vendues" />
      <AnimatedCounter to={99} suffix="%" label="Satisfaction" />
    </section>
  );
}
