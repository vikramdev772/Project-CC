import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Users, ArrowLeft } from 'lucide-react';
import { LoginCard } from '../components/LoginCard';
import { LoginForm } from '../components/LoginForm';

type LoginType = 'select' | 'student' | 'admin' | 'staff';

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>('select');

  const renderLoginSelection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <LoginCard
        title="Student Login"
        icon={<User className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
        onClick={() => setLoginType('student')}
      />
      <LoginCard
        title="Admin Login"
        icon={<Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
        onClick={() => setLoginType('admin')}
      />
      <LoginCard
        title="Staff Login"
        icon={<Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
        onClick={() => setLoginType('staff')}
      />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-200"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        {loginType !== 'select' && (
          <button
            onClick={() => setLoginType('select')}
            className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to login selection
          </button>
        )}
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          {loginType === 'select' ? 'Choose Login Type' : `${loginType.charAt(0).toUpperCase() + loginType.slice(1)} Login`}
        </h2>
      </div>

      {loginType === 'select' ? renderLoginSelection() : <LoginForm userType={loginType} />}
    </motion.div>
  );
};

export default Login;