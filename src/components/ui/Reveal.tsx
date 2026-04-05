import React from 'react';
import { motion } from 'motion/react';

export const Reveal = ({ children, delay = 0, width = "fit-content" }: { children: React.ReactNode, delay?: number, width?: "fit-content" | "100%" }) => (
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
