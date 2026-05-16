'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/ui/Navbar';
import DataGrid from '@/components/canvas/DataGrid';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Community from '@/components/sections/Community';
import Hobbies from '@/components/sections/Hobbies';
import Resume from '@/components/sections/Resume';
import Contact from '@/components/sections/Contact';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <DataGrid />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Community />
        <Hobbies />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
