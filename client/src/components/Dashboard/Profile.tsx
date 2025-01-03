import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, BookOpen, Award } from 'lucide-react';
import type { Student } from '../../types/dashboard';

interface ProfileProps {
  student: Student;
}

export const Profile: React.FC<ProfileProps> = ({ student }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={student.profileImage}
          alt={student.name}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{student.name}</h2>
          <p className="text-gray-500">{student.course} - Semester {student.semester}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-gray-400" />
          <span>{student.email}</span>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="text-lg font-medium mb-3">Achievements</h3>
          <div className="space-y-3">
            {student.achievements?.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-yellow-500" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-medium mb-3">Certificates</h3>
          <div className="grid grid-cols-2 gap-4">
            {student.certificates?.map((certificate, index) => (
              <a
                key={index}
                href={certificate.url}
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-5 w-5 text-indigo-600 mb-2" />
                <p className="text-sm font-medium">{certificate.name}</p>
                <p className="text-xs text-gray-500">{certificate.issueDate}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};