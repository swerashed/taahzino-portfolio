import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { RollingNumber } from './RollingNumber';

export const InteractiveStatCard = ({ stat, index }: { stat: { label: string, value: string }, index: number, key?: React.Key }) => {
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
