import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Reveal } from '../ui/Reveal';

const experiences = [
  {
    id: '01',
    role: 'Software Engineer',
    company: 'Notionhive',
    period: 'May 2024 — Feb 2026',
    location: 'Dhaka, BD · Hybrid',
    description: 'Building enterprise web and mobile applications utilizing Node.js, React/Next.js, and Flutter. Architected supply chain solutions, ticket booking systems, and integrated Salesforce CRM. Managed DigitalOcean infrastructure for mission-critical apps.',
    tags: ['Node.js', 'React/Next.js', 'Flutter', 'DigitalOcean', 'Salesforce']
  },
  {
    id: '02',
    role: 'Junior Web Developer',
    company: 'Notionhive',
    period: 'Sep 2022 — May 2024',
    location: 'Dhaka, BD',
    description: 'Transitioned from Trainee to Junior Developer. Built high-performance, visually appealing brochure websites with complex animations. Recognized for outstanding performance with Employee of the Year (2023) and multiple Employee of the Quarter awards.',
    tags: ['JavaScript', 'Express.js', 'Animations', 'Frontend']
  },
  {
    id: '03',
    role: 'Freelance Developer',
    company: 'Independent',
    period: '2020 — Present',
    location: 'Remote',
    description: 'Partnering with global clients to deliver custom web solutions. Focused on creating responsive, highly optimized digital experiences tailored to specific business needs.',
    tags: ['Full-stack', 'Consulting', 'Web Design']
  },
  {
    id: '04',
    role: 'B.Sc. Computer Science',
    company: 'Education',
    period: 'Graduated',
    location: 'University',
    description: 'Bachelor of Science in Computer Science and Engineering (CSE). Developed a strong foundation in software engineering principles, algorithms, and system architecture.',
    tags: ['CSE', 'Algorithms', 'System Design']
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-40 bg-[#050505] relative">
      <div className="relative z-10">
        <FadeIn>
          <div className="mb-16 md:mb-32  px-6  max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default">
              <span className="text-emerald-500 font-bold">{'>'}</span>
              <Reveal><span className="text-zinc-400 tracking-tight uppercase">Career Path</span></Reveal>
              <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              Experience <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>& Education</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative w-full pb-32">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="sticky w-full"
              style={{ 
                top: `15vh`,
              }}
            >
              <div className="bg-[#080808] border-t border-white/10 p-8 md:p-16 lg:p-20 shadow-[0_-20px_50px_-15px_rgba(0,0,0,1)] relative overflow-hidden">
                {/* Subtle top glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-[100px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 max-w-7xl mx-auto items-start">
                  {/* Left Column: ID & Period */}
                  <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-4 lg:pr-8 lg:border-r lg:border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-zinc-100 font-mono text-sm font-bold">{exp.id}</span>
                    </div>
                    <div className="h-px bg-white/10 flex-1 lg:hidden" />
                    <div className="flex flex-col items-end lg:items-start gap-1.5">
                      <span className="text-zinc-400 font-mono text-xs md:text-sm uppercase tracking-widest">{exp.period}</span>
                      <span className="text-zinc-600 font-mono text-[10px] md:text-xs uppercase tracking-widest">{exp.location}</span>
                    </div>
                  </div>

                  {/* Middle Column: Role & Description */}
                  <div className="lg:col-span-6 flex flex-col lg:pr-8">
                    <div className="flex flex-col mb-6">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">{exp.company}</span>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right Column: Tags */}
                  <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end content-start">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
