import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Reusable animation wrapper
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function QuotePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    details: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden flex flex-col">
      {/* Navigation */}
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
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className={`inline-flex relative items-center justify-center px-6 py-2.5 font-black uppercase tracking-widest text-xs transition-all group overflow-hidden ${
                isScrolled ? 'bg-white text-black rounded-full hover:bg-zinc-200' : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-16 md:pt-48 md:pb-32 relative">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="mb-12 md:mb-20">
              <div className="flex items-center gap-3 mb-6 font-mono text-sm md:text-base cursor-default group">
                <span className="text-emerald-500 font-bold">{'>'}</span>
                <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">PROJECT INQUIRY</span>
                <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                Let's Build <br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Something Great.</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                Fill out the form below to get a detailed quote for your project. I'll get back to you within 24-48 hours.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-white/10 p-6 md:p-12 relative overflow-hidden group/form">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-500/50" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-500/50" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-500/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500/50" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="group/input">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-emerald-400 transition-colors">Full Name *</label>
                    <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm" placeholder="John Doe" />
                  </div>
                  <div className="group/input">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-emerald-400 transition-colors">Email Address *</label>
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm" placeholder="john@example.com" />
                  </div>
                  <div className="group/input">
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-emerald-400 transition-colors">Company / Organization</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm" placeholder="Acme Corp" />
                  </div>
                  <div className="group/input">
                    <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-emerald-400 transition-colors">Estimated Budget *</label>
                    <select required id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm appearance-none cursor-pointer">
                      <option value="" disabled className="bg-[#0a0a0a] text-zinc-500">Select a range</option>
                      <option value="< $5k" className="bg-[#0a0a0a]">$1,000 - $5,000</option>
                      <option value="$5k - $10k" className="bg-[#0a0a0a]">$5,000 - $10,000</option>
                      <option value="$10k - $25k" className="bg-[#0a0a0a]">$10,000 - $25,000</option>
                      <option value="$25k+" className="bg-[#0a0a0a]">$25,000+</option>
                    </select>
                  </div>
                </div>

                <div className="group/input mb-8">
                  <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-emerald-400 transition-colors">Project Type *</label>
                  <select required id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#0a0a0a] text-zinc-500">What do you need?</option>
                    <option value="Web App" className="bg-[#0a0a0a]">Full-Stack Web Application</option>
                    <option value="Mobile App" className="bg-[#0a0a0a]">Mobile Application</option>
                    <option value="Landing Page" className="bg-[#0a0a0a]">Landing Page / Marketing Site</option>
                    <option value="Backend" className="bg-[#0a0a0a]">Backend API / Architecture</option>
                    <option value="Other" className="bg-[#0a0a0a]">Other / Consulting</option>
                  </select>
                </div>

                <div className="group/input mb-12">
                  <label htmlFor="details" className="block text-xs font-bold uppercase tracking-widest mb-3 text-zinc-400 group-focus-within/input:text-emerald-400 transition-colors">Project Details *</label>
                  <textarea required id="details" name="details" value={formData.details} onChange={handleChange} rows={5} className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-emerald-500 transition-all font-mono text-sm resize-none" placeholder="Tell me about your goals, timeline, and any specific requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-emerald-500 text-black font-black uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 group/btn relative overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    Request Quote
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a0a0a] border border-emerald-500/30 p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Request Received</h3>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">
                  Thank you for reaching out, {formData.name || 'there'}! I've received your project details and will be in touch shortly with a tailored quote.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </FadeIn>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <span>© {new Date().getFullYear()} Taahzino.</span>
              <span className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
