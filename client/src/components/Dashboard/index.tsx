import React from 'react';
import { motion } from 'framer-motion';
import { Overview } from './Overview';
import { Performance } from './Performance';
import { AttendanceHeatmap } from './AttendanceHeatmap';
import { Schedule } from './Schedule';
import { Profile } from './Profile';
import { Reports } from './Reports';
import { Notifications } from './Notifications';
import type { Student } from '../../types/dashboard';

interface DashboardProps {
  student: Student;
}

export const Dashboard: React.FC<DashboardProps> = ({ student }) => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, {student.name}!</h1>
          <p className="text-gray-500">Track your academic progress and stay updated</p>
        </div>
        <Notifications notifications={student.notifications} />
      </motion.div>

      <Overview 
        attendance={student.attendance} 
        upcomingExams={student.upcomingExams}
        announcements={student.announcements}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Performance subjects={student.subjects} />
        <Schedule 
          timetable={student.timetable}
          assignments={student.assignments}
        />
      </div>

      <AttendanceHeatmap data={student.attendanceData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Profile student={student} />
        <Reports studentId={student.id} />
      </div>
    </div>
  );
};