'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { name: 'Overview', href: '#hero' },
    { name: 'Analytics Stack', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Community', href: '#community' },
    { name: 'Beyond', href: '#hobbies' },
    { name: 'Resume', href: '#resume' }
  ];

  return (
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
        padding: '0 3rem',
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* System Logo / ID */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
        <img
          src="/images/ns-logo.png"
          alt="NS Logo"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        />
        <span style={{ fontFamily: 'var(--font-header)', fontSize: '0.8rem', letterSpacing: '0.2em', fontWeight: 700 }}>
          NS_SYSTEM_v1.0
        </span>
      </div>

      {/* Center Navigation */}
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

      {/* Right Action */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right', fontFamily: 'monospace', fontSize: '0.6rem', opacity: 0.3 }}>
          <span>LOC: CHENNAI_IN</span>
          <span>SYSTEM: SECURE</span>
        </div>
        <motion.a
          href="#contact"
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
      </div>
    </motion.nav>
  );
}
