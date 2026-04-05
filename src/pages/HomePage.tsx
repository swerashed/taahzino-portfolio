import React from 'react';
import { CustomCursor } from '../components/ui/CustomCursor';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Testimonials } from '../components/sections/Testimonials';
import { QuoteCTA } from '../components/sections/QuoteCTA';
import { Contact } from '../components/sections/Contact';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <QuoteCTA />
      <Contact />
      <Footer />
    </div>
  );
}
