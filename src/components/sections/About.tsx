'use client';

import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { Target, Zap, Database, Terminal, Shield } from 'lucide-react';

export default function About() {
  const fullText = "I am an aspiring Data Analyst who looks beyond the spreadsheet. I believe that data is a digital echo of human behavior. My mission is to translate these raw signals into actionable, high-impact community strategies.";
  const words = fullText.split(' ');

  return (
    <Section id="about">
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        {/* Background Cyber Elements */}
        <div style={{ position: 'absolute', top: '-15%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)', zIndex: -1 }} />
        <div style={{ position: 'absolute', top: '10%', right: '0%', fontSize: '12rem', fontWeight: 900, opacity: 0.015, pointerEvents: 'none', color: '#fff', fontFamily: 'var(--font-header)', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          SYSTEM_CORE
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'flex-start' }}>
          
          {/* Left: Tactical Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: 'relative' }}
          >
            {/* HUD Bracket */}
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '20px', height: '20px', borderTop: '2px solid rgba(255,255,255,0.2)', borderLeft: '2px solid rgba(255,255,255,0.2)' }} />
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', opacity: 0.7, fontFamily: 'monospace', marginBottom: '3rem', fontSize: '0.75rem', letterSpacing: '0.2em' }}>
              <Terminal size={14} />
              <span>[ USER_PROFILE_ACCESS: GRANTED ]</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', lineHeight: 1.1, fontFamily: 'var(--font-header)', fontWeight: 700 }}>
              Decoding the <br />
              <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Human Narrative.</span>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ display: 'inline-block', width: '20px', height: '40px', background: '#fff', marginLeft: '10px', verticalAlign: 'middle' }}
              />
            </h2>
            
            <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid rgba(255,255,255,0.1)', marginBottom: '3rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#fff', opacity: 0.7, fontFamily: 'var(--font-body)' }}>
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    style={{ display: 'inline-block', marginRight: '0.25em' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', color: '#fff', opacity: 0.4, fontFamily: 'monospace', letterSpacing: '0.1em' }}>&gt; CORE_PHILOSOPHY</span>
                <span style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'var(--font-header)', letterSpacing: '1px' }}>Why <span style={{ opacity: 0.5 }}>&gt;</span> How</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.65rem', color: '#fff', opacity: 0.4, fontFamily: 'monospace', letterSpacing: '0.1em' }}>&gt; SPECIALIZATION</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-header)', letterSpacing: '1px' }}>Data Logic<br/><span style={{opacity: 0.5}}>&</span> AI Web Dev</span>
              </div>
            </div>
            
            {/* HUD Bracket */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '20px', height: '20px', borderBottom: '2px solid rgba(255,255,255,0.2)', borderRight: '2px solid rgba(255,255,255,0.2)' }} />
          </motion.div>

          {/* Right: Diagnostic Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { 
                icon: Database, 
                title: "Pure Data Analytics", 
                desc: "Extracting narratives from raw data. No AI shortcuts—just rigorous event-log analysis, SQL, and human-centric pattern recognition.",
                status: "MANUAL",
                metric: "100%_LOGIC"
              },
              { 
                icon: Zap, 
                title: "AI-Augmented Web Dev", 
                desc: "Building high-fidelity web experiences at warp speed. I leverage advanced AI to 'vibe-code' and bring digital products to life instantly.",
                status: "ACTIVE",
                metric: "WARP_SPEED"
              },
              { 
                icon: Target, 
                title: "Strategic Synthesis", 
                desc: "Bridging the gap between data insights and user interfaces. I turn analytical findings into interactive, high-impact platforms.",
                status: "SYNERGIZED",
                metric: "OPTIMIZED"
              }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.2)' }}
                style={{ 
                  padding: '2rem', 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'crosshair',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Hover scanline effect */}
                <motion.div 
                  initial={{ top: '-100%' }}
                  whileHover={{ top: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  style={{ position: 'absolute', left: 0, width: '100%', height: '2px', background: 'rgba(255,255,255,0.3)', filter: 'blur(2px)' }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                    <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                      <val.icon size={22} color="#fff" style={{ opacity: 0.8 }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 600, fontFamily: 'var(--font-header)', letterSpacing: '1px' }}>{val.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.3rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: val.status === 'ACTIVE' ? '#4ade80' : '#fff', opacity: val.status === 'ACTIVE' ? 1 : 0.5 }} />
                        <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.5, letterSpacing: '0.1em' }}>STATUS: {val.status}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ display: 'block', fontSize: '0.7rem', fontFamily: 'monospace', opacity: 0.3, marginBottom: '0.2rem' }}>SYS.METRIC</span>
                    <span style={{ fontSize: '1rem', fontFamily: 'monospace', fontWeight: 700, opacity: 0.8 }}>{val.metric}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', opacity: 0.6, lineHeight: 1.6, paddingLeft: '4.5rem', fontFamily: 'var(--font-body)' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
