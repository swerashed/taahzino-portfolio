import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolio';

export const Services = () => {
  const { services, projects } = portfolioData;

  return (
    <section id="services" className="py-16 md:py-32 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                <span className="text-emerald-500 font-bold">{'>'}</span>
                <Reveal>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{services.badge}</span>
                </Reveal>
                <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                <Reveal>
                  {services.titleSolid}
                </Reveal>
                <Reveal delay={0.1}>
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{services.titleOutline}</span>
                </Reveal>
              </h2>
            </div>
            <Reveal delay={0.2} width="100%">
              <span className="block text-lg md:text-xl text-zinc-400 font-medium max-w-md">{services.description}</span>
            </Reveal>
          </div>
        </FadeIn>

        <div className="flex flex-col">
          {services.items.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`group ${i !== services.items.length - 1 ? 'border-b border-white/10' : ''} py-12 flex flex-col md:flex-row md:items-center gap-8 hover:bg-white/[0.03] transition-all duration-300 px-4 -mx-4 relative cursor-crosshair`}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  </div>
                  
                  <div className="text-sm font-mono text-zinc-600 group-hover:text-white transition-colors w-16 relative z-10">
                    0{i + 1} //
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <h3 className="text-3xl font-black uppercase tracking-tight mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      <Reveal>
                        {service.title}
                      </Reveal>
                    </h3>
                    <p className="text-lg text-zinc-400 max-w-2xl">{service.description}</p>
                  </div>
                  
                  <div className="hidden md:flex md:w-64 md:justify-end relative z-10 items-center pointer-events-none">
                    <div className="relative flex items-center justify-center w-32 h-32 mr-8">
                      {[0, 1, 2].map((j) => {
                        const imgIndex = (i + j) % projects.items.length;
                        const project = projects.items[imgIndex];
                        
                        const transforms = [
                          'group-hover:-rotate-12 group-hover:-translate-x-6 group-hover:translate-y-2',
                          'group-hover:rotate-12 group-hover:translate-x-6 group-hover:translate-y-2',
                          'group-hover:rotate-0 group-hover:-translate-y-4'
                        ];
                        const delays = ['delay-0', 'delay-75', 'delay-150'];
                        
                        return (
                          <a 
                            key={j} 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`absolute w-28 h-36 rounded-md overflow-hidden border-2 border-[#050505] shadow-2xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out origin-center pointer-events-auto hover:!scale-110 hover:!z-50 ${transforms[j]} ${delays[j]}`}
                            style={{ zIndex: j }}
                          >
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                              referrerPolicy="no-referrer"
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex w-16 h-16 bg-white/5 items-center justify-center relative z-10">
                    <Icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors z-10 relative" />
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <rect 
                        x="0" y="0" width="100%" height="100%" 
                        fill="none" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="2" 
                      />
                      <rect 
                        x="0" y="0" width="100%" height="100%" 
                        fill="none" 
                        stroke="#10b981" 
                        strokeWidth="2" 
                        className="transition-all duration-700 ease-in-out [stroke-dasharray:256] [stroke-dashoffset:256] group-hover:[stroke-dashoffset:0]" 
                      />
                    </svg>
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
