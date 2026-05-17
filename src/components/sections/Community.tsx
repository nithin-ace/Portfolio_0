'use client';

import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Radio, PenTool } from 'lucide-react';
import React from 'react';
import ParallaxLayer from '../ui/ParallaxLayer';

export default function Community() {
  return (
    <Section id="community">
      <div style={{ position: 'relative', isolation: 'isolate', marginTop: '2rem' }}>

        <div style={{ position: 'absolute', top: '0', left: '-5%', fontSize: '10rem', fontWeight: 900, opacity: 0.015, pointerEvents: 'none', color: '#fff', fontFamily: 'var(--font-header)', zIndex: -1 }}>
          NODE_LINK
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <div style={{ width: '40px', height: '1px', background: '#fff', opacity: 0.2 }} />
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-header)', fontWeight: 700, letterSpacing: '2px' }}>Network / Community</h2>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}
        >
          <ParallaxLayer speed={0.2} style={{ overflow: 'visible' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'crosshair',
                padding: '2rem',
                width: '250px',
                height: '250px',
                margin: '0 auto',
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* 1. Atom Orbit (0 deg) */}
              <motion.div style={{ position: 'absolute', width: '300px', height: '300px', rotate: 0, transformStyle: 'preserve-3d' }}>
                <div style={{ position: 'absolute', inset: 0, transform: 'rotateX(75deg)', transformStyle: 'preserve-3d' }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(147,197,253,0.3)' }} />
                  <motion.div animate={{ rotateZ: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} style={{ position: 'absolute', inset: 0 }}>
                    <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#60a5fa', boxShadow: '0 0 15px #60a5fa, 0 0 30px #60a5fa' }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* 2. Atom Orbit (60 deg) */}
              <motion.div style={{ position: 'absolute', width: '300px', height: '300px', rotate: 60, transformStyle: 'preserve-3d' }}>
                <div style={{ position: 'absolute', inset: 0, transform: 'rotateX(75deg)', transformStyle: 'preserve-3d' }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(147,197,253,0.3)' }} />
                  <motion.div animate={{ rotateZ: 360 }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }} style={{ position: 'absolute', inset: 0 }}>
                    <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#93c5fd', boxShadow: '0 0 15px #93c5fd, 0 0 30px #93c5fd' }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* 3. Atom Orbit (-60 deg) */}
              <motion.div style={{ position: 'absolute', width: '300px', height: '300px', rotate: -60, transformStyle: 'preserve-3d' }}>
                <div style={{ position: 'absolute', inset: 0, transform: 'rotateX(75deg)', transformStyle: 'preserve-3d' }}>
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(147,197,253,0.3)' }} />
                  <motion.div animate={{ rotateZ: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }} style={{ position: 'absolute', inset: 0 }}>
                    <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#bfdbfe', boxShadow: '0 0 15px #bfdbfe, 0 0 30px #bfdbfe' }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* 4. Logo Core (Nucleus) */}
              <motion.div
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  translateZ: 0 // Explicitly anchor it at Z=0
                }}
              >
                <motion.img
                  whileHover={{ scale: 1.1, filter: 'drop-shadow(0 0 50px rgba(147,197,253,0.6))' }}
                  src="/images/logo-transparent.png"
                  alt="Podevs Logo"
                  style={{
                    width: '130%',
                    height: 'auto',
                    transition: 'filter 0.3s ease, transform 0.3s ease'
                  }}
                />
              </motion.div>
            </motion.div>
          </ParallaxLayer>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'block', width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }} />
                <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#fff', opacity: 0.8, letterSpacing: '0.1em' }}>UPLINK: ACTIVE</span>
              </div>
              <span style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#fff', opacity: 0.5, letterSpacing: '0.1em' }}>GRP // PODEVS</span>
            </div>

            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-header)', fontWeight: 700, lineHeight: 1.1 }}>
              Strategist &<br />Web Builder.
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#fff', opacity: 0.6, fontFamily: 'var(--font-body)' }}>
                <span style={{ color: '#fff', fontWeight: 700 }}>THE COMMUNITY:</span> Podevs is an EdTech initiative dedicated to accessible learning. We provide free tech education through interactive workshops, hackathons, and YouTube. To support this mission, we also operate a premium studio offering professional, paid web development, deployment, and hosting services to clients.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#fff', opacity: 0.6, fontFamily: 'var(--font-body)' }}>
                <span style={{ color: '#fff', fontWeight: 700 }}>MY ROLE:</span> I act as the strategic core and idea engine. I focus on community growth, conceptualizing campaigns, and spearheading our upcoming content creation. When we need digital infrastructure, I bridge the gap from idea to reality—shaping our community platforms behind the scenes.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.3)' }}
                style={{ padding: '1.2rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative', transition: 'all 0.3s ease' }}
              >
                <Radio size={16} style={{ opacity: 0.5, marginBottom: '0.8rem' }} />
                <span style={{ display: 'block', fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.5, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>FOCUS_01</span>
                <span style={{ display: 'block', fontSize: '1.05rem', fontWeight: 600, fontFamily: 'var(--font-header)', marginBottom: '0.2rem' }}>Strategic Ideation</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Community Growth & Concepts</span>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: '#fff', opacity: 0.2 }} />
              </motion.div>

              <motion.div
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.3)' }}
                style={{ padding: '1.2rem', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)', position: 'relative', transition: 'all 0.3s ease' }}
              >
                <PenTool size={16} style={{ opacity: 0.5, marginBottom: '0.8rem' }} />
                <span style={{ display: 'block', fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.5, marginBottom: '0.5rem', letterSpacing: '0.1em' }}>FOCUS_02</span>
                <span style={{ display: 'block', fontSize: '1.05rem', fontWeight: 600, fontFamily: 'var(--font-header)', marginBottom: '0.2rem' }}>Digital Architect</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>Synthesizing Ideas & Infrastructure</span>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: '#fff', opacity: 0.2 }} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
