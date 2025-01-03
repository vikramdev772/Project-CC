import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        "bg-white dark:bg-gray-800/90 rounded-xl shadow-sm",
        "dark:border dark:border-cyber-blue/20",
        "dark:shadow-[0_0_2px_#05d9e8,0_0_4px_#05d9e8]",
        className
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};