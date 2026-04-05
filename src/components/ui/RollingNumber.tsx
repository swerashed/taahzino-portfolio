import React from 'react';
import { motion } from 'motion/react';

export const Digit: React.FC<{ value: string, delay: number }> = ({ value, delay }) => {
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

export const RollingNumber = ({ value }: { value: string }) => {
  return (
    <span className="inline-flex items-center">
      {value.split('').map((char, i) => (
        <Digit key={`${char}-${i}`} value={char} delay={i * 0.2} />
      ))}
    </span>
  );
};
