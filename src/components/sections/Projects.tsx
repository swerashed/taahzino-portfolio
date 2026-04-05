import React, { useEffect, useState } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolio';

export const Projects = () => {
  const { projects } = portfolioData;
  const [showProjects, setShowProjects] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref === 'any' || ref === 'project') {
      setShowProjects(true);
    }
  }, []);

  if (!showProjects) return null;

  return (
    <section id="projects" className="py-16 md:py-32 border-b border-white/10 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                <span className="text-emerald-500 font-bold">{'>'}</span>
                <Reveal>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{projects.badge}</span>
                </Reveal>
                <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                <Reveal>
                  {projects.titleSolid}
                </Reveal>
                <Reveal delay={0.1}>
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{projects.titleOutline}</span>
                </Reveal>
              </h2>
            </div>
            <Reveal delay={0.2} width="100%">
              <span className="block text-lg md:text-xl text-zinc-400 font-medium max-w-md">{projects.description}</span>
            </Reveal>
          </div>
        </FadeIn>

        <div className="flex flex-col mt-10 relative pb-10 md:pb-20">
          {projects.items.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <FadeIn key={project.id} delay={0.1}>
                <div className={`py-10 md:py-24 group relative ${i !== projects.items.length - 1 ? 'border-b border-white/10' : ''}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    
                    {/* Image Side */}
                    <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden aspect-[16/10] bg-white/5 border border-white/10 group/img">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale opacity-100 transition-all duration-1000 group-hover/img:scale-105 group-hover/img:grayscale-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
                        
                        {/* Hover overlay button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                          <div className="w-20 h-20 rounded-full bg-emerald-500 text-black flex items-center justify-center transform scale-50 group-hover/img:scale-100 transition-transform duration-500 ease-out">
                            <ArrowRight className="w-8 h-8 -rotate-45" />
                          </div>
                        </div>
                      </a>
                      
                      {/* Floating massive number */}
                      <div className={`absolute top-[-10%] ${isEven ? 'right-[-5%]' : 'left-[-5%]'} z-20 pointer-events-none hidden md:block`}>
                        <span className="text-[10rem] lg:text-[14rem] font-black text-transparent leading-none opacity-20 transition-all duration-700 group-hover:text-emerald-500/10 group-hover:opacity-100" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
                          {project.id}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className={`lg:col-span-5 relative z-30 flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-emerald-500">
                          {project.category}
                        </span>
                        <div className="h-px bg-white/20 flex-1" />
                        <span className="text-white/40 font-mono text-sm">{project.id}</span>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9] transition-colors duration-500 group-hover:text-emerald-400">
                        {project.title}
                      </h3>
                      
                      <p className="text-base md:text-lg text-zinc-400 mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-300 transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-emerald-500 transition-all group/link">
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all group/git">
                          <Github className="w-5 h-5 group-hover/git:scale-110 transition-transform" />
                        </a>
                      </div>
                    </div>
                    
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
