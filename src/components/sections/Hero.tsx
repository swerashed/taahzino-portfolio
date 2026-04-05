import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolio';

export const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-52 md:pb-32 overflow-hidden">
      {/* Mobile Glowing Orbs */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[80px] md:hidden pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] md:hidden pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}>
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
      </div>
      
      <div className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 relative z-20">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group inline-flex lg:bg-transparent lg:border-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-emerald-500 font-bold">{'>'}</span>
                <Reveal>
                  <span className="text-zinc-300 group-hover:text-white transition-colors tracking-tight">{hero.badge}</span>
                </Reveal>
                <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[15vw] sm:text-[12vw] lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 relative group flex flex-col">
                <span className="absolute -inset-4 bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <Reveal>
                  <span className="relative z-10 block">{hero.titleSolid}</span>
                </Reveal>
                <Reveal delay={0.1}>
                  <span className="text-transparent relative z-10 block transition-all duration-500 group-hover:text-white group-hover:[-webkit-text-stroke:0px] ml-8 md:ml-0" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>{hero.titleOutline}</span>
                </Reveal>
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex items-center gap-4 mb-10 font-mono cursor-default group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <Reveal>
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    {hero.location}
                  </span>
                </Reveal>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a href="#contact" className="relative inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-zinc-200 group overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center">
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a href="#about" className="relative inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-white/10 group overflow-hidden backdrop-blur-sm">
                  <span className="relative z-10 flex items-center">
                    Explore Work
                  </span>
                </a>
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <FadeIn delay={0.4}>
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[3/4] overflow-hidden relative border border-white/20 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay" />
                <img 
                  src={hero.image} 
                  alt="Alex Mercer" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-white/50 z-20 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-white/50 z-20 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500" />
                
                {/* Tech Badge */}
                <a href={hero.socialLink} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 bg-[#050505] border border-white/20 p-2 md:p-3 flex flex-col gap-1 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-white/10 cursor-pointer">
                  <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">USERNAME</span>
                  <span className="text-[10px] md:text-xs font-mono text-white">{hero.username}</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
