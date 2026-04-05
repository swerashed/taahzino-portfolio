import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

export const QuoteCTA = () => {
  return (
    <section className="py-24 md:py-32 border-t border-white/10 bg-emerald-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.9]">
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Ready to</span> <br />
            Start Building?
          </h2>
          <p className="text-black/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            Turn your vision into reality. Get a detailed, custom quote for your next big project and let's create something extraordinary together.
          </p>
          <Link 
            to="/quote" 
            className="inline-flex items-center justify-center px-8 py-5 bg-black text-white font-black uppercase tracking-widest text-sm hover:text-black transition-colors duration-300 group relative overflow-hidden shadow-2xl"
          >
            <span className="absolute inset-0 w-full h-full bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-3">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
