import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

interface ReportsProps {
  studentId: string;
}

export const Reports: React.FC<ReportsProps> = ({ studentId }) => {
  const reports = [
    { name: 'Attendance Report', format: 'PDF' },
    { name: 'Performance Analysis', format: 'PDF' },
    { name: 'Grade Sheet', format: 'Excel' },
    { name: 'Course Progress', format: 'PDF' },
  ];

  const handleDownload = (reportName: string) => {
    // Implement download logic here
    console.log(`Downloading ${reportName} for student ${studentId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-semibold mb-6">Reports</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reports.map((report, index) => (
          <button
            key={index}
            onClick={() => handleDownload(report.name)}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-medium text-gray-900">{report.name}</p>
                <p className="text-sm text-gray-500">{report.format}</p>
              </div>
            </div>
            <Download className="h-5 w-5 text-gray-400" />
          </button>
        ))}
      </div>
    </motion.div>
  );
};