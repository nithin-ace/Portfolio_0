'use client';

import Section from '../ui/Section';
import { motion } from 'framer-motion';
import ParallaxLayer from '../ui/ParallaxLayer';

const softSkills = [
  "Data-Driven Decision Making", "Exploratory Data Analysis (EDA)", 
  "Analytical Mindset", "Strategic Thinking", "Attention to Detail", 
  "Data Storytelling", "Pattern Recognition", "Critical Thinking", "Ownership & Initiative"
];

const techSkills = [
  { name: "Excel / Sheets", details: ["Pivot tables", "VLOOKUP/XLOOKUP", "Charts", "Data cleaning"] },
  { name: "SQL", details: ["Joins", "Grouping", "Aggregation", "Querying"] },
  { name: "Python", details: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { name: "Visualization", details: ["Power BI", "Tableau", "KPI Dashboards"] },
  { name: "Statistics", details: ["Probability", "Correlation", "Hypothesis testing"] },
  { name: "AI Dev Stack", details: ["LLM Prompting", "Copilot", "Vibe-Coding"] }
];

const learningSkills = [
  { name: "dbt", status: "In-Progress", depth: "Analytical Engineering" },
  { name: "Snowflake", status: "Learning", depth: "Cloud Data Warehousing" }
];

import dynamic from 'next/dynamic';

const SkillCanvas = dynamic(() => import('../canvas/SkillCanvas'), { ssr: false });

export default function Skills() {
  return (
    <Section id="skills">
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        {/* Parallax watermark */}
        <ParallaxLayer speed={0.35} style={{ position: 'absolute', top: '5%', left: '-5%', pointerEvents: 'none', zIndex: -1, overflow: 'visible' }}>
          <div style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 900, opacity: 0.015, color: '#fff', fontFamily: 'var(--font-header)', whiteSpace: 'nowrap' }}>
            ANALYTICS_ENGINE
          </div>
        </ParallaxLayer>

        <div style={{ marginBottom: '4rem' }}>
          <ParallaxLayer speed={0.15} style={{ overflow: 'visible' }}>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: '1rem' }}>Analytics_Stack</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '3rem' }}>Interactive map of my technical universe. Click and drag to explore connections.</p>
          </ParallaxLayer>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <div className="glass" style={{ minHeight: '450px', overflow: 'hidden' }}>
            <SkillCanvas />
          </div>

          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>The Analyst Mindset</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {softSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  data-metadata="Soft Skill"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="glass"
                  style={{ 
                    padding: '1rem', 
                    fontSize: '0.9rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center',
                    minHeight: '80px'
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning Section */}
        <div style={{ marginTop: '6rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#fff', opacity: 0.5, fontFamily: 'monospace', letterSpacing: '0.2em' }}>
            [ SYSTEM_UPGRADES: IN_PROGRESS ]
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {learningSkills.map((skill, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass" 
                style={{ padding: '1.5rem', borderLeft: '2px solid #fff' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{skill.name}</span>
                  <span style={{ fontSize: '0.6rem', padding: '2px 6px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' }}>{skill.status}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'monospace' }}>
                  TARGET_DEPTH: {skill.depth}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </Section>
  );
}
