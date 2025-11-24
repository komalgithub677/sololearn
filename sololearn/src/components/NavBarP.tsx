import { useState, useRef } from 'react';
import React from "react";
import { ChevronDown } from "lucide-react";
import { Code2, Search, Menu, X, Sun, Moon, Bell, User, BookOpen, Rocket, GraduationCap, Trophy, Code, MessageCircle, PenTool } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

export default function NavBarP() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [notifications] = useState(3); // Mock notifications count
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const courseCategories = [
    {
      name: 'Beginner',
      icon: <BookOpen size={24} />,
      courses: [
        { name: 'HTML Basics', path: '/html', progress: 30 },
        { name: 'CSS Fundamentals', path: '/css', progress: 45 },
        { name: 'Python Intro', path: '/python', progress: 70 }
      ]
    },
    {
      name: 'Intermediate',
      icon: <Rocket size={24} />,
      courses: [
        { name: 'JavaScript Deep Dive', path: '/js', progress: 60 },
        { name: 'React Essentials', path: '/react', progress: 25 },
        { name: 'Node.js Basics', path: '/node', progress: 85 }
      ]
    },
    {
      name: 'Advanced',
      icon: <GraduationCap size={24} />,
      courses: [
        { name: 'Data Structures', path: '/dsa', progress: 40 },
        { name: 'Algorithms', path: '/algo', progress: 55 },
        { name: 'System Design', path: '/system-design', progress: 15 }
      ]
    }
  ];

  const suggestions = [
    { term: 'home', path: '/', category: 'Pages' },
    { term: 'teams', path: '/teams', category: 'Pages' },
    { term: 'discussp', path: '/discussp', category: 'Pages' },
    { term: 'leaderboard', path: '/leaderboard', category: 'Pages' },
    { term: 'code bits', path: '/code-bits', category: 'Pages' },
    { term: 'blog', path: '/blog', category: 'Pages' },
    { term: 'signin', path: '/login', category: 'Account' },
    { term: 'signup', path: '/signup', category: 'Account' },
    ...courseCategories.flatMap(category =>
      category.courses.map(course => ({
        term: course.name.toLowerCase(),
        path: course.path,
        category: category.name
      }))
    )
  ];

  const handleSearch = debounce((term: string) => {
    setSearchTerm(term);
    setShowSuggestions(term.length > 0);
  }, 300);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setSelectedSuggestionIndex(prev =>
        Math.min(prev + 1, filteredSuggestions.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setSelectedSuggestionIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && selectedSuggestionIndex >= 0) {
      navigate(filteredSuggestions[selectedSuggestionIndex].path);
      setShowSuggestions(false);
    }
  };

  const filteredSuggestions = suggestions
    .filter(s => s.term.includes(searchTerm.toLowerCase()))
    .slice(0, 8);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  const renderSuggestions = () => (
    filteredSuggestions.map((suggestion, index) => (
      <motion.div
        key={`${suggestion.term}-${index}`}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        <div
          className={`p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
            index === selectedSuggestionIndex ? 'bg-blue-50 dark:bg-blue-900' : ''
          }`}
          onClick={() => navigate(suggestion.path)}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">
              {suggestion.term.split(new RegExp(`(${searchTerm})`, 'gi')).map((part, i) =>
                part.toLowerCase() === searchTerm.toLowerCase() ? (
                  <span key={i} className="text-blue-600">{part}</span>
                ) : (
                  part
                )
              )}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {suggestion.category}
            </span>
          </div>
        </div>
      </motion.div>
    ))
  );

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm'
          : 'bg-white dark:bg-gray-900'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-8">
            <Link to="/profile" className="flex items-center space-x-2 group">
              <Code2 className="h-10 w-10 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                Sololearn
              </span>
            </Link>

            

            {/* Additional Sections */}
            <div className="hidden lg:flex items-center space-x-12">
              <Link to="/CoursePage" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                <BookOpen size={24} />
                <span className="text-lg">Course</span>
              </Link>
              <Link to="/leaderboard" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                <Trophy size={24} />
                <span className="text-lg">Leaderboard</span>
              </Link>
              <Link to="/Codebits" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                <Code size={24} />
                <span className="text-lg">Code Bits</span>
              </Link>
              <Link to="/discussp" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                <MessageCircle size={24} />
                <span className="text-lg">Discuss</span>
              </Link>
              <Link to="/blog" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                <PenTool size={24} />
                <span className="text-lg">Blog</span>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className={``}>

          <div className="flex items-center">
            {/* Search Bar */}
            {/* <div className="relative hidden md:block" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, topics..."
                  className="w-72 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                  onChange={(e) => handleSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => setShowSuggestions(true)}
                />
                <Search className="absolute right-4 top-3.5 text-gray-400" size={24} />
              </div>

              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                  >
                    {renderSuggestions()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

            {/* Notifications */}
            
          
            {/* Profile */}
            <div className="relative group">
              <button className="flex items-center space-x-2 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <User className="text-gray-300" size={24} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  to="/profile"
                  className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  My Profile
                </Link>
                <Link
                  to="/">
                <button className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Sign Out
                  </button>
                  </Link>
              </div>
            </div>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
                />
                <Search className="absolute right-4 top-3.5 text-gray-400" size={24} />
              </div>

              {courseCategories.map((category) => (
                <div key={category.name} className="border rounded-lg">
                  <button
                    className="w-full px-4 py-3 flex items-center justify-between"
                    onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
                  >
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <span className="text-lg">{category.name}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openCategory === category.name ? 180 : 0 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  {openCategory === category.name && (
                    <div className="px-4 pb-3 space-y-3">
                      {category.courses.map((course) => (
                        <Link
                          key={course.name}
                          to={course.path}
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="space-y-2">
                <Link to="/leaderboard" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  Leaderboard
                </Link>
                <Link to="/Codebits" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  Code Bits
                </Link>
                <Link to="/discussp" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  Discuss
                </Link>
                <Link to="/blog" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  Blog
                </Link>
                <Link to="/login" className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                  Sign In
                </Link>
                <Link to="/signup" className="block px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Sign Up Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}