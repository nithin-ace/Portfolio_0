'use client';

import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { User, Target, Zap, Activity, Shield, Cpu } from 'lucide-react';

export default function About() {
  return (
    <Section id="about">
      <div style={{ position: 'relative' }}>
        {/* Background Accent */}
        <div style={{ position: 'absolute', top: '-10%', right: '5%', fontSize: '12rem', fontWeight: 900, opacity: 0.02, pointerEvents: 'none', color: '#fff', fontFamily: 'var(--font-header)' }}>
          SUBJECT_01
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          
          {/* Left: Tactical Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', opacity: 0.3, fontFamily: 'monospace', marginBottom: '2rem', fontSize: '0.7rem', letterSpacing: '0.3em' }}>
              <Activity size={14} />
              <span>[ CORE_LOGIC_STREAM ]</span>
            </div>

            <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1 }}>
              Decoding the <br /> Human Narrative.
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#fff', opacity: 0.6, marginBottom: '3rem' }}>
              I am an aspiring Data Analyst who looks beyond the spreadsheet. I believe that data is a digital echo of human behavior. My mission is to translate these raw signals into actionable, high-impact community strategies.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.6rem', color: '#fff', opacity: 0.3, fontFamily: 'monospace', marginBottom: '0.5rem' }}>PHILOSOPHY</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Why &gt; How</span>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                <span style={{ display: 'block', fontSize: '0.6rem', color: '#fff', opacity: 0.3, fontFamily: 'monospace', marginBottom: '0.5rem' }}>SPECIALIZATION</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Vibe-Driven Analytics</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Diagnostic Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { 
                icon: Target, 
                title: "Strategic Precision", 
                desc: "Identifying critical drop-off points through event-log analysis and pattern recognition.",
                status: "OPTIMIZED"
              },
              { 
                icon: Zap, 
                title: "AI-Augmented Dev", 
                desc: "Leveraging advanced AI models to accelerate web development and 'Vibe-Coding,' ensuring rapid deployment of high-fidelity interfaces.",
                status: "ACTIVE"
              },
              { 
                icon: Shield, 
                title: "System Integrity", 
                desc: "Ensuring data accuracy and logic remain the core foundation of every strategic decision.",
                status: "VERIFIED"
              }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                style={{ padding: '2.5rem', background: 'var(--background)', position: 'relative' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <val.icon size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{val.title}</h3>
                  </div>
                  <span style={{ fontSize: '0.5rem', fontFamily: 'monospace', opacity: 0.3 }}>{val.status}</span>
                </div>
                <p style={{ fontSize: '0.85rem', opacity: 0.5, lineHeight: 1.6 }}>{val.desc}</p>
                
                {/* Decorative scanning line */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '20px', height: '1px', background: '#fff', opacity: 0.2 }} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}
