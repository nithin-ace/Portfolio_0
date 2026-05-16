'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  "INITIALIZING_CORE_SYSTEM_v1.0...",
  "ESTABLISHING_SECURE_HANDSHAKE...",
  "LOADING_ANALYTICAL_STACK...",
  "MOUNTING_DATA_STREAMS...",
  "DECODING_HUMAN_NARRATIVE...",
  "AUTHORIZING_USER: NITHIN_S...",
  "SYSTEM_STATUS: OPTIMAL",
  "READY_FOR_EXPLORATION."
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [currentLog, setCurrentLog] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress increment
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Log rotation
    const logInterval = setInterval(() => {
      setCurrentLog(prev => {
        if (prev >= bootLogs.length - 1) {
          clearInterval(logInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    // Completion timeout
    const timeout = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontFamily: 'monospace', fontSize: '0.7rem', opacity: 0.5 }}>
          <span>NS_SYSTEM_BOOT_LOG</span>
          <span>{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '2rem', position: 'relative' }}>
          <motion.div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              height: '100%', 
              backgroundColor: '#fff',
              width: `${progress}%` 
            }} 
          />
        </div>

        {/* Terminal Text */}
        <div style={{ height: '1.2rem', overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLog}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#fff', letterSpacing: '0.1em' }}
            >
              &gt; {bootLogs[currentLog]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Grid Lines */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.05, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
    </motion.div>
  );
}
