import React, { useState } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { QuoteCTA } from '../components/sections/QuoteCTA';
import { FadeIn } from '../components/ui/FadeIn';
import { portfolioData } from '../data/portfolio';

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, projects.items.length));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex flex-col justify-end pb-12 md:pb-16 overflow-hidden border-b border-white/10 bg-[#050505]">
          {/* Premium Grid Background with Spotlight */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]">
            <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,transparent_0%,#000_100%)]"></div>
          </div>

          {/* Animated Glowing Orb */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70vw] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Massive Background Text (Impact) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden whitespace-nowrap pointer-events-none opacity-[0.02] select-none flex items-center justify-center">
             <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none text-white">
                ARCHIVE
             </h1>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-12 pt-24">
            <div className="flex-1">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[2px] w-12 bg-emerald-500"></div>
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-500 font-bold">Index 2026</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                  The <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>Archive</span>
                  <span className="text-emerald-500">.</span>
                </h1>
              </FadeIn>
            </div>

            <div className="flex-1 md:text-right w-full">
              <FadeIn delay={0.2}>
                <div className="flex flex-col md:items-end">
                  <p className="text-zinc-400 text-base md:text-lg max-w-md leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-emerald-500/50 pl-6 md:pl-0 md:pr-6 py-2 mb-8">
                    A curated index of digital experiences, technical case studies, and experimental prototypes.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs font-mono uppercase tracking-widest text-zinc-500 md:ml-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{projects.items.length}</span>
                      <span>Projects</span>
                    </div>
                    <span className="hidden sm:block text-zinc-700">/</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">600+</span>
                      <span>Businesses Helped</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-16 md:py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {projects.items.slice(0, visibleCount).map((project, i) => (
                <FadeIn key={project.id} delay={0.1}>
                  <div className="group relative flex flex-col h-full bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all duration-500">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden aspect-video bg-white/5 group/img">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale opacity-80 transition-all duration-1000 group-hover/img:scale-105 group-hover/img:grayscale-0 group-hover/img:opacity-100"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                        <div className="w-16 h-16 rounded-full bg-emerald-500 text-black flex items-center justify-center transform scale-50 group-hover/img:scale-100 transition-transform duration-500 ease-out">
                          <ArrowRight className="w-6 h-6 -rotate-45" />
                        </div>
                      </div>
                    </a>

                    <div className="p-8 flex flex-col flex-grow relative z-20">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">
                          {project.category}
                        </span>
                        <div className="h-px bg-white/20 flex-1" />
                        <span className="text-white/40 font-mono text-xs">{project.id}</span>
                      </div>
                      
                      <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4 leading-tight transition-colors duration-500 group-hover:text-emerald-400">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-400 mb-8 leading-relaxed flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-300 transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-emerald-400 transition-colors group/link">
                          View Project
                          <ArrowRight className="w-4 h-4 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-auto text-zinc-400 hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {visibleCount < projects.items.length && (
              <FadeIn delay={0.2}>
                <div className="flex justify-center mt-16">
                  <button 
                    onClick={handleLoadMore}
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Load More
                    </span>
                  </button>
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      </main>

      <QuoteCTA />
      <Footer />
    </div>
  );
}
