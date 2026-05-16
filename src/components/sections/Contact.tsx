'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: Mail, label: "Email", href: "mailto:marvelnithin123@gmail.com" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/nithin-s" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com/in/nithin-s" },
  { icon: FaYoutube, label: "YouTube", href: "https://youtube.com/@nithin-s" },
  { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/nithin_s" }
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  return (
    <Section id="contact">
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        
        {/* Left Side: Text & Socials */}
        <div>
          <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1 }}>Get_In_Touch</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', opacity: 0.6, lineHeight: 1.6 }}>
            Interested in data storytelling or community building? Let's connect and create something impactful.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
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
                  gap: '0.8rem', 
                  color: 'rgba(255,255,255,0.4)', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '1.5rem 1rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'none'
                }}
              >
                <social.icon size={20} />
                <span style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.1em' }}>
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
        <div className="glass" style={{ padding: '3rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
              >
                <CheckCircle size={48} style={{ color: '#fff', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Transmission Received</h3>
                <p style={{ opacity: 0.6, fontSize: '0.9rem', fontFamily: 'monospace' }}>Your message has been encrypted and sent. Expect a response soon.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.5, letterSpacing: '0.1em' }}>SENDER_NAME</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: '#fff', outline: 'none', fontFamily: 'monospace' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.5, letterSpacing: '0.1em' }}>SENDER_EMAIL</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: '#fff', outline: 'none', fontFamily: 'monospace' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.6rem', fontFamily: 'monospace', opacity: 0.5, letterSpacing: '0.1em' }}>MESSAGE_PAYLOAD</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem', color: '#fff', outline: 'none', fontFamily: 'monospace', resize: 'none' }}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={formState === 'submitting'}
                  whileHover={{ backgroundColor: '#fff', color: '#000' }}
                  whileTap={{ scale: 0.98 }}
                  style={{ 
                    marginTop: '1rem', 
                    padding: '1.2rem', 
                    background: 'transparent', 
                    border: '1px solid #fff', 
                    color: '#fff', 
                    fontWeight: 700, 
                    fontSize: '0.8rem', 
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
                    <><Send size={16} /> SEND_TRANSMISSION()</>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <footer style={{ marginTop: '8rem', textAlign: 'center', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace', letterSpacing: '0.1em' }}>
        © {new Date().getFullYear()} NS_SYSTEM_LOG // STRICTLY_NO_GENERIC
      </footer>
    </Section>
  );
}
