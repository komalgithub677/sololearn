import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Discuss = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Trending");
  const [discussions, setDiscussions] = useState([]);
  const [hotTopics, setHotTopics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const itemsPerPage = 3;

  useEffect(() => {
    const discussionData = [
      { id: 1, title: "[OFFICIAL] 📌 Valentine's Day Code Competition ❤️", description: "Join the Valentine's Day coding competition!", votes: 29, answers: 15, date: "Jan 31, 2025", author: "Nane" },
      { id: 2, title: "[RESOLVED] Is there a problem in the system?", description: "Courses are not opening anymore.", votes: 4, answers: 28, date: "Feb 5, 2025", author: "Jafar Tamimi" },
      { id: 3, title: "What is the best coding language?", description: "Which programming language do developers prefer the most?", votes: 0, answers: 12, date: "Jan 21, 2025", author: "Someone" },
      { id: 4, title: "How do I implement binary search?", description: "Can someone explain how binary search works?", votes: 10, answers: 5, date: "Feb 2, 2025", author: "Alice" },
      { id: 5, title: "What are closures in JavaScript?", description: "I need a simple explanation of closures.", votes: 8, answers: 9, date: "Feb 3, 2025", author: "Bob" }
    ];

    const hotTopicsData = [
      { id: 1, title: "Is there a problem in the system?", votes: 4 },
      { id: 2, title: "Virtual memory verification", votes: 1 },
      { id: 3, title: "Anagram", votes: 0 },
      { id: 4, title: "Where is React course?", votes: 2 },
      { id: 5, title: "How do people get that much XP?", votes: 1 },
      { id: 6, title: "OOP Python Project", votes: 1 }
    ];

    setDiscussions(discussionData);
    setHotTopics(hotTopicsData);
  }, []);

  const filteredDiscussions = discussions.filter(q => 
    q.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDiscussions.length / itemsPerPage);
  const displayedDiscussions = filteredDiscussions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAskQuestion = () => {
    if (newQuestion.trim() !== "") {
      const newQ = {
        id: discussions.length + 1,
        title: newQuestion,
        description: "New user question",
        votes: 0,
        answers: 0,
        date: new Date().toLocaleDateString(),
        author: "Anonymous"
      };
      setDiscussions([newQ, ...discussions]);
      setNewQuestion("");
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Navbar */}
      <Navbar/>

      {/* Logo Redirect */}
      <div className="flex justify-center my-4">
        <Link 
          to="/"
          className="cursor-pointer flex items-center justify-center"
        >
          <h1 className="text-2xl font-bold text-black">SoloLearn</h1>
        </Link>
      </div>

      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Panel */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Q&A Discussions</h1>
            
            {/* Search & Filter Bar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    placeholder="Search discussions..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-4">
                  <select 
                    value={selectedFilter} 
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 bg-white"
                  >
                    <option value="Trending">Trending</option>
                    <option value="Most Recent">Most Recent</option>
                    <option value="Unanswered">Unanswered</option>
                    <option value="My Questions">My Questions</option>
                    <option value="My Answers">My Answers</option>
                  </select>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Ask a Question
                  </button>
                </div>
              </div>
            </div>

            {/* Discussions List */}
            <div className="space-y-4">
              {displayedDiscussions.map((q) => (
                <div 
                  key={q.id} 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedQuestion(q)}
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{q.title}</h2>
                  <p className="text-gray-600 mb-4">{q.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <span>👍 {q.votes} Votes</span>
                      <span>💬 {q.answers} Answers</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium">
                        {q.author.charAt(0)}
                      </div>
                      <div className="ml-2">
                        <p className="text-sm text-gray-600">{q.author}</p>
                        <p className="text-xs text-gray-500">{q.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-6">
              <button 
                disabled={currentPage === 1} 
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
              <button 
                disabled={currentPage === totalPages} 
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-80">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Hot Today</h2>
              <div className="space-y-4">
                {hotTopics.map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between">
                    <p className="text-gray-600 flex-1">{topic.title}</p>
                    <span className="text-sm text-gray-500">👍 {topic.votes}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ask Question Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ask a Question</h2>
            <input 
              type="text" 
              placeholder="What's your question?" 
              value={newQuestion} 
              onChange={(e) => setNewQuestion(e.target.value)} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleAskQuestion}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question Details Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedQuestion.title}</h2>
            <p className="text-gray-600 mb-4">{selectedQuestion.description}</p>
            <div className="flex justify-end">
              <button 
                onClick={() => setSelectedQuestion(null)}
                className="px-6 py-2 border rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discuss;