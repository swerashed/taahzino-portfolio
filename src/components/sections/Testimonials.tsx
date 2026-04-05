import React, { useState } from 'react';
import { motion, useMotionValue } from 'motion/react';
import { Play, X } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';
import { portfolioData } from '../../data/portfolio';

export const Testimonials = () => {
  const { testimonials } = portfolioData;
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<boolean>(false);
  const [isSliderHovered, setIsSliderHovered] = useState<boolean>(false);

  // We need cursor position for the custom cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <section id="testimonials" className="py-16 md:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                <span className="text-emerald-500 font-bold">{'>'}</span>
                <Reveal>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{testimonials.badge}</span>
                </Reveal>
                <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
              </div>
              <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                <Reveal>
                  {testimonials.titleSolid}
                </Reveal>
                <Reveal delay={0.1}>
                  <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{testimonials.titleOutline}</span>
                </Reveal>
              </h2>
            </div>
            <div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right">
              <Reveal delay={0.2} width="100%">
                <span className="block text-lg text-zinc-400 font-medium mb-6">{testimonials.description}</span>
              </Reveal>
            </div>
          </div>
        </FadeIn>
        
        <div className="w-full overflow-hidden relative -mx-6 px-6 lg:-mx-8 lg:px-8 mt-8">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex w-max animate-marquee gap-4 md:gap-6 py-4" 
            style={{ 
              animationDuration: '60s',
              animationPlayState: (activeVideo || isSliderHovered) ? 'paused' : 'running'
            }}
            onMouseEnter={() => setIsSliderHovered(true)}
            onMouseLeave={() => setIsSliderHovered(false)}
          >
            {[...testimonials.items, ...testimonials.items, ...testimonials.items, ...testimonials.items].map((testimonial, i) => (
              <div 
                key={i} 
                className={`w-[85vw] sm:w-[320px] md:w-[400px] shrink-0 p-6 md:p-8 border border-white/10 bg-white/[0.02] flex flex-col hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(255,255,255,0.1)] whitespace-normal relative overflow-hidden ${testimonial.youtubeId ? 'cursor-none' : ''}`}
                onClick={() => testimonial.youtubeId && setActiveVideo(/* @ts-ignore */ testimonial.youtubeId)}
                onMouseEnter={() => testimonial.youtubeId && setHoveredVideo(true)}
                onMouseLeave={() => testimonial.youtubeId && setHoveredVideo(false)}
              >
                <p className="text-base md:text-lg text-zinc-300 mb-6 md:mb-8 leading-relaxed relative z-10">"{testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4 md:pt-6 mt-auto flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    {/* @ts-ignore */}
                    {testimonial.image && (
                      <img 
                        src={/* @ts-ignore */ testimonial.image} 
                        alt={testimonial.author} 
                        className="w-12 h-12 object-cover grayscale border border-white/20 group-hover:border-emerald-500/50 transition-colors rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div>
                      <p className="font-bold uppercase tracking-tight group-hover:text-white transition-colors">{testimonial.author}</p>
                      <p className="text-sm font-mono text-zinc-500">{testimonial.location}</p>
                    </div>
                  </div>
                  {/* @ts-ignore */}
                  {testimonial.youtubeId && (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-black transition-colors shrink-0">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Cursor for Video Cards */}
      <motion.div
        className="fixed top-0 left-0 z-[60] pointer-events-none flex items-center justify-center gap-2 bg-emerald-500 text-black px-4 py-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: hoveredVideo && !activeVideo ? 1 : 0,
          scale: hoveredVideo && !activeVideo ? 1 : 0.5,
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-black border-b-[4px] border-b-transparent" />
        Play Video
      </motion.div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer z-[110]" onClick={() => setActiveVideo(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black border border-white/10 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&controls=1&modestbranding=1&rel=0&playsinline=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
