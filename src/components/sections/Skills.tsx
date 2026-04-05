import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';
import { getSkillIcon } from '../../utils/getSkillIcon';
import { portfolioData } from '../../data/portfolio';

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-32 border-b border-white/10 bg-[#050505] relative">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                <span className="text-emerald-500 font-bold">{'>'}</span>
                <Reveal>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{skills.badge}</span>
                </Reveal>
                <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                <Reveal>
                  {skills.titleSolid}
                </Reveal>
                <Reveal delay={0.1}>
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{skills.titleOutline}</span>
                </Reveal>
              </h2>
            </div>
            <Reveal delay={0.2} width="100%">
              <span className="block text-lg md:text-xl text-zinc-400 font-medium max-w-md">{skills.description}</span>
            </Reveal>
          </div>
        </FadeIn>

        <div className="w-full flex flex-col">
          {/* @ts-ignore */}
          {skills.categories.map((category, i) => {
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex flex-col gap-6 py-6 border-white/10 group transition-colors -mx-6 px-6 lg:-mx-8 lg:px-8">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    <Reveal>
                      {category.name}
                    </Reveal>
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill: string, j: number) => {
                      const iconUrl = getSkillIcon(skill);
                      return (
                        <motion.div 
                          key={skill} 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (i * 0.1) + (j * 0.03) }}
                          className="flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-[#0a0a0a] text-sm font-mono text-zinc-300 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 uppercase tracking-wider cursor-default hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(16,185,129,0.2)] group/skill"
                        >
                          {iconUrl && (
                            <img 
                              src={iconUrl} 
                              alt={skill} 
                              className="w-4 h-4 object-contain group-hover/skill:brightness-0 transition-all" 
                              referrerPolicy="no-referrer"
                            />
                          )}
                          <span>{skill}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
