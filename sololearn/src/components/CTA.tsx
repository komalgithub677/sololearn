import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  "Access to all courses and learning paths",
  "Practice with real-world projects",
  "Join a supportive community",
  "Learn at your own pace",
];

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Coding Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join over 50 million learners and begin your journey to becoming a developer. No credit card required.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center text-white"
                >
                  <CheckCircle className="h-6 w-6 text-blue-300 mr-3" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/SignIn" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 inline-flex items-center justify-center">
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/SignIn" className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 inline-flex items-center justify-center">
              View All Courses
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Student Success Story"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">John Doe</h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "I started with zero coding knowledge. Thanks to Sololearn's structured learning paths and amazing community, I'm now working as a full-stack developer at a tech startup."
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Completed Web Development Path</span>
                <span>6 months ago</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
