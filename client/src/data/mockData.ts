import type { Student } from '../types/dashboard';

export const mockStudentData: Student = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@university.edu',
  course: 'Computer Science',
  semester: 4,
  profileImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
  attendance: 85,
  subjects: [
    {
      id: '1',
      name: 'Data Structures',
      code: 'CS201',
      grade: 'A',
      attendance: 90,
      performance: [75, 82, 88, 85, 92],
      topics: [
        { name: 'Arrays', score: 95 },
        { name: 'Linked Lists', score: 88, improvement: 'Practice more complex problems' },
        { name: 'Trees', score: 78, improvement: 'Review balancing algorithms' }
      ]
    },
    // Add more subjects...
  ],
  upcomingExams: [
    {
      id: '1',
      subject: 'Database Management',
      date: '2024-03-15',
      time: '09:00 AM',
      venue: 'Room 301'
    },
    // Add more exams...
  ],
  announcements: [
    {
      id: '1',
      title: 'Mid-term Schedule',
      description: 'Mid-term examinations will begin from March 15th',
      date: '2024-03-01',
      type: 'info'
    },
    // Add more announcements...
  ],
  attendanceData: [
    { date: '2024-03-01', count: 3 },
    { date: '2024-03-02', count: 4 },
    // Add more attendance data...
  ],
  timetable: [
    {
      day: 'Monday',
      time: '09:00 AM',
      subject: 'Data Structures',
      room: '201'
    },
    // Add more timetable entries...
  ],
  assignments: [
    {
      id: '1',
      subject: 'Data Structures',
      title: 'Implementation of Red-Black Trees',
      dueDate: '2024-03-10',
      status: 'pending'
    },
    // Add more assignments...
  ],
  notifications: [
    {
      id: '1',
      title: 'Low Attendance Warning',
      message: 'Your attendance in Database Management is below 75%',
      time: '2 hours ago',
      type: 'warning'
    },
    // Add more notifications...
  ],
  achievements: [
    'First Prize - Coding Competition 2023',
    'Dean\'s List - Fall 2023'
  ],
  certificates: [
    {
      name: 'Web Development Fundamentals',
      url: '#',
      issueDate: 'Jan 2024'
    },
    // Add more certificates...
  ]
};