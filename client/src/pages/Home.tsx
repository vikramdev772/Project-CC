import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 text-white pt-24 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Transform Your Future with Quality Education
              </h1>
            </motion.div>
            <p className="text-xl mb-8 text-indigo-100 dark:text-indigo-200">
              Access world-class courses and unlock your potential today
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/courses"
                className="inline-flex items-center bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Quality Courses</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access a wide range of courses designed by industry experts
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Expert Teachers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from experienced professionals in your field
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Certifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn recognized certificates upon course completion
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div className="p-6">
              <Sparkles className="h-8 w-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-indigo-100">Active Courses</div>
            </div>
            <div className="p-6">
              <Users className="h-8 w-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-indigo-100">Students</div>
            </div>
            <div className="p-6">
              <Award className="h-8 w-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">25k+</div>
              <div className="text-indigo-100">Certificates Awarded</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;