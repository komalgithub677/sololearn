import React from 'react';
import { Users, Award, Zap, BookOpen, Globe, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Learn Together",
    description: "Join a global community of learners and help each other grow",
    stats: "50M+ learners"
  },
  {
    icon: <Zap className="h-12 w-12 text-yellow-500" />,
    title: "Learn by Doing",
    description: "Practice with real-world coding challenges and projects",
    stats: "2B+ code runs"
  },
  {
    icon: <Award className="h-12 w-12 text-green-600" />,
    title: "Get Certified",
    description: "Earn certificates to showcase your skills to employers",
    stats: "1M+ certificates"
  },
  {
    icon: <BookOpen className="h-12 w-12 text-purple-600" />,
    title: "Expert Content",
    description: "Learn from industry experts with proven track records",
    stats: "25+ courses"
  },
  {
    icon: <Globe className="h-12 w-12 text-red-600" />,
    title: "Learn Anywhere",
    description: "Access your courses on web and mobile, online or offline",
    stats: "190+ countries"
  },
  {
    icon: <Trophy className="h-12 w-12 text-orange-500" />,
    title: "Track Progress",
    description: "Monitor your learning progress with detailed analytics",
    stats: "100M+ achievements"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Sololearn?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join millions of learners worldwide and discover why Sololearn is the best platform to start your coding journey
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mx-auto mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                {feature.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-gray-600 mb-8">
            "Sololearn helped me transition from a non-tech job to a software developer role in just 6 months!"
          </p>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
              alt="User testimonial"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-gray-600">Software Developer at Tech Corp</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}