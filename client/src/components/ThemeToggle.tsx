import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`
        p-2 rounded-lg relative overflow-hidden
        bg-gray-100 dark:bg-gray-800 
        text-gray-800 dark:text-cyber-blue
        hover:bg-gray-200 dark:hover:bg-gray-700 
        transition-all duration-300
        dark:shadow-[0_0_2px_#05d9e8,0_0_4px_#05d9e8]
        dark:hover:shadow-[0_0_4px_#05d9e8,0_0_8px_#05d9e8]
        dark:border dark:border-cyber-blue/20
      `}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};