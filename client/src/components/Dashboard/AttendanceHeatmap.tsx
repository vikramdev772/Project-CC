import React from 'react';
import { motion } from 'framer-motion';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { subDays } from 'date-fns';

interface AttendanceHeatmapProps {
  data: Array<{ date: string; count: number }>;
}

export const AttendanceHeatmap: React.FC<AttendanceHeatmapProps> = ({ data }) => {
  const today = new Date();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-semibold mb-6">Attendance Overview</h2>
      
      <div className="attendance-heatmap">
        <CalendarHeatmap
          startDate={subDays(today, 365)}
          endDate={today}
          values={data}
          classForValue={(value) => {
            if (!value) return 'color-empty';
            return `color-scale-${Math.min(Math.floor(value.count / 25) + 1, 4)}`;
          }}
        />
      </div>

      <style>{`
        .attendance-heatmap .color-empty { fill: #ebedf0; }
        .attendance-heatmap .color-scale-1 { fill: #9be9a8; }
        .attendance-heatmap .color-scale-2 { fill: #40c463; }
        .attendance-heatmap .color-scale-3 { fill: #30a14e; }
        .attendance-heatmap .color-scale-4 { fill: #216e39; }
      `}</style>
    </motion.div>
  );
};