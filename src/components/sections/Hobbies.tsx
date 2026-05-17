'use client';

import Section from '../ui/Section';
import { motion } from 'framer-motion';
import ParallaxLayer from '../ui/ParallaxLayer';
import { 
  Search, 
  FlaskConical, 
  Music, 
  GraduationCap, 
  Telescope, 
  Zap, 
  Sword, 
  TrendingUp 
} from 'lucide-react';

const hobbies = [
  { icon: Search, label: "Data Exploration", desc: "Exploring data to uncover patterns, insights, and hidden stories." },
  { icon: FlaskConical, label: "Scientific Research", desc: "Digging deep into ideas and trends to build clarity and understanding." },
  { icon: Music, label: "Music", desc: "Music that fuels focus, creativity, and long hours of deep work." },
  { icon: GraduationCap, label: "Teaching", desc: "Breaking down complex ideas to make learning simple and accessible." },
  { icon: Telescope, label: "Stargazing", desc: "Finding perspective and curiosity in the vastness beyond." },
  { icon: Zap, label: "Marvel", desc: "Inspired by storytelling, strategy, and larger-than-life thinking." },
  { icon: Sword, label: "Martial Arts", desc: "Building discipline, focus, and mental resilience through practice." },
  { icon: TrendingUp, label: "Content & Strategy", desc: "Creating meaningful content and shaping ideas into impactful strategies." }
];

export default function Hobbies() {
  return (
    <Section id="hobbies">
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        {/* Parallax watermark */}
        <ParallaxLayer speed={0.3} style={{ position: 'absolute', top: '-5%', right: '-3%', pointerEvents: 'none', zIndex: -1, overflow: 'visible' }}>
          <div style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 900, opacity: 0.015, color: '#fff', fontFamily: 'var(--font-header)', whiteSpace: 'nowrap' }}>
            BEYOND_DATA
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.12} style={{ overflow: 'visible', marginBottom: '4rem' }}>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>Beyond_Data</h2>
        </ParallaxLayer>
      
        <div className="hobbies-grid">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ 
                backgroundColor: 'rgba(255,255,255,0.03)',
                color: '#fff' 
              }}
              style={{ 
                padding: '2rem 1.5rem', 
                textAlign: 'center', 
                transition: 'all 0.3s ease',
                backgroundColor: 'var(--background)',
                border: '1px solid transparent',
                cursor: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '160px'
              }}
            >
              <hobby.icon size={20} style={{ marginBottom: '1.2rem', opacity: 0.8 }} />
              <h3 style={{ fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '0.1em', fontWeight: 700 }}>
                {hobby.label.toUpperCase()}
              </h3>
              <p style={{ fontSize: '0.65rem', opacity: 0.5, fontFamily: 'monospace', lineHeight: 1.4, maxWidth: '200px' }}>
                // {hobby.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
