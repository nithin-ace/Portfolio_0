'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Left text block drifts upward at 40% of scroll speed (only on desktop)
  const headingY = useTransform(scrollY, [0, 600], [0, isMobile ? 0 : -120]);
  // Slightly different rate for the tagline → depth separation
  const taglineY  = useTransform(scrollY, [0, 600], [0, isMobile ? 0 : -80]);
  // Photo drifts upward a little faster → strongest depth layer
  const photoY    = useTransform(scrollY, [0, 600], [0, isMobile ? 0 : -160]);
  // Holographic overlay drifts opposite direction for an eerie float
  const holoY     = useTransform(scrollY, [0, 600], [0, isMobile ? 0 : 40]);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: isMobile ? '6rem 1.5rem 3rem 1.5rem' : '0 5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 0.6fr', gap: isMobile ? '2.5rem' : '4rem', alignItems: 'center' }}>

        {/* ── Right Photo (Placed first on mobile via order attribute) ── */}
        <motion.div
          style={{
            position: 'relative',
            maxWidth: isMobile ? '240px' : '380px',
            justifySelf: 'center',
            mixBlendMode: 'screen',
            filter: 'contrast(1.3) brightness(1.1)',
            y: photoY,
            order: isMobile ? -1 : 1,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <img
            src="/images/profile.jpg"
            alt="Nithin S"
            style={{ width: '100%', height: 'auto', display: 'block', border: isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
          />

          {/* Holographic overlay ── drifts counter to photo for max depth */}
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)',
              y: holoY,
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        </motion.div>

        {/* ── Left Content ── */}
        <div style={{ order: isMobile ? 1 : -1, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
          {/* Status badge ── no parallax, anchored */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontFamily: 'monospace', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.2em', justifyContent: isMobile ? 'center' : 'flex-start' }}
          >
            <Terminal size={14} />
            <span>[ SYSTEM_STATUS: ONLINE ]</span>
          </motion.div>

          {/* Heading ── parallax layer 1 (slowest) */}
          <motion.div style={{ y: headingY, width: '100%', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
            <motion.h1
              className="text-gradient"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.2rem, 8vw, 5.5rem)', lineHeight: 0.95, fontWeight: 700, whiteSpace: 'nowrap' }}
            >
              NITHIN S
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{ fontSize: 'clamp(0.9rem, 3vw, 1.8rem)', color: '#fff', fontWeight: 300, letterSpacing: '0.3em', marginTop: '1rem', textTransform: 'uppercase' }}
            >
              Analyst_&amp;_Strategist
            </motion.h2>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ height: '1px', background: '#fff', margin: '2rem 0', opacity: 0.3 }}
          />

          {/* Tagline ── parallax layer 2 (medium) */}
          <motion.div style={{ y: taglineY, display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ maxWidth: '500px', fontSize: isMobile ? '0.9rem' : '1rem', color: '#fff', lineHeight: 1.6 }}
            >
              Decoding complex patterns into actionable growth.{' '}
              Bridging the gap between raw data flows and human-centric community strategy.
            </motion.p>

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '1.2rem' : '2.5rem', marginTop: isMobile ? '2.5rem' : '4rem', width: isMobile ? '100%' : 'auto', alignItems: 'center' }}>
              <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                whileHover={{ backgroundColor: '#fff', color: '#000' }}
                style={{
                  color: '#fff', border: '1px solid #fff',
                  padding: '1rem 2.5rem', cursor: 'none',
                  fontFamily: 'monospace', fontSize: '0.8rem',
                  transition: 'all 0.3s ease', textDecoration: 'none',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center'
                }}
              >
                EXPLORE_DATA()
              </motion.a>
              <motion.a
                href="#resume"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                whileHover={{ opacity: 1 }}
                style={{
                  color: '#fff', padding: isMobile ? '0.5rem 0' : '1rem 0',
                  cursor: 'none', fontFamily: 'monospace',
                  fontSize: '0.8rem', opacity: 0.5,
                  transition: 'all 0.3s ease', textDecoration: 'none',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center'
                }}
              >
                FETCH_RESUME_DATA
              </motion.a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
