'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 5rem', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', opacity: 0.5, fontFamily: 'monospace', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
            <Terminal size={14} />
            <span>[ SYSTEM_STATUS: ONLINE ]</span>
          </div>
          
          <h1 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', lineHeight: 0.85, fontWeight: 700 }}>
            NITHIN S
          </h1>
          <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: '#fff', fontWeight: 300, letterSpacing: '0.4em', marginTop: '1rem', textTransform: 'uppercase', opacity: 0.7 }}>
            Analyst_&_Strategist
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60px' }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ height: '1px', background: '#fff', margin: '2.5rem 0', opacity: 0.3 }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ maxWidth: '500px', fontSize: '1rem', color: '#fff', lineHeight: 1.6, opacity: 0.6 }}
          >
            Decoding complex patterns into actionable growth. 
            Bridging the gap between raw data flows and human-centric community strategy.
          </motion.p>

          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '4rem' }}>
            <motion.a
              href="#projects"
              whileHover={{ backgroundColor: '#fff', color: '#000' }} 
              style={{ 
                color: '#fff', 
                border: '1px solid #fff', 
                padding: '1rem 2.5rem', 
                cursor: 'none', 
                fontFamily: 'monospace', 
                fontSize: '0.8rem', 
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              EXPLORE_DATA()
            </motion.a>
            <motion.a
              href="#resume"
              whileHover={{ opacity: 1 }} 
              style={{ 
                color: '#fff', 
                padding: '1rem 0', 
                cursor: 'none', 
                fontFamily: 'monospace', 
                fontSize: '0.8rem', 
                opacity: 0.5, 
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
            >
              FETCH_RESUME_DATA
            </motion.a>
          </div>
        </motion.div>

        {/* Right Photo (Holographic Blend) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{ 
            position: 'relative', 
            maxWidth: '380px', 
            justifySelf: 'center',
            mixBlendMode: 'screen',
            filter: 'contrast(1.3) brightness(1.1)'
          }}
        >
          <img 
            src="/images/profile.jpg" 
            alt="Nithin S"
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block'
            }}
          />

          {/* Holographic Pulse Overlay */}
          <motion.div 
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'radial-gradient(circle at 50% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)',
              zIndex: 2,
              pointerEvents: 'none'
            }} 
          />
        </motion.div>

      </div>
    </section>
  );
}
