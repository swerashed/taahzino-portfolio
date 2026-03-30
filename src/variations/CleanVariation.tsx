import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Star, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function CleanVariation() {
  const { hero, about, skills, services, testimonials, contact } = portfolioData;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-slate-900">Alex Mercer.</span>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow-md">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800 mb-8 border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              {hero.badge}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              {hero.titleSolid} <br />
              <span className="text-slate-400 font-light">{hero.titleOutline}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-light">
              {hero.role} {hero.location}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium text-slate-900 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                View Services
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative">
              <img 
                src={hero.image} 
                alt="Alex Mercer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-black/5 rounded-3xl"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600 fill-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">5.0</p>
                  <p className="text-sm text-slate-500 font-medium">Based on 50+ reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">{about.badge}</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                {about.titleSolid} <span className="text-slate-400 font-light">{about.titleOutline}</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>{about.description}</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 lg:mt-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-50px" }}
            >
              {about.stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeIn}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <p className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6">
        <motion.div className="text-center max-w-3xl mx-auto mb-20" {...fadeIn}>
          <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">{services.badge}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {services.titleSolid} <span className="text-slate-400 font-light">{services.titleOutline}</span>
          </h2>
          <p className="text-lg text-slate-600 font-light">{services.description}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.items.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-slate-900 transition-colors duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-slate-900 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-slate-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-8">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <motion.div className="max-w-3xl" {...fadeIn}>
            <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">{skills.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              {skills.titleSolid} <span className="text-slate-500 font-light">{skills.titleOutline}</span>
            </h2>
            <p className="text-lg text-slate-400 font-light">{skills.description}</p>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="w-full overflow-hidden flex whitespace-nowrap mb-20 opacity-50">
          <div className="animate-marquee flex gap-8 items-center">
            {[...skills.marquee, ...skills.marquee].map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {skills.categories.map((category, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 max-w-6xl mx-auto px-6">
        <motion.div className="text-center max-w-3xl mx-auto mb-20" {...fadeIn}>
          <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">{testimonials.badge}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {testimonials.titleSolid} <span className="text-slate-400 font-light">{testimonials.titleOutline}</span>
          </h2>
          <p className="text-lg text-slate-600 font-light">{testimonials.description}</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.items.map((testimonial, i) => (
            <motion.div 
              key={i} 
              variants={fadeIn}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-slate-700 font-medium leading-relaxed mb-8">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-10 md:p-20 border border-slate-200 shadow-xl shadow-slate-200/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div {...fadeIn}>
                <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">{contact.badge}</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  {contact.titleSolid} <br />
                  <span className="text-slate-400 font-light">{contact.titleOutline}</span>
                </h2>
                <p className="text-lg text-slate-600 font-light mb-12">{contact.description}</p>
                
                <div className="space-y-8">
                  {contact.info.map((item, i) => {
                    let Icon = Mail;
                    if (item.icon === 'phone') Icon = Phone;
                    if (item.icon === 'map-pin') Icon = MapPin;
                    if (item.icon === 'clock') Icon = Clock;
                    
                    return (
                      <div key={i} className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                          <Icon className="w-5 h-5 text-slate-900" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-500 mb-1">{item.label}</p>
                          <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              
              <motion.div 
                {...fadeIn}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 transition-shadow resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 rounded-xl text-white font-medium bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-bold text-xl tracking-tight text-slate-900">Alex Mercer.</span>
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Alex Mercer. All rights reserved.</p>
          <div className="flex gap-4">
            {contact.socials.map((social, i) => {
              let Icon = Github;
              if (social.name === 'LinkedIn') Icon = Linkedin;
              if (social.name === 'Twitter') Icon = ExternalLink;
              
              return (
                <a key={i} href={social.url} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-100">
                  <span className="sr-only">{social.name}</span>
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
