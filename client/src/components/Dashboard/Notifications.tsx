import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import type { Notification } from '../../types/dashboard';

interface NotificationsProps {
  notifications: Notification[];
}

export const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeNotifications, setActiveNotifications] = React.useState(notifications);

  const dismissNotification = (id: string) => {
    setActiveNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-400 hover:text-gray-500"
      >
        <Bell className="h-6 w-6" />
        {activeNotifications.length > 0 && (
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            {activeNotifications.length}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50"
          >
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium">Notifications</h3>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {activeNotifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 border-b last:border-b-0 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                    <button
                      onClick={() => dismissNotification(notification.id)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};