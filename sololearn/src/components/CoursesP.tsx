import React, { useState } from "react";
import { BookOpen, Trophy, Filter, ArrowUpDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Define icon components map
const iconComponents = {
  BookOpen,
  Trophy
} as const;

type IconName = keyof typeof iconComponents;

interface Course {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  bgColor: string;
  lessons: number;
  xp: number;
  category: string;
  progress?: number;
  status?: string;
}

// Mock data for courses
const myCourses: Course[] = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the basics of React.",
    icon: "BookOpen",
    bgColor: "bg-blue-500",
    progress: 75,
    status: "In Progress",
    lessons: 12,
    xp: 300,
    category: "Web Development",
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    description: "Deep dive into TypeScript.",
    icon: "Trophy",
    bgColor: "bg-purple-500",
    progress: 100,
    status: "Finished",
    lessons: 20,
    xp: 500,
    category: "Web Development",
  },
];

const exploreCourses: Course[] = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript.",
    icon: "BookOpen",
    bgColor: "bg-yellow-500",
    lessons: 15,
    xp: 400,
    category: "Web Development",
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Learn Python for data analysis and visualization.",
    icon: "Trophy",
    bgColor: "bg-green-500",
    lessons: 25,
    xp: 600,
    category: "Data Science",
  },
  {
    id: 3,
    title: "Flutter for Beginners",
    description: "Build mobile apps with Flutter.",
    icon: "BookOpen",
    bgColor: "bg-blue-500",
    lessons: 18,
    xp: 450,
    category: "Mobile Development",
  },
];

// CourseCard Component
const CourseCard: React.FC<{ course: Course; onClick: () => void }> = ({ 
  course, 
  onClick 
}) => {
  const IconComponent = iconComponents[course.icon];
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className={`p-6 ${course.bgColor} text-white`}>
        <div className="flex items-center justify-between">
          <div className="text-2xl">
            <IconComponent size={24} />
          </div>
          {course.status && (
            <span className="text-sm font-semibold">{course.status}</span>
          )}
        </div>
        <h3 className="text-xl font-bold mt-4">{course.title}</h3>
        <p className="text-sm mt-2">{course.description}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{course.lessons} Lessons</span>
          <span>{course.xp} XP</span>
        </div>
        {course.progress !== undefined && (
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ExploreCourseCard Component
const ExploreCourseCard: React.FC<{ course: Course; onClick: () => void }> = ({ 
  course, 
  onClick 
}) => {
  const IconComponent = iconComponents[course.icon];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className={`p-6 ${course.bgColor} text-white`}>
        <div className="text-2xl">
          <IconComponent size={24} />
        </div>
        <h3 className="text-xl font-bold mt-4">{course.title}</h3>
        <p className="text-sm mt-2">{course.description}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>{course.lessons} Lessons</span>
          <span>{course.xp} XP</span>
        </div>
      </div>
    </motion.div>
  );
};

// Main Courses Component
export default function Courses() {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showPreTest, setShowPreTest] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const filteredCourses = exploreCourses.filter((course) => {
    if (filter === "all") return true;
    return course.category === filter;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sort === "xp") return b.xp - a.xp;
    if (sort === "lessons") return b.lessons - a.lessons;
    return 0;
  });

  const openCourseModal = (course: Course) => {
    setSelectedCourse(course);
    setShowPreTest(true);
    return;
    setSelectedCourse(course);
  };

  const closeCourseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-100 dark:bg-gray-900">
        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* My Courses Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={() => openCourseModal(course)}
              />
            ))}
          </div>
        </section>

        {/* Explore Courses Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              Explore our courses
            </h2>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="text-gray-500 dark:text-gray-400" />
                <select
                  value={filter}
                  onChange={handleFilterChange}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-lg"
                >
                  <option value="all">All</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Mobile Development">Mobile Development</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="text-gray-500 dark:text-gray-400" />
                <select
                  value={sort}
                  onChange={handleSortChange}
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-2 rounded-lg"
                >
                  <option value="default">Default</option>
                  <option value="xp">XP</option>
                  <option value="lessons">Lessons</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCourses.map((course) => (
              <ExploreCourseCard
                key={course.id}
                course={course}
                onClick={() => openCourseModal(course)}
              />
            ))}
          </div>
        </section>
        
      </main>
      

      {/* Course Details Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeCourseModal}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedCourse.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {selectedCourse.description}
              </p>
              <div className="flex justify-end">
                <button
                  onClick={closeCourseModal}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        
      </AnimatePresence>
    </div>
  );
}