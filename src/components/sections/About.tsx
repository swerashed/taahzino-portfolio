import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';
import { InteractiveStatCard } from '../ui/InteractiveStatCard';
import { portfolioData } from '../../data/portfolio';

export const About = () => {
  const { about } = portfolioData;
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <section id="about" className="py-16 md:py-32 border-b border-white/10 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                <span className="text-emerald-500 font-bold">{'>'}</span>
                <Reveal>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{about.badge}</span>
                </Reveal>
                <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
              </div>
              
              <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                <Reveal>
                  {about.titleSolid}
                </Reveal>
                <Reveal delay={0.1}>
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{about.titleOutline}</span>
                </Reveal>
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {/* Main Bio - Simplified Style */}
          <FadeIn delay={0.1} className="flex flex-col justify-center relative overflow-hidden">
            
            <div className="relative z-10 space-y-8">               
              <div className="space-y-6">
                <Reveal delay={0.2} width="100%">
                  <div className="relative">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        height: isAboutExpanded ? "auto" : "5.5rem",
                      }}
                      className="overflow-hidden relative"
                      style={{
                        WebkitMaskImage: isAboutExpanded ? 'none' : 'linear-gradient(to bottom, black 40%, transparent 100%)',
                        maskImage: isAboutExpanded ? 'none' : 'linear-gradient(to bottom, black 40%, transparent 100%)'
                      }}
                    >
                      <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed">
                        {about.description}
                      </p>
                    </motion.div>
                    
                    <button 
                      onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                      className="mt-6 flex items-center gap-2 text-emerald-500 font-mono text-sm uppercase tracking-widest hover:text-emerald-400 transition-colors group"
                    >
                      {isAboutExpanded ? 'Read Less' : 'Read More'}
                      <motion.div
                        animate={{ rotate: isAboutExpanded ? -90 : 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </FadeIn>

          {/* Interactive Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {about.stats.map((stat, i) => (
              <InteractiveStatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
