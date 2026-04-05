import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';

export const Footer = () => {
  const { contact } = portfolioData;

  return (
    <footer className="relative py-12 md:py-24 border-t border-white/10 bg-[#050505] overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none">
       Taahzino
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <span className="font-black text-3xl tracking-tighter uppercase block mb-8">Taahzino.</span>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-10">
              Building high-performance digital experiences with a focus on scalability, clean architecture, and user-centric design.
            </p>
            <div className="flex gap-4">
              {contact.socials.map((social, i) => {
                let Icon = Github;
                if (social.name === 'LinkedIn') Icon = Linkedin;
                if (social.name === 'Twitter') Icon = ExternalLink;
                
                return (
                  <a 
                    key={i} 
                    href={social.url} 
                    className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-black hover:bg-white hover:border-white transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-10">Navigation</h4>
            <ul className="space-y-5 text-xs font-bold uppercase tracking-widest">
              <li><a href="/#about" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ About</a></li>
              <li><a href="/#services" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Work</a></li>
              <li><a href="/#skills" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Skills</a></li>
              <li><a href="/#testimonials" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Reviews</a></li>
              <li><a href="/#contact" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-10">Newsletter</h4>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">Subscribe to get the latest updates on my projects and articles.</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-white transition-colors uppercase"
              />
              <button className="w-full bg-white text-black px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>© {new Date().getFullYear()} Taahzino.</span>
            <span className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
            <span>All rights reserved.</span>
            <span className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
            <span>Designed with passion.</span>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-all"
          >
            Back to top
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowRight className="w-5 h-5 -rotate-90 group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
