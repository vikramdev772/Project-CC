export interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  semester: number;
  profileImage: string;
  attendance: number;
  subjects: Subject[];
  upcomingExams: Exam[];
  announcements: Announcement[];
  attendanceData: Array<{ date: string; count: number }>;
  timetable: TimeTableEntry[];
  assignments: Assignment[];
  notifications: Notification[];
  achievements?: string[];
  certificates?: Certificate[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  grade: string;
  attendance: number;
  performance: number[];
  topics?: Array<{
    name: string;
    score: number;
    improvement?: string;
  }>;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'info' | 'warning' | 'success';
}

export interface Exam {
  id: string;
  subject: string;
  date: string;
  time: string;
  venue: string;
}

export interface Assignment {
  id: string;
  subject: string;
  title: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'overdue';
}

export interface TimeTableEntry {
  day: string;
  time: string;
  subject: string;
  room: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'warning' | 'info' | 'success';
}

export interface Certificate {
  name: string;
  url: string;
  issueDate: string;
}