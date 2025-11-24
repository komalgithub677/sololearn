import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-blue-500/20 rounded-full px-4 py-2">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-sm">4.8/5 Average Rating</span>
              </div>
              <div className="flex items-center bg-blue-500/20 rounded-full px-4 py-2">
                <Users className="h-5 w-5 text-blue-200 mr-2" />
                <span className="text-sm">50M+ Learners</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The best way to learn to code
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Courses designed by experts with real-world practice. Join our global community of learners who are achieving their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/SignIn" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 flex items-center justify-center">
                Start Learning for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/Signin" className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 flex items-center justify-center">
                Explore Courses
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Award className="h-6 w-6 text-yellow-400" />
              <p className="text-sm text-blue-100">
                Get certified and boost your career opportunities
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Coding on laptop"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Learners</p>
                    <p className="text-lg font-bold">50M+</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Certificates Issued</p>
                    <p className="text-lg font-bold">1M+</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
