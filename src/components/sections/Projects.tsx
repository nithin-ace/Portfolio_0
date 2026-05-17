'use client';

import { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Terminal, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';
import ParallaxLayer from '../ui/ParallaxLayer';

// Type definition for Project
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  casestudy: string;
  metadata: string;
}

const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Behavior Engine",
    description: "Deep dive into consumer psychology and transactional data flow.",
    longDescription: "Analyzed 500k+ event logs to map the 'path to purchase'. Identified critical drop-off points using SQL Markov Chains and Python churn modeling. Result: 15% improvement in targeted retargeting accuracy.",
    tech: ["Python", "SQL", "Markov Chains", "Power BI"],
    github: "https://github.com",
    live: "https://example.com",
    casestudy: "https://medium.com",
    metadata: "System: Analytics"
  },
  {
    id: 2,
    title: "Risk-Adjusted Forecaster",
    description: "Predictive modeling for financial volatility and trend detection.",
    longDescription: "Engineered a statistical suite for multi-asset volatility tracking. Implemented ARIMA-GARCH models in Python to predict 30-day market variance with 88% confidence intervals.",
    tech: ["Statistics", "GARCH", "NumPy", "Seaborn"],
    github: "https://github.com",
    live: "https://example.com",
    casestudy: "https://medium.com",
    metadata: "System: Risk"
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;
        if (data && data.length > 0) {
          setProjects(data as Project[]);
        }
      } catch (err) {
        console.warn('Supabase fetch failed, using fallback data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <Section id="projects">
      {/* Parallax watermark */}
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <ParallaxLayer speed={0.3} style={{ position: 'absolute', top: '-5%', right: '-5%', pointerEvents: 'none', zIndex: -1, overflow: 'visible' }}>
          <div style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 900, opacity: 0.015, color: '#fff', fontFamily: 'var(--font-header)', whiteSpace: 'nowrap' }}>
            WORK_LOG
          </div>
        </ParallaxLayer>

      <ParallaxLayer speed={0.12} style={{ overflow: 'visible', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Terminal color="#fff" />
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', margin: 0 }}>Work_Log</h2>
          </div>
          <div style={{ fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.3 }}>
            STATUS: {loading ? 'FETCHING_DATA...' : 'DATABASE_CONNECTED'}
          </div>
        </div>
      </ParallaxLayer>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            data-metadata={project.metadata}
            initial={{ opacity: 0, x: -50, backgroundColor: 'rgba(255,255,255,0)' }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              backgroundColor: 'rgba(255,255,255,0.03)',
              y: -5,
              borderColor: 'rgba(255,255,255,0.2)'
            }}
            style={{ 
              backgroundColor: 'var(--background)',
              padding: isMobile ? '1.8rem' : '2.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              cursor: 'none',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ fontSize: '0.7rem', color: '#fff', fontFamily: 'monospace', opacity: 0.3 }}>[00{project.id}]</div>
            <motion.h3 
              layoutId={`title-${project.id}`} 
              style={{ fontSize: '1.2rem', letterSpacing: '0.05em', color: '#fff' }}
            >
              {project.title}
            </motion.h3>
            <motion.p layoutId={`desc-${project.id}`} style={{ fontSize: '0.85rem', color: '#fff', opacity: 0.6, lineHeight: 1.5 }}>
              {project.description}
            </motion.p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
              {project.tech.map((t, j) => (
                <span key={j} style={{ fontSize: '0.6rem', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '2px 6px', textTransform: 'uppercase', fontFamily: 'monospace', opacity: 0.8 }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ 
              marginTop: '1rem', 
              fontSize: '0.65rem', 
              fontWeight: 700, 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              paddingTop: '1rem', 
              display: 'flex', 
              justifyContent: 'flex-end',
              color: '#fff',
              opacity: 0.5
            }}>
              <span>OPEN_LOG() →</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(15px)' }}
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              style={{ 
                width: '100%', 
                maxWidth: '800px', 
                backgroundColor: 'var(--background)', 
                border: '1px solid #fff',
                padding: isMobile ? '2.5rem 1.5rem' : '4rem', 
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '0'
              }}
            >
              <button 
                onClick={() => setSelectedId(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#fff', cursor: 'none' }}
              >
                <X size={24} />
              </button>

              <div style={{ fontSize: '0.7rem', color: '#fff', fontFamily: 'monospace', marginBottom: '1rem', opacity: 0.5 }}>INITIALIZING_LOG_00{selectedId}...</div>
              
              <motion.h3 layoutId={`title-${selectedId}`} style={{ fontSize: isMobile ? '1.8rem' : '3rem', color: '#fff', marginBottom: '2.5rem', lineHeight: 1.1 }}>
                {selectedProject.title}
              </motion.h3>
              
              <motion.p layoutId={`desc-${selectedId}`} style={{ fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: 1.7, marginBottom: '2.5rem', color: '#fff' }}>
                {selectedProject.longDescription}
              </motion.p>

              <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={selectedProject.casestudy} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2rem', color: '#000', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', textDecoration: 'none', fontWeight: 800, fontSize: '0.8rem', fontFamily: 'monospace', cursor: 'none' }}>
                  <FileText size={20} /> READ_CASE_STUDY
                </a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2rem', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', textDecoration: 'none', border: '1px solid #fff', fontSize: '0.8rem', fontFamily: 'monospace', cursor: 'none' }}>
                  <FaGithub size={20} /> VIEW_SOURCE
                </a>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2rem', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', textDecoration: 'none', fontSize: '0.8rem', fontFamily: 'monospace', cursor: 'none' }}>
                  <ExternalLink size={20} /> LAUNCH_LIVE
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </Section>
  );
}
