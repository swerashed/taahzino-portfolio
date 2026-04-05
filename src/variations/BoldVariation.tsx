import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, useTransform } from 'motion/react';
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Star, Clock, X, Play, Terminal, Layers, Cloud, Database, Bot, Network, Smartphone, Wrench, Menu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

// Reusable animation wrapper
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
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

const Digit: React.FC<{ value: string, delay: number }> = ({ value, delay }) => {
  const num = parseInt(value, 10);
  if (isNaN(num)) return <span className="inline-flex h-[1.1em] items-center">{value}</span>;

  const transitions = 20 + num; 
  const numbers = Array.from({ length: transitions + 1 }, (_, i) => (transitions - i) % 10);

  return (
    <div className="relative inline-flex flex-col overflow-hidden h-[1.1em] leading-[1.1em]">
      <motion.div
        initial={{ y: `-${(transitions / (transitions + 1)) * 100}%` }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 2 + delay, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-col"
      >
        {numbers.map((n, i) => (
          <span key={i} className="h-[1.1em] flex items-center justify-center">{n}</span>
        ))}
      </motion.div>
    </div>
  );
};

const RollingNumber = ({ value }: { value: string }) => {
  return (
    <span className="inline-flex items-center">
      {value.split('').map((char, i) => (
        <Digit key={`${char}-${i}`} value={char} delay={i * 0.2} />
      ))}
    </span>
  );
};

// Helper to get specific tech icon
const getSkillIcon = (skill: string) => {
  const devicon = (name: string, version: string = 'original') => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${version}.svg`;
  const simpleicon = (slug: string, color?: string) => `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ''}`;

  const iconMap: Record<string, string> = {
    'Go': devicon('go'),
    'TypeScript': devicon('typescript'),
    'Dart': devicon('dart'),
    'Java': devicon('java'),
    'Bash': devicon('bash'),
    'Lua': devicon('lua'),
    'C': devicon('c'),
    'JavaScript': devicon('javascript'),
    'SQL': simpleicon('postgresql'),
    'CQL': simpleicon('apachecassandra'),
    'Gin': simpleicon('gin'),
    'Fiber': simpleicon('gofiber'),
    'React': devicon('react'),
    'React.js': devicon('react'),
    'React Native': devicon('react'),
    'Next.js': simpleicon('nextdotjs', 'white'),
    'Node.js': devicon('nodejs'),
    'NestJS': devicon('nestjs'),
    'Express.js': simpleicon('express', 'white'),
    'Express': simpleicon('express', 'white'),
    'Tailwind CSS': devicon('tailwindcss'),
    'Expo': simpleicon('expo', 'white'),
    'Linux': devicon('linux'),
    'CI/CD': devicon('githubactions'),
    'GraphQL': devicon('graphql', 'plain'),
    'REST': devicon('nodejs'),
    'Hono.js': simpleicon('hono'),
    'ElysiaJS': simpleicon('elysia'),
    'Docker': devicon('docker'),
    'Kubernetes': devicon('kubernetes', 'plain'),
    'Terraform': devicon('terraform'),
    'Ansible': devicon('ansible'),
    'AWS CDK': simpleicon('amazonwebservices'),
    'AWS Lambda': simpleicon('awslambda'),
    'Azure Functions': simpleicon('azurefunctions'),
    'AWS SAM': simpleicon('amazonwebservices'),
    'Serverless Framework': simpleicon('serverless'),
    'AWS': devicon('amazonwebservices', 'original-wordmark'),
    'Azure': devicon('azure'),
    'S3': simpleicon('amazons3'),
    'CloudFront': simpleicon('amazoncloudfront'),
    'CloudWatch': simpleicon('amazoncloudwatch'),
    'EC2': simpleicon('amazonec2'),
    'SSM': simpleicon('amazonwebservices'),
    'PostgreSQL': devicon('postgresql'),
    'DynamoDB': simpleicon('amazondynamodb'),
    'MongoDB': devicon('mongodb'),
    'CockroachDB': simpleicon('cockroachdb'),
    'Cassandra': devicon('apachecassandra'),
    'Redis': devicon('redis'),
    'RabbitMQ': devicon('rabbitmq'),
    'Kafka': devicon('apachekafka'),
    'Firebase': devicon('firebase', 'plain'),
    'Appwrite': devicon('appwrite'),
    'Supabase': devicon('supabase'),
    'LangChain': simpleicon('langchain'),
    'Langflow': simpleicon('langchain'),
    'OpenAI API': simpleicon('openai', 'white'),
    'RAG': simpleicon('openai', 'white'),
    'Crew AI': simpleicon('robot'),
    'Microservices': devicon('docker'),
    'gRPC': simpleicon('grpc'),
    'REST APIs': devicon('nodejs'),
    'CI/CD Pipelines': devicon('githubactions'),
    'Web Scraping': devicon('python'),
    'Flutter': devicon('flutter'),
    'n8n': simpleicon('n8n'),
    'Git': devicon('git'),
    'MCP': simpleicon('anthropic', 'white'),
  };

  return iconMap[skill] || null;
};

// Custom Cursor Component
const CustomCursor = ({ hidden = false }: { hidden?: boolean }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-emerald-500 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-opacity duration-300"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-emerald-500 rounded-full pointer-events-none z-[9999] hidden md:block transition-opacity duration-300"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
};

// Text Reveal Component
const Reveal = ({ children, delay = 0, width = "fit-content" }: { children: React.ReactNode, delay?: number, width?: "fit-content" | "100%" }) => (
  <span className={`relative overflow-hidden ${width === "fit-content" ? "inline-block" : "block"}`}>
    <motion.span
      className="block"
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.span>
  </span>
);

// Interactive HUD Stat Card
const InteractiveStatCard = ({ stat, index }: { stat: { label: string, value: string }, index: number, key?: React.Key }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // For 3D Tilt
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  const rotateX = useSpring(useTransform(yPct, [-1, 1], [15, -15]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(xPct, [-1, 1], [-15, 15]), { stiffness: 150, damping: 15 });

  // Magnetic effect for the number
  const textX = useSpring(0, { stiffness: 150, damping: 15 });
  const textY = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
    
    // Calculate percentages for tilt (-1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    xPct.set((x - centerX) / centerX);
    yPct.set((y - centerY) / centerY);

    // Calculate magnetic pull
    textX.set((x - centerX) / 8);
    textY.set((y - centerY) / 8);
  };

  const handleMouseLeave = () => {
    xPct.set(0);
    yPct.set(0);
    textX.set(0);
    textY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative h-48 md:h-56 bg-[#050505] border border-white/10 overflow-hidden group cursor-crosshair"
    >
      {/* Base Layer */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 transition-opacity duration-300" style={{ transform: "translateZ(20px)" }}>
        <div className="flex justify-between items-start">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-300">{stat.label}</div>
          <div className="text-[10px] font-mono text-zinc-400">0{index + 1}</div>
        </div>
        <motion.div 
          style={{ x: textX, y: textY }}
          className="text-5xl md:text-6xl font-black tracking-tighter text-white"
        >
          <RollingNumber value={stat.value} />
        </motion.div>
      </div>

      {/* Hover Spotlight Layer */}
      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-between bg-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{
          WebkitMaskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          transform: "translateZ(40px)",
        }}
      >
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)', backgroundSize: '16px 16px' }} />
        
    
        <div className="flex justify-between items-start relative z-30">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">{stat.label}</div>
        </div>

        <motion.div 
          style={{ x: textX, y: textY }}
          className="relative z-30 text-5xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          <RollingNumber value={stat.value} />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10 group-hover:border-emerald-500 transition-colors duration-300 z-30" style={{ transform: "translateZ(30px)" }} />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/10 group-hover:border-emerald-500 transition-colors duration-300 z-30" style={{ transform: "translateZ(30px)" }} />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/10 group-hover:border-emerald-500 transition-colors duration-300 z-30" style={{ transform: "translateZ(30px)" }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-emerald-500 transition-colors duration-300 z-30" style={{ transform: "translateZ(30px)" }} />
      
      {/* Hover Border Glow */}
      <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/30 transition-colors duration-500 z-20 pointer-events-none" style={{ transform: "translateZ(10px)" }} />
    </motion.div>
  );
};

export default function BoldVariation() {
  const { hero, about, skills, services, testimonials, contact, projects } = portfolioData;
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<boolean>(false);
  const [isSliderHovered, setIsSliderHovered] = useState<boolean>(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState<boolean>(false);
  const [showProjects, setShowProjects] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref === 'any' || ref === 'project') {
      setShowProjects(true);
    }
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <CustomCursor hidden={hoveredVideo && !activeVideo} />
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
          <a href="#" className="font-black text-xl tracking-tighter uppercase flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-ping" />
            Taahzino.
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-white/70">
            {['About', 'Services', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
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
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-52 md:pb-32 overflow-hidden">
        {/* Mobile Glowing Orbs */}
        <div className="absolute top-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[80px] md:hidden pointer-events-none" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[80px] md:hidden pointer-events-none" />

        {/* Grid Background */}
        <div className="absolute inset-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}>
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />
        </div>
        
        <div className="px-6 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 relative z-20">
              <FadeIn>
                <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group inline-flex lg:bg-transparent lg:border-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-emerald-500 font-bold">{'>'}</span>
                  <Reveal>
                    <span className="text-zinc-300 group-hover:text-white transition-colors tracking-tight">{hero.badge}</span>
                  </Reveal>
                  <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-[15vw] sm:text-[12vw] lg:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] mb-8 relative group flex flex-col">
                  <span className="absolute -inset-4 bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <Reveal>
                    <span className="relative z-10 block">{hero.titleSolid}</span>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <span className="text-transparent relative z-10 block transition-all duration-500 group-hover:text-white group-hover:[-webkit-text-stroke:0px] ml-8 md:ml-0" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>{hero.titleOutline}</span>
                  </Reveal>
                </h1>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="flex items-center gap-4 mb-10 font-mono cursor-default group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <MapPin className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <Reveal>
                    <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {hero.location}
                    </span>
                  </Reveal>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a href="#contact" className="relative inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-zinc-200 group overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center">
                      Start a Project
                      <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  <a href="#about" className="relative inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-white/10 group overflow-hidden backdrop-blur-sm">
                    <span className="relative z-10 flex items-center">
                      Explore Work
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-4 relative mt-12 lg:mt-0">
              <FadeIn delay={0.4}>
                <div className="aspect-[4/5] sm:aspect-square lg:aspect-[3/4] overflow-hidden relative border border-white/20 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 mix-blend-overlay" />
                  <img 
                    src={hero.image} 
                    alt="Alex Mercer" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-white/50 z-20 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-white/50 z-20 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2 duration-500" />
                  
                  {/* Tech Badge */}
                  <a href={hero.socialLink} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 bg-[#050505] border border-white/20 p-2 md:p-3 flex flex-col gap-1 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-white/10 cursor-pointer">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-zinc-500 font-bold">USERNAME</span>
                    <span className="text-[10px] md:text-xs font-mono text-white">{hero.username}</span>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
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

      {/* About & Stats */}
      <section id="about" className="py-16 md:py-32 border-b border-white/10 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                  <span className="text-emerald-500 font-bold">{'>'}</span>
                  <Reveal>
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{about.badge}</span>
                  </Reveal>
                  <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
                </div>
                
                <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                  <Reveal>
                    {about.titleSolid}
                  </Reveal>
                  <Reveal delay={0.1}>
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{about.titleOutline}</span>
                  </Reveal>
                </h2>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {/* Main Bio - Simplified Style */}
            <FadeIn delay={0.1} className="flex flex-col justify-center relative overflow-hidden">
              
              <div className="relative z-10 space-y-8">               
                <div className="space-y-6">
                  <Reveal delay={0.2} width="100%">
                    <div className="relative">
                      <motion.div 
                        initial={false}
                        animate={{ 
                          height: isAboutExpanded ? "auto" : "5.5rem",
                        }}
                        className="overflow-hidden relative"
                        style={{
                          WebkitMaskImage: isAboutExpanded ? 'none' : 'linear-gradient(to bottom, black 40%, transparent 100%)',
                          maskImage: isAboutExpanded ? 'none' : 'linear-gradient(to bottom, black 40%, transparent 100%)'
                        }}
                      >
                        <p className="text-base md:text-lg text-zinc-400 font-medium leading-relaxed">
                          {about.description}
                        </p>
                      </motion.div>
                      
                      <button 
                        onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                        className="mt-6 flex items-center gap-2 text-emerald-500 font-mono text-sm uppercase tracking-widest hover:text-emerald-400 transition-colors group"
                      >
                        {isAboutExpanded ? 'Read Less' : 'Read More'}
                        <motion.div
                          animate={{ rotate: isAboutExpanded ? -90 : 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </FadeIn>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {about.stats.map((stat, i) => (
                <InteractiveStatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                  <span className="text-emerald-500 font-bold">{'>'}</span>
                  <Reveal>
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{services.badge}</span>
                  </Reveal>
                  <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                  <Reveal>
                    {services.titleSolid}
                  </Reveal>
                  <Reveal delay={0.1}>
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{services.titleOutline}</span>
                  </Reveal>
                </h2>
              </div>
              <Reveal delay={0.2} width="100%">
                <span className="block text-lg md:text-xl text-zinc-400 font-medium max-w-md">{services.description}</span>
              </Reveal>
            </div>
          </FadeIn>

          <div className="flex flex-col">
            {services.items.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`group ${i !== services.items.length - 1 ? 'border-b border-white/10' : ''} py-12 flex flex-col md:flex-row md:items-center gap-8 hover:bg-white/[0.03] transition-all duration-300 px-4 -mx-4 relative cursor-crosshair`}>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    </div>
                    
                    <div className="text-sm font-mono text-zinc-600 group-hover:text-white transition-colors w-16 relative z-10">
                      0{i + 1} //
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <h3 className="text-3xl font-black uppercase tracking-tight mb-3 group-hover:translate-x-2 transition-transform duration-300">
                        <Reveal>
                          {service.title}
                        </Reveal>
                      </h3>
                      <p className="text-lg text-zinc-400 max-w-2xl">{service.description}</p>
                    </div>
                    
                    <div className="hidden md:flex md:w-64 md:justify-end relative z-10 items-center pointer-events-none">
                      <div className="relative flex items-center justify-center w-32 h-32 mr-8">
                        {[0, 1, 2].map((j) => {
                          const imgIndex = (i + j) % projects.items.length;
                          const project = projects.items[imgIndex];
                          
                          const transforms = [
                            'group-hover:-rotate-12 group-hover:-translate-x-6 group-hover:translate-y-2',
                            'group-hover:rotate-12 group-hover:translate-x-6 group-hover:translate-y-2',
                            'group-hover:rotate-0 group-hover:-translate-y-4'
                          ];
                          const delays = ['delay-0', 'delay-75', 'delay-150'];
                          
                          return (
                            <a 
                              key={j} 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`absolute w-28 h-36 rounded-md overflow-hidden border-2 border-[#050505] shadow-2xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out origin-center pointer-events-auto hover:!scale-110 hover:!z-50 ${transforms[j]} ${delays[j]}`}
                              style={{ zIndex: j }}
                            >
                              <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                                referrerPolicy="no-referrer"
                              />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex w-16 h-16 bg-white/5 items-center justify-center relative z-10">
                      <Icon className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors z-10 relative" />
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <rect 
                          x="0" y="0" width="100%" height="100%" 
                          fill="none" 
                          stroke="rgba(255,255,255,0.1)" 
                          strokeWidth="2" 
                        />
                        <rect 
                          x="0" y="0" width="100%" height="100%" 
                          fill="none" 
                          stroke="#10b981" 
                          strokeWidth="2" 
                          className="transition-all duration-700 ease-in-out [stroke-dasharray:256] [stroke-dashoffset:256] group-hover:[stroke-dashoffset:0]" 
                        />
                      </svg>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {showProjects && (
        <section id="projects" className="py-16 md:py-32 border-b border-white/10 bg-[#050505] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <FadeIn>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                    <span className="text-emerald-500 font-bold">{'>'}</span>
                    <Reveal>
                      <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{projects.badge}</span>
                    </Reveal>
                    <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                    <Reveal>
                      {projects.titleSolid}
                    </Reveal>
                    <Reveal delay={0.1}>
                      <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{projects.titleOutline}</span>
                    </Reveal>
                  </h2>
                </div>
                <Reveal delay={0.2} width="100%">
                  <span className="block text-lg md:text-xl text-zinc-400 font-medium max-w-md">{projects.description}</span>
                </Reveal>
              </div>
            </FadeIn>

            <div className="flex flex-col mt-10 relative pb-10 md:pb-20">
              {projects.items.map((project, i) => {
                const isEven = i % 2 === 0;
                return (
                  <FadeIn key={project.id} delay={0.1}>
                    <div className={`py-10 md:py-24 group relative ${i !== projects.items.length - 1 ? 'border-b border-white/10' : ''}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                        
                        {/* Image Side */}
                        <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden aspect-[16/10] bg-white/5 border border-white/10 group/img">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover grayscale opacity-100 transition-all duration-1000 group-hover/img:scale-105 group-hover/img:grayscale-0"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
                            
                            {/* Hover overlay button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                              <div className="w-20 h-20 rounded-full bg-emerald-500 text-black flex items-center justify-center transform scale-50 group-hover/img:scale-100 transition-transform duration-500 ease-out">
                                <ArrowRight className="w-8 h-8 -rotate-45" />
                              </div>
                            </div>
                          </a>
                          
                          {/* Floating massive number */}
                          <div className={`absolute top-[-10%] ${isEven ? 'right-[-5%]' : 'left-[-5%]'} z-20 pointer-events-none hidden md:block`}>
                            <span className="text-[10rem] lg:text-[14rem] font-black text-transparent leading-none opacity-20 transition-all duration-700 group-hover:text-emerald-500/10 group-hover:opacity-100" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
                              {project.id}
                            </span>
                          </div>
                        </div>

                        {/* Content Side */}
                        <div className={`lg:col-span-5 relative z-30 flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-emerald-500">
                              {project.category}
                            </span>
                            <div className="h-px bg-white/20 flex-1" />
                            <span className="text-white/40 font-mono text-sm">{project.id}</span>
                          </div>
                          
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9] transition-colors duration-500 group-hover:text-emerald-400">
                            {project.title}
                          </h3>
                          
                          <p className="text-base md:text-lg text-zinc-400 mb-8 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-10">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] md:text-xs font-mono uppercase tracking-widest text-zinc-300 transition-colors duration-300 group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-emerald-500 transition-all group/link">
                              <ArrowRight className="w-5 h-5 -rotate-45 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all group/git">
                              <Github className="w-5 h-5 group-hover/git:scale-110 transition-transform" />
                            </a>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Skills Section (Detailed) */}
      <section id="skills" className="py-16 md:py-32 border-b border-white/10 bg-[#050505] relative">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8 md:mb-16">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 mb-8 font-mono text-sm md:text-base cursor-default group">
                  <span className="text-emerald-500 font-bold">{'>'}</span>
                  <Reveal>
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors tracking-tight">{skills.badge}</span>
                  </Reveal>
                  <span className="w-2 h-4 bg-emerald-500/50 animate-pulse" />
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                  <Reveal>
                    {skills.titleSolid}
                  </Reveal>
                  <Reveal delay={0.1}>
                    <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>{skills.titleOutline}</span>
                  </Reveal>
                </h2>
              </div>
              <Reveal delay={0.2} width="100%">
                <span className="block text-lg md:text-xl text-zinc-400 font-medium max-w-md">{skills.description}</span>
              </Reveal>
            </div>
          </FadeIn>

          <div className="w-full flex flex-col">
            {/* @ts-ignore */}
            {skills.categories.map((category, i) => {
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex flex-col gap-6 py-6 border-white/10 group transition-colors -mx-6 px-6 lg:-mx-8 lg:px-8">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                      <Reveal>
                        {category.name}
                      </Reveal>
                    </h3>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill: string, j: number) => {
                        const iconUrl = getSkillIcon(skill);
                        return (
                          <motion.div 
                            key={skill} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (i * 0.1) + (j * 0.03) }}
                            className="flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-[#0a0a0a] text-sm font-mono text-zinc-300 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 uppercase tracking-wider cursor-default hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(16,185,129,0.2)] group/skill"
                          >
                            {iconUrl && (
                              <img 
                                src={iconUrl} 
                                alt={skill} 
                                className="w-4 h-4 object-contain group-hover/skill:brightness-0 transition-all" 
                                referrerPolicy="no-referrer"
                              />
                            )}
                            <span>{skill}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Get a Quote CTA Section */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-emerald-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black mb-8 leading-[0.9]">
              Ready to <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>Start Building?</span>
            </h2>
            <p className="text-black/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Turn your vision into reality. Get a detailed, custom quote for your next big project and let's create something extraordinary together.
            </p>
            <Link 
              to="/quote" 
              className="inline-flex items-center justify-center px-8 py-5 bg-black text-white font-black uppercase tracking-widest text-sm hover:bg-zinc-800 hover:scale-105 transition-all duration-300 group relative overflow-hidden shadow-2xl"
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-3">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
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
                <li><a href="#about" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ About</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Work</a></li>
                <li><a href="#skills" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Skills</a></li>
                <li><a href="#testimonials" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Reviews</a></li>
                <li><a href="#contact" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-4 h-[1px] bg-emerald-400 transition-all duration-300" />/ Contact</a></li>
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
    </div>
  );
}
