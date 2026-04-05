import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { FadeIn } from '../components/ui/FadeIn';

export default function QuotePage() {
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
    // Cal.com embed initialization
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; cal.q = cal.q || []; 
          let script = d.createElement("script");
          script.src = A; 
          d.head.appendChild(script); 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.com/embed/embed.js", "init");
    
    const Cal = (window as any).Cal;
    Cal("init", "30min", {origin:"https://app.cal.com"});
    Cal.ns["30min"]("inline", {
      elementOrSelector:"#my-cal-inline-30min",
      config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
      calLink: "swerashed/30min",
    });
    Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#10b981"},"dark":{"cal-brand":"#10b981"}},"hideEventTypeDetails":false,"layout":"month_view"});
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
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-16 md:pt-48 md:pb-32 relative">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <FadeIn>
              <div className="mb-12 lg:mb-0 max-w-xl">
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
              <form onSubmit={handleSubmit} className="bg-[#0a0a0a] border border-white/10 p-6 md:p-12 relative overflow-hidden group/form w-full">
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
                className="bg-[#0a0a0a] border border-emerald-500/30 p-12 text-center flex flex-col items-center justify-center min-h-[400px] w-full"
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

          {/* Cal.com Embed Section */}
          <FadeIn delay={0.3}>
            <div className="mt-24 pt-24 border-t border-white/10">
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                  Or Schedule a <span className="text-emerald-500">Call</span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                  Prefer to discuss your project directly? Pick a time that works for you.
                </p>
              </div>
              <div className="w-full bg-transparent rounded-xl overflow-hidden min-h-[600px]">
                <div style={{width:'100%', height:'100%', overflow:'scroll'}} id="my-cal-inline-30min"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
