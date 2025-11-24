import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Clock, Users, Star,
  Download, Award, BookOpen, Phone, Database, Brain,
  Code2, PenTool, TestTubes, Lightbulb
} from 'lucide-react';
import { Link } from "react-router-dom";


const courseCards = [
  {
    id: 1,
    title: "Java",
    level: "Intermediate",
    color: "bg-orange-500",
    textColor: "text-white",
    icon: "J",
  },
  {
    id: 2,
    title: "JavaScript",
    level: "Intermediate", 
    color: "bg-yellow-500",
    textColor: "text-white",
    icon: "JS",
  },
  {
    id: 3,
    title: "C++",
    level: "Intermediate",
    color: "bg-blue-500",
    textColor: "text-white",
    icon: "C++",
  },
  {
    id: 4,
    title: "C",
    level: "Intermediate",
    color: "bg-cyan-500",
    textColor: "text-white",
    icon: "C",
  },
  {
    id: 5,
    title: "SQL",
    level: "Intermediate",
    color: "bg-green-500",
    textColor: "text-white",
    icon: "SQL",
  },
  {
    id: 6,
    title: "Python",
    level: "Beginner",
    color: "bg-blue-600",
    textColor: "text-white",
    icon: "PY",
  },
  {
    id: 7,
    title: "Ethical AI",
    level: "Foundations",
    color: "bg-purple-600",
    textColor: "text-white",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: 8,
    title: "Write with AI",
    level: "Beginner",
    color: "bg-gray-200",
    textColor: "text-gray-800",
    icon: <PenTool className="h-6 w-6" />,
  },
  {
    id: 9,
    title: "A/B Testing",
    level: "AI-Powered",
    color: "bg-indigo-600",
    textColor: "text-white",
    icon: <TestTubes className="h-6 w-6" />,
  },
  {
    id: 10,
    title: "ML for Beginners",
    level: "Beginner",
    color: "bg-blue-400",
    textColor: "text-white",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    id: 11,
    title: "Brainstorm with AI",
    level: "Beginner",
    color: "bg-amber-500",
    textColor: "text-white",
    icon: <Lightbulb className="h-6 w-6" />,
  }
];

export default function Courses() {
  const [startIndex, setStartIndex] = useState(0);

  const slideLeft = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const slideRight = () => {
    setStartIndex(Math.min(courseCards.length - 5, startIndex + 1));
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Choose a course for you</h2>
        </motion.div>

        {/* Course Carousel */}
        <div className="relative mb-24">
          <div className="flex justify-center items-center">
            <button
              onClick={slideLeft}
              disabled={startIndex === 0}
              className={`p-2 rounded-full ${startIndex === 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-4 overflow-hidden mx-4">
              {courseCards.slice(startIndex, startIndex + 5).map((course) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-32 cursor-pointer"
                >
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all">
                    <div className={`${course.color} ${course.textColor} w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center font-bold text-xl`}>
                      {typeof course.icon === 'string' ? course.icon : course.icon}
                    </div>
                    <h3 className="font-medium mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={slideRight}
              disabled={startIndex >= courseCards.length - 5}
              className={`p-2 rounded-full ${startIndex >= courseCards.length - 5 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Tailored Learning"
              className="w-48 h-48 object-cover mx-auto mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Tailored to you</h3>
            <p className="text-gray-600">
              No matter your experience level, you'll be in the real, functional code within minutes of starting your first course.
            </p>
            <Link to='/SignIn'>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Start learning
            </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Bite-sized Learning"
              className="w-48 h-48 object-cover mx-auto mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Bite-sized</h3>
            <p className="text-gray-600">
              Go step-by-step through our unique courses. Assess what you've learned with in-lesson quizzes, and gradually advance your skills with practice.
            </p>
            <Link to='/SignIn'>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Do a quick lesson
            </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Get Certified"
              className="w-48 h-48 object-cover mx-auto mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Get proof</h3>
            <p className="text-gray-600">
              Earn a certificate to validate your newly acquired skills. Pass it on social for others to see.
            </p>
            <Link to='/SignIn'>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Become certified
            </button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile App Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Learn anywhere, anytime</h3>
            <p className="text-gray-600 mb-6">
              On the web or on the go, Sololearn is always ready for you and you'll never lose your place.
            </p>
            <p className="mb-6">Get the app now</p>
            <div className="flex gap-4">
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-12"
              />
              <img
                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                alt="Download on the App Store"
                className="h-12"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Mobile App"
              className="w-full rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Course Catalog Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">More than 20 courses</h3>
          <p className="text-gray-600 mb-6">
            From Python, through data, to web dev. We got everything you need.
          </p>
          <Link to='/SignIn'> 
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors">
            Explore full catalog
          </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}