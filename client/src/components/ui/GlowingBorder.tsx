import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const GlowingBorder: React.FC<GlowingBorderProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden",
        "before:absolute before:inset-0 before:-translate-x-full",
        "dark:before:animate-[shimmer_2s_infinite]",
        "dark:before:bg-gradient-to-r",
        "dark:before:from-transparent dark:before:via-cyber-blue/10 dark:before:to-transparent",
        className
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};