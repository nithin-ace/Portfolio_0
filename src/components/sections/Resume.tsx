'use client';

import Section from '../ui/Section';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';

const education = [
  {
    title: "Bachelor of Computer Science",
    institution: "Dharmamurthi Rao Bahadur Calavala Cunnan Chetty Hindu College",
    period: "2023 - 2026",
    details: ["Percentage: 45.5", "Strong foundation in practical knowledge", "Hands-on projects & concept application"]
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "SRM Nightingale School",
    period: "2021 - 2023",
    details: ["Percentage: 64.7", "Focused on Mathematics & Logic"]
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    institution: "SRM Nightingale School, Chennai-33",
    period: "2021",
    details: [
      "Academic Skill Development",
      "Multi-Subject Interest",
      "Foundational Problem-Solving"
    ]
  }
];

const experience = [
  {
    role: "Graphic Designer (Intern)",
    company: "OneYes InfoTech Solutions Pvt.Ltd",
    period: "2025",
    details: ["UI/UX Design principles", "Created visually appealing designs", "Attention to detail & creativity"]
  },
  {
    role: "Web Developer (Intern)",
    company: "S-Logix (OPC)",
    period: "2024",
    details: ["Building & structuring web pages", "Responsive design & user-friendly layouts", "Problem-solving & debugging"]
  },
  {
    role: "Strategist",
    company: "PODEVS COMMUNITY",
    period: "2024 - Present",
    details: ["Building community plans", "Goal-oriented strategy", "Member engagement & growth"]
  }
];

export default function Resume() {
  return (
    <Section id="resume">
      <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Career Path</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
            <Briefcase className="text-muted" /> Experience
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '2rem' }}>
            {experience.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div style={{ position: 'absolute', left: '-2.4rem', width: '0.8rem', height: '0.8rem', borderRadius: '50%', background: 'var(--accent)', marginTop: '0.4rem' }} />
                <h4 style={{ color: '#fff' }}>{exp.role}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{exp.company} | {exp.period}</p>
                <ul style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)', paddingLeft: '1.2rem' }}>
                  {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
            <GraduationCap className="text-muted" /> Education
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '2rem' }}>
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div style={{ position: 'absolute', left: '-2.4rem', width: '0.8rem', height: '0.8rem', borderRadius: '50%', background: 'var(--glass-border)', marginTop: '0.4rem' }} />
                <h4 style={{ color: '#fff' }}>{edu.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{edu.institution} | {edu.period}</p>
                <ul style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)', paddingLeft: '1.2rem' }}>
                  {edu.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            <Award /> Achievements
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
            <li style={{ fontSize: '0.9rem' }}>🥇 Gold Medal — Computer Olympiad</li>
            <li style={{ fontSize: '0.9rem' }}>🥉 Bronze Medal — Mathematics Olympiad</li>
            <li style={{ fontSize: '0.9rem' }}>📄 Research Papers at National & International conferences</li>
          </ul>
        </div>

        <div className="glass" style={{ padding: '2rem' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
            <CheckCircle /> Certifications
          </h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
            <li style={{ fontSize: '0.9rem' }}>Data Analytics · Python · SQL</li>
            <li style={{ fontSize: '0.9rem' }}>IECD cert — Bharathidasan University (First Class)</li>
          </ul>
        </div>
      </div>

      {/* Resume Download Action */}
      <div style={{ marginTop: '6rem', display: 'flex', justifyContent: 'center' }}>
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '1.5rem 4rem',
            border: '1px solid #fff',
            color: '#fff',
            textDecoration: 'none',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            letterSpacing: '0.2em',
            transition: 'all 0.3s ease',
            cursor: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <span>DOWNLOAD_FULL_RESUME.pdf</span>
          <span style={{ opacity: 0.5 }}>[1.2 MB]</span>
        </motion.a>
      </div>
    </Section>
  );
}
