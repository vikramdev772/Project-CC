import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import type { Assignment, TimeTableEntry } from '../../types/dashboard';

interface ScheduleProps {
  timetable: TimeTableEntry[];
  assignments: Assignment[];
}

export const Schedule: React.FC<ScheduleProps> = ({ timetable, assignments }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const today = new Date().getDay();
  const currentDaySchedule = timetable.filter(entry => entry.day === daysOfWeek[today - 1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-semibold mb-6">Schedule & Deadlines</h2>

      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-lg font-medium">Today's Schedule</h3>
          </div>
          <div className="space-y-3">
            {currentDaySchedule.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 text-indigo-600" />
                  <span className="ml-2 font-medium">{entry.subject}</span>
                </div>
                <span className="text-sm text-gray-500">{entry.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-lg font-medium">Upcoming Deadlines</h3>
          </div>
          <div className="space-y-3">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{assignment.title}</p>
                    <p className="text-sm text-gray-500">{assignment.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{assignment.dueDate}</p>
                    <span 
                      className={`text-xs px-2 py-1 rounded-full ${
                        assignment.status === 'pending' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : assignment.status === 'submitted'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};