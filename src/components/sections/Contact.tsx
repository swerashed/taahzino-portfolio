import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolio';

export const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-16 md:py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                  <span className="text-emerald-500 font-bold">{'>'}</span>
                  <Reveal>
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{contact.badge}</span>
                  </Reveal>
                  <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
                </div>
                <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  <Reveal>
                    {contact.titleSolid}
                  </Reveal>
                  <Reveal delay={0.1}>
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{contact.titleOutline}</span>
                  </Reveal>
                </h2>
                <Reveal delay={0.2} width="100%">
                  <span className="block text-xl text-zinc-400 font-medium mb-8 md:mb-16 max-w-md">{contact.description}</span>
                </Reveal>
                
                <div className="space-y-8">
                    {contact.info.map((item, i) => {
                      let Icon = Mail;
                      if (item.icon === 'phone') Icon = Phone;
                      if (item.icon === 'map-pin') Icon = MapPin;
                      if (item.icon === 'clock') Icon = Clock;
                      
                      return (
                        <div key={i} className="flex items-center gap-6 group/info hover:translate-x-2 transition-transform cursor-default">
                          <div className="w-14 h-14 border border-white/10 bg-white/5 flex items-center justify-center group-hover/info:bg-white group-hover/info:text-black transition-colors">
                            <Icon className="w-5 h-5 text-white group-hover/info:text-black transition-colors" />
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">
                              <Reveal>
                                {item.label}
                              </Reveal>
                            </div>
                            <div className="text-lg font-bold tracking-tight group-hover/info:text-white transition-colors">
                              <Reveal delay={0.1}>
                                {item.value}
                              </Reveal>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </FadeIn>
              </div>
              
              <div>
                <FadeIn delay={0.2}>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="group/input">
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-white transition-colors">Full Name</label>
                      <input type="text" id="name" className="w-full px-6 py-5 border border-white/10 bg-white/5 text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all" placeholder="John Doe" />
                    </div>
                    <div className="group/input">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-white transition-colors">Email Address</label>
                      <input type="email" id="email" className="w-full px-6 py-5 border border-white/10 bg-white/5 text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="group/input">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-white transition-colors">Message</label>
                      <textarea id="message" rows={5} className="w-full px-6 py-5 border border-white/10 bg-white/5 text-white focus:outline-none focus:border-white focus:bg-white/10 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                    </div>
                    <button type="submit" className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 group/btn relative overflow-hidden">
                      <span className="absolute inset-0 w-full h-full bg-black/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10 flex items-center gap-3">
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </form>
                </FadeIn>
              </div>
            </div>
        </div>
      </section>
  );
};
