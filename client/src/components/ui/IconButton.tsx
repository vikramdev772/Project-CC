import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon, 
  className,
  ...props 
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "p-2 text-gray-400 dark:text-gray-300",
        "hover:text-gray-500 dark:hover:text-cyber-blue",
        "transition-colors duration-200",
        className
      )}
      {...props}
    >
      {icon}
    </motion.button>
  );
};