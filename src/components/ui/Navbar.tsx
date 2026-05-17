'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { name: 'Hero', href: '#hero' },
    { name: 'Overview', href: '#about' },
    { name: 'Analytics Stack', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Beyond', href: '#hobbies' },
    { name: 'Resume', href: '#resume' }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '0 1.5rem' : '0 3rem',
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 100%)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* System Logo / ID */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <span style={{ fontFamily: 'var(--font-header)', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 700 }}>
            NS_SYSTEM_v1.0
          </span>
        </div>

        {/* Center Navigation - Desktop Only */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navItems.map((item, i) => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <a
                  href={item.href}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.7rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    opacity: 0.5,
                    transition: 'all 0.3s ease'
                  }}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.5';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item.name}
                </a>
                {i !== navItems.length - 1 && (
                  <span style={{ width: '1px', height: '10px', background: 'rgba(255,255,255,0.1)' }} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Right Action / Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'flex-end' }}>
          {!isMobile ? (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right', fontFamily: 'monospace', fontSize: '0.6rem', opacity: 0.3 }}>
                <span>LOC: CHENNAI_IN</span>
                <span>SYSTEM: SECURE</span>
              </div>
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.4rem 0.8rem',
                  border: '1px solid #fff',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.6rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease',
                  cursor: 'none'
                }}
              >
                CONNECT()
              </motion.a>
            </>
          ) : (
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.4rem 0.8rem',
                border: '1px solid #fff',
                backgroundColor: isOpen ? '#fff' : 'transparent',
                color: isOpen ? '#000' : '#fff',
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                cursor: 'none',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {isOpen ? 'CLOSE()' : 'MENU()'}
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* Futuristic Fullscreen Mobile/Tablet Terminal Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#050505',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              overflow: 'hidden'
            }}
          >
            {/* Decorative Grid Lines */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.05, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', alignItems: 'center', zIndex: 1, width: '100%' }}>
              <div style={{ fontSize: '0.6rem', color: '#fff', opacity: 0.3, fontFamily: 'monospace', marginBottom: '1rem', letterSpacing: '0.2em' }}>
                // INITIALIZING_MOBILE_ROUTING...
              </div>

              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavClick(e, item.href);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.letterSpacing = '0.2em';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                    e.currentTarget.style.letterSpacing = '0.15em';
                  }}
                >
                  &gt; {item.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 + 0.05 }}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.8rem 2rem',
                  border: '1px solid #fff',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  letterSpacing: '0.15em',
                  cursor: 'none',
                  transition: 'all 0.3s ease'
                }}
                onClick={(e) => {
                  setIsOpen(false);
                  handleNavClick(e, '#contact');
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                CONNECT()
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
