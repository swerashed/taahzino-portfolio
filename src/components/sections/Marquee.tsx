import React from 'react';
import { Star } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Marquee = () => {
  const { skills } = portfolioData;

  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap border-y border-white/10 bg-[#050505] py-6 md:py-8 relative z-20">
      <div className="animate-marquee flex items-center w-max">
        {[...skills.marquee, ...skills.marquee, ...skills.marquee, ...skills.marquee].map((tech, i) => (
          <span 
            key={i} 
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center pr-8 md:pr-12 text-white"
          >
            {tech}
            <Star className="w-4 h-4 md:w-6 md:h-6 ml-8 md:ml-12 text-emerald-500 fill-emerald-500" />
          </span>
        ))}
      </div>
    </div>
  );
};
