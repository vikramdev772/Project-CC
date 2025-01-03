import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Bell } from 'lucide-react';
import type { Announcement, Exam } from '../../types/dashboard';

interface OverviewProps {
  attendance: number;
  upcomingExams: Exam[];
  announcements: Announcement[];
}

export const Overview: React.FC<OverviewProps> = ({
  attendance,
  upcomingExams,
  announcements,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <div className="flex items-center">
          <div className="p-3 bg-indigo-100 rounded-lg">
            <BookOpen className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">Attendance</h3>
            <p className="text-2xl font-semibold text-gray-900">{attendance}%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-lg font-medium">Upcoming Exams</h3>
        </div>
        <div className="space-y-3">
          {upcomingExams.slice(0, 3).map((exam) => (
            <div key={exam.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{exam.subject}</p>
                <p className="text-sm text-gray-500">{exam.date}</p>
              </div>
              <span className="text-sm text-gray-500">{exam.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-sm p-6"
      >
        <div className="flex items-center mb-4">
          <Bell className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-lg font-medium">Announcements</h3>
        </div>
        <div className="space-y-3">
          {announcements.slice(0, 3).map((announcement) => (
            <div
              key={announcement.id}
              className="p-3 bg-gray-50 rounded-lg"
            >
              <p className="font-medium text-gray-900">{announcement.title}</p>
              <p className="text-sm text-gray-500 mt-1">
                {announcement.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};