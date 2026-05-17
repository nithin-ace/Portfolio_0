'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Hero() {
  // Global scroll — hero is at the very top so we tie directly to scrollY
  const { scrollY } = useScroll();

  // Left text block drifts upward at 40% of scroll speed
  const headingY = useTransform(scrollY, [0, 600], [0, -120]);
  // Slightly different rate for the tagline → depth separation
  const taglineY  = useTransform(scrollY, [0, 600], [0, -80]);
  // Photo drifts upward a little faster → strongest depth layer
  const photoY    = useTransform(scrollY, [0, 600], [0, -160]);
  // Holographic overlay drifts opposite direction for an eerie float
  const holoY     = useTransform(scrollY, [0, 600], [0, 40]);

  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '4rem', alignItems: 'center' }}>

        {/* ── Left Content ── */}
        <div>
          {/* Status badge — no parallax, anchored */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontFamily: 'monospace', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}
          >
            <Terminal size={14} />
            <span>[ SYSTEM_STATUS: ONLINE ]</span>
          </motion.div>

          {/* Heading — parallax layer 1 (slowest) */}
          <motion.div style={{ y: headingY }}>
            <motion.h1
              className="text-gradient"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 0.85, fontWeight: 700 }}
            >
              NITHIN S
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: '#fff', fontWeight: 300, letterSpacing: '0.4em', marginTop: '1rem', textTransform: 'uppercase' }}
            >
              Analyst_&amp;_Strategist
            </motion.h2>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ height: '1px', background: '#fff', margin: '2.5rem 0', opacity: 0.3 }}
          />

          {/* Tagline — parallax layer 2 (medium) */}
          <motion.div style={{ y: taglineY }}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ maxWidth: '500px', fontSize: '1rem', color: '#fff', lineHeight: 1.6 }}
            >
              Decoding complex patterns into actionable growth.{' '}
              Bridging the gap between raw data flows and human-centric community strategy.
            </motion.p>

            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem' }}>
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
                  color: '#fff', padding: '1rem 0',
                  cursor: 'none', fontFamily: 'monospace',
                  fontSize: '0.8rem', opacity: 0.5,
                  transition: 'all 0.3s ease', textDecoration: 'none',
                }}
              >
                FETCH_RESUME_DATA
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* ── Right Photo — parallax layer 3 (fastest, floats up noticeably) ── */}
        <motion.div
          style={{
            position: 'relative',
            maxWidth: '380px',
            justifySelf: 'center',
            mixBlendMode: 'screen',
            filter: 'contrast(1.3) brightness(1.1)',
            y: photoY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <img
            src="/images/profile.jpg"
            alt="Nithin S"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />

          {/* Holographic overlay — drifts counter to photo for max depth */}
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

      </div>
    </section>
  );
}
