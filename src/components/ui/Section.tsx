'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`portfolio-section ${className || ''}`}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {children}
    </motion.section>
  );
}
