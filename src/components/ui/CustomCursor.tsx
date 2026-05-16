'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [hoveredData, setHoveredData] = useState<string | null>(null);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target as HTMLElement;
      const metadata = target.closest('[data-metadata]')?.getAttribute('data-metadata');
      setHoveredData(metadata || null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      {/* Precision Crosshair */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Horizontal Line */}
        <motion.div 
          animate={{ width: hoveredData ? 60 : 30 }}
          style={{ height: '1px', background: '#fff', position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%' }} 
        />
        {/* Vertical Line */}
        <motion.div 
          animate={{ height: hoveredData ? 60 : 30 }}
          style={{ width: '1px', background: '#fff', position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%' }} 
        />
        
        {/* Central HUD Circle */}
        <motion.div
          animate={{ 
            scale: hoveredData ? 1.5 : 1,
            rotate: hoveredData ? 90 : 0
          }}
          style={{
            width: '20px',
            height: '20px',
            border: '1px solid #fff',
            borderRadius: '0', // Pure sharp corners
            position: 'absolute',
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
          }}
        />

        {/* Metadata HUD */}
        {hoveredData && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 35 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              x: '-50%',
              backgroundColor: '#fff',
              padding: '2px 8px',
              color: '#000',
              fontSize: '0.6rem',
              fontFamily: 'monospace',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              fontWeight: 700
            }}
          >
            {hoveredData}
          </motion.div>
        )}
      </motion.div>

      {/* Trailing Dot */}
      <motion.div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          width: '4px',
          height: '4px',
          background: '#fff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
