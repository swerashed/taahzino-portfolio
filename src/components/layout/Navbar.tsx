import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? 'top-4 px-4 md:px-6 bg-transparent border-b border-transparent' 
            : 'top-0 px-0 bg-[#050505]/80 backdrop-blur-md border-b border-white/10'
        }`}
      >
        <div 
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            isScrolled 
              ? 'max-w-5xl bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-full h-16 px-6 shadow-2xl shadow-black/50' 
              : 'max-w-7xl h-24 px-6 md:px-8 border border-transparent rounded-full'
          }`}
        >
          <Link to="/" className="font-black text-xl tracking-tighter uppercase flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-ping" />
            Taahzino.
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-white/70">
            {['About', 'Services', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`/#${item.toLowerCase()}`} 
                className="relative hover:text-emerald-400 transition-colors py-2 group"
              >
                /{item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/quote" 
              className={`hidden lg:inline-flex relative items-center justify-center px-6 py-2.5 font-black uppercase tracking-widest text-xs transition-all group overflow-hidden ${
                isScrolled ? 'bg-white text-black rounded-full hover:bg-zinc-200' : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center">
                Get a Quote
              </span>
            </Link>
            <button 
              className="lg:hidden text-white hover:text-emerald-400 transition-colors p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl pt-32 px-8 lg:hidden flex flex-col"
          >
            <div className="flex flex-col gap-8 text-4xl font-black uppercase tracking-tighter">
              {[
                { name: 'About', href: '/#about' },
                { name: 'Services', href: '/#services' },
                { name: 'Projects', href: '/#projects' },
                { name: 'Skills', href: '/#skills' },
                { name: 'Testimonials', href: '/#testimonials' },
                { name: 'Contact', href: '/#contact' },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <a 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="flex items-center gap-4 hover:text-emerald-400 transition-colors"
                  >
                    <span className="text-emerald-500 text-xl font-mono">0{i + 1}</span>
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-auto mb-12"
            >
              <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)} className="relative flex items-center justify-center px-6 py-5 bg-white text-black font-black uppercase tracking-widest text-sm transition-all hover:bg-zinc-200 w-full">
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
