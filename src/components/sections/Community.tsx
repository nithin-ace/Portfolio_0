'use client';

import Section from '../ui/Section';
import { motion } from 'framer-motion';

export default function Community() {
  return (
    <Section id="community">
      <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Community</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Left Side: Photo/Logo Dock (Frameless) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          style={{ 
            width: '200px',
            height: '200px',
            position: 'relative', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            justifySelf: 'center',
            cursor: 'none'
          }}
        >
          {/* Logo with Radial Mask to hide box edges */}
          <motion.img 
            src="/images/logo.jpeg" 
            alt="Podevs Logo"
            whileHover={{ 
              filter: 'brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.4))' 
            }}
            style={{ 
              width: '100%', 
              height: 'auto', 
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
              maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
              transition: 'all 0.3s ease'
            }}
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div style={{ fontSize: '0.8rem', color: '#fff', opacity: 0.5, fontFamily: 'monospace', marginBottom: '1rem' }}>
            // GROUP: PODEVS_COMMUNITY
          </div>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Strategist & Idea Person</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#ccc', marginBottom: '2rem' }}>
            Joined the Podevs community in its early stages (1 year established) to spearhead digital growth. 
            I focus on the "Why" before the "How"—developing content strategies for Instagram and building digital interfaces through <strong>Vibe Coding</strong>.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div data-metadata="Impact">
              <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700 }}>Vibe Dev</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Official Platform</span>
            </div>
            <div data-metadata="Leadership">
              <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 700 }}>IG Strategy</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Growth Lead</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
