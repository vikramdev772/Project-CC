import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider } from './contexts/ThemeContext';
import { mockStudentData } from './data/mockData';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Dashboard student={mockStudentData} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;