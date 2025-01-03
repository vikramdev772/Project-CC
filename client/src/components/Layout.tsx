import React from 'react';
import { motion } from 'framer-motion';
import { NavBar } from './ui/NavBar';
import { GlowingBorder } from './ui/GlowingBorder';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <GlowingBorder className="dark:bg-gray-800/50 p-6 rounded-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </GlowingBorder>
      </div>
    </div>
  );
};