'use client';

import { useState, useEffect } from 'react';
import Section from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import ParallaxLayer from '../ui/ParallaxLayer';

const socials = [
  { icon: Mail, label: "Email", href: "mailto:marvelnithin123@gmail.com" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/nithin-s" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/nithin-s" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@nithin-s" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/nithin_s" }
];

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [isShortMobile, setIsShortMobile] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsShortMobile(window.innerHeight < 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Transmission Failed');
      }
    } catch (error) {
      alert('System Error: Could not execute transmission. Check console for logs.');
      setFormState('idle');
    }

    setTimeout(() => {
      if (formState === 'success') setFormState('idle');
    }, 5000);
  };

  const isCompact = isMobile || isShortMobile;

  return (
    <Section id="contact">
      {/* Parallax watermark */}
      <div style={{ position: 'relative', isolation: 'isolate' }}>
        <ParallaxLayer speed={0.25} style={{ position: 'absolute', top: '-5%', left: '-3%', pointerEvents: 'none', zIndex: -1, overflow: 'visible' }}>
          <div style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', fontWeight: 900, opacity: 0.015, color: '#fff', fontFamily: 'var(--font-header)', whiteSpace: 'nowrap' }}>
            CONNECT
          </div>
        </ParallaxLayer>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: isCompact ? '2rem' : '4rem' }}>

        {/* Left Side: Text & Socials */}
        <div>
          <ParallaxLayer speed={0.1} style={{ overflow: 'visible', marginBottom: '1.5rem' }}>
            <h2 className="text-gradient" style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)', lineHeight: 1 }}>Get_In_Touch</h2>
          </ParallaxLayer>
          <p style={{ fontSize: '1rem', marginBottom: isCompact ? '2rem' : '3rem', opacity: 0.6, lineHeight: 1.6 }}>
            Interested in data storytelling or community building? Let's connect and create something impactful.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.8rem', marginBottom: isCompact ? '2.5rem' : '4rem' }}>
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff' }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '1.2rem 0.8rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'none'
                }}
              >
                <social.icon size={18} />
                <span style={{ fontSize: '0.55rem', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
                  {social.label.toUpperCase()}
                </span>
              </motion.a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.3 }}>
            <Terminal size={14} />
            <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.1em' }}>SYSTEM_ID: NS_SECURE_COMMS</span>
          </div>
        </div>

        {/* Right Side: Real Contact Form */}
        <div className="glass" style={{ padding: isCompact ? '1.5rem' : '3rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem 0' }}
              >
                <CheckCircle size={40} style={{ color: '#fff', marginBottom: '1.2rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Transmission Received</h3>
                <p style={{ opacity: 0.6, fontSize: '0.8rem', fontFamily: 'monospace' }}>Your message has been encrypted and sent. Expect a response soon.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                style={{ display: 'flex', flexDirection: 'column', gap: isCompact ? '1rem' : '1.5rem' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.55rem', fontFamily: 'monospace', opacity: 0.5, letterSpacing: '0.1em' }}>SENDER_NAME</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: isCompact ? '0.75rem' : '1rem', color: '#fff', outline: 'none', fontFamily: 'monospace', fontSize: '0.8rem' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.55rem', fontFamily: 'monospace', opacity: 0.5, letterSpacing: '0.1em' }}>SENDER_EMAIL</label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: isCompact ? '0.75rem' : '1rem', color: '#fff', outline: 'none', fontFamily: 'monospace', fontSize: '0.8rem' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{ fontSize: '0.55rem', fontFamily: 'monospace', opacity: 0.5, letterSpacing: '0.1em' }}>MESSAGE_PAYLOAD</label>
                  <textarea
                    required
                    rows={isCompact ? 2 : 4}
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: isCompact ? '0.75rem' : '1rem', color: '#fff', outline: 'none', fontFamily: 'monospace', resize: 'none', fontSize: '0.8rem' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === 'submitting'}
                  whileHover={{ backgroundColor: '#fff', color: '#000' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    marginTop: '0.5rem',
                    padding: isCompact ? '1rem' : '1.2rem',
                    background: 'transparent',
                    border: '1px solid #fff',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.2em',
                    cursor: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                  }}
                >
                  {formState === 'submitting' ? (
                    <>ENCRYPTING...</>
                  ) : (
                    <><Send size={14} /> SEND_TRANSMISSION()</>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <footer style={{ marginTop: isCompact ? '5rem' : '8rem', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', letterSpacing: '0.1em', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>// Aspiring Data Analyst · Chennai, India</div>
        <div style={{ opacity: 0.5 }}>© 2026 NITHIN S // NS_SYSTEM_v1.0. ALL RIGHTS RESERVED.</div>
      </footer>
      </div>
    </Section>
  );
}
