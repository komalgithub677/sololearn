import { useState, useRef, useEffect } from 'react';
import { Code2, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const keywords = ['c', 'c++', 'html', 'python', 'sql', 'java'];
  const suggestions = [
    { term: 'home', path: '/' },
    { term: 'teams', path: '/TeamsPage' },
    { term: 'discuss', path: '/Discuss' },
    { term: 'signin', path: '/Loginmain' },
    { term: 'signup', path: '/SignUp' },
    ...keywords.map((term) => ({ term, path: '/CoursePage' })),
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
    setShowSuggestions(true);
  };

  const handleSearch = () => {
    const suggestion = suggestions.find((s) => s.term === searchTerm.toLowerCase());
    if (suggestion) {
      navigate(suggestion.path);
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (term: string) => {
    setSearchTerm(term);
    const suggestion = suggestions.find((s) => s.term === term.toLowerCase());
    if (suggestion) {
      navigate(suggestion.path);
    }
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions
    .filter((s) => s.term.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 6); // Limit to 6 suggestions

    const [user, setUser] = useState(null);
  
    // useEffect(() => {
    //   // Check localStorage for a logged-in session
    //   const storedUser = localStorage.getItem("user");
    //   if (storedUser) {
    //     setUser(JSON.parse(storedUser));
    //   }
    // }, [setUser]);


    useEffect(() => {
      // Check localStorage for a logged-in session
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      }
    }, [setUser]);
  
    const handleLogout = () => {
      googleLogout();
      setUser(null);
      localStorage.removeItem("user");
    };


  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center cursor-pointer">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Sololearn</span>
            </Link>

            <div className="hidden lg:flex items-center ml-8 space-x-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Home
              </Link>
              <Link to="/SignIn" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Code Playground
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={searchRef}>
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'w-96' : 'w-64'}`}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  onFocus={() => {
                    setIsSearchFocused(true);
                    setShowSuggestions(true);
                  }}
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  value={searchTerm}
                  className="pl-10 pr-24 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={handleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors text-sm"
                >
                  Search
                </button>
              </div>
              <AnimatePresence>
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                  >
                    {filteredSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion.term)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-2 border-b last:border-b-0 border-gray-100"
                      >
                        <Search className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700">{suggestion.term}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/discuss" className="text-gray-600 hover:text-gray-900">Discuss</Link>
            <Link to="/TeamsPage" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              Teams
            </Link>
              {!user ? (<><Link to="/Login" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Sign in
              </Link>
                              <Link to="/SignUp" className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                Sign Up Free
                              </Link></>):(
                                <button onClick={handleLogout} className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                LogOut
                              </button>
                              )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  value={searchTerm}
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={handleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
              {showSuggestions && filteredSuggestions.length > 0 && (
                <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  {filteredSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.term)}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-2 border-b last:border-b-0 border-gray-100"
                    >
                      <Search className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{suggestion.term}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="px-2 py-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Learn</Link>
              <Link to="/SignIn" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Code Playground</Link>
              <Link to="/discuss" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Discuss
              </Link>
              <Link to="/TeamsPage" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Teams
              </Link>
              <div className="pt-4 flex flex-col gap-2">
                {!user ? (<><Link to="/Loginmain" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                Sign in
              </Link>
                              <Link to="/SignUp" className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                Sign Up Free
                              </Link></>):(
                                <button onClick={handleLogout} className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                                LogOut
                              </button>
                              )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}