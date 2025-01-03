import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Users } from 'lucide-react';

interface LoginCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const LoginCard: React.FC<LoginCardProps> = ({ title, icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
    </motion.div>
  );
};