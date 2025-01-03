import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { Subject } from '../../types/dashboard';

interface PerformanceProps {
  subjects: Subject[];
}

export const Performance: React.FC<PerformanceProps> = ({ subjects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-semibold mb-6">Academic Performance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Subject Overview</h3>
          <div className="space-y-4">
            {subjects.map((subject) => (
              <div key={subject.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{subject.name}</p>
                  <p className="text-sm text-gray-500">{subject.code}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-indigo-600">{subject.grade}</p>
                  <p className="text-sm text-gray-500">
                    Attendance: {subject.attendance}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-80">
          <h3 className="text-lg font-medium mb-4">Performance Trend</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={subjects.map((subject) => ({
                name: subject.name,
                performance: subject.performance[subject.performance.length - 1],
              }))}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="performance"
                stroke="#4f46e5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};