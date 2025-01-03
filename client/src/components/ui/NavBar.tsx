import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { IconButton } from './IconButton';

export const NavBar: React.FC = () => {
  const navIcons = [
    { key: 'bell', icon: <Bell className="h-6 w-6" /> },
    { key: 'user', icon: <User className="h-6 w-6" /> },
    { key: 'logout', icon: <LogOut className="h-6 w-6" /> }
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700/50 transition-colors duration-300">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between h-16">
          <div className="flex">
            <IconButton
              icon={<Menu className="h-6 w-6" />}
              className="md:hidden"
              aria-label="Menu"
            />
            <div className="flex-shrink-0 flex items-center">
              <motion.h1 
                className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-cyber-blue dark:to-cyber-purple bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                StudentHub
              </motion.h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {navIcons.map((item, index) => (
              <IconButton
                key={item.key}
                icon={item.icon}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={item.key}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};