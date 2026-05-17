'use client';

import Section from '../ui/Section';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Radio, PenTool } from 'lucide-react';
import React from 'react';

export default function Community() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const xCore = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const yCore = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  const xRing1 = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const yRing1 = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  const xRing2 = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const yRing2 = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  const xRing3 = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const yRing3 = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'center' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
              perspective: '1000px'
            }}
          >
            {/* 1. Back Rings (Behind Planet) */}
            <motion.div
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                rotateX: 60,
                rotateY: -15,
                x: xRing1,
                y: yRing1,
                zIndex: 1,
              }}
            >
              {/* Saturn Main Dusty Disk */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, transparent 38%, rgba(245,197,126,0.06) 38%, rgba(245,197,126,0.18) 48%, transparent 49%, rgba(245,197,126,0.25) 50%, rgba(245,197,126,0.12) 60%, transparent 61%, rgba(245,197,126,0.08) 63%, transparent 65%)',
                  boxShadow: '0 0 20px rgba(245,197,126,0.05) inset'
                }}
              />
              {/* Subtle Tech Overlay Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '0.8rem',
                  borderRadius: '50%',
                  border: '1px dashed rgba(245,197,126,0.2)'
                }}
              />
            </motion.div>

            {/* 2. Logo Core (The "Planet" in the middle) */}
            <motion.div
              style={{
                position: 'relative',
                zIndex: 2,
                width: '105px',
                height: '105px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                x: xCore,
                y: yCore,
                top: '21px' // Shunts the logo down so it nests deeply inside the front ring equator
              }}
            >
              <motion.img
                whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.3))' }}
                src="/images/logo-transparent.png"
                alt="Podevs Logo"
                style={{
                  width: '140%',
                  height: 'auto',
                  transition: 'filter 0.3s ease, transform 0.3s ease'
                }}
              />
            </motion.div>

            {/* 3. Front Rings (In Front of Planet, clipped to only show bottom half) */}
            <motion.div
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                rotateX: 60,
                rotateY: -15,
                x: xRing1,
                y: yRing1,
                zIndex: 3, // Sit cleanly on top of the logo
                clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
              }}
            >
              {/* Saturn Main Dusty Disk */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, transparent 38%, rgba(245,197,126,0.06) 38%, rgba(245,197,126,0.22) 48%, transparent 49%, rgba(245,197,126,0.3) 50%, rgba(245,197,126,0.15) 60%, transparent 61%, rgba(245,197,126,0.08) 63%, transparent 65%)',
                  boxShadow: '0 0 20px rgba(245,197,126,0.05) inset'
                }}
              />
              {/* Subtle Tech Overlay Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '0.8rem',
                  borderRadius: '50%',
                  border: '1px dashed rgba(245,197,126,0.45)'
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
