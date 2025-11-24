// import { ChevronDown, MessageSquare, ThumbsUp } from "lucide-react";
// import { useState } from "react";

// // Initial questions array (with description fields)
// const initialQuestions = [
//   {
//     title: "[OFFICIAL] 📢 Join the Valentine's Day Code Competition Now! ❤️",
//     date: "10th Feb 2025, 2:21 PM",
//     author: "Nane",
//     votes: 40,
//     answers: 63,
//     tags: ["codewithlove", "sololearn"],
//     description:
//       "Love is in the code! Create and share your heart/love-themed code for a chance to win special rewards. Post your code from Feb 10–17 in the Code Playground. Sololearn's Cupid Curation team will review submissions based on creativity, originality, and charm!",
//   },
//   {
//     title:
//       "[RESOLVED] Is there a problem in the system? The courses is not opening anymore",
//     date: "5th Feb 2025, 3:52 PM",
//     author: "jafar tamimi",
//     votes: 7,
//     answers: 31,
//     tags: ["error"],
//     description:
//       "I'm experiencing an issue where the courses won't open. The screen stays blank. Is this a known bug or server issue?",
//   },
//   {
//     title: "Usage of JS Tools to display structural formulae",
//     tags: [
//       "chemistry",
//       "inchi",
//       "molpaint",
//       "jsTools",
//       "latex",
//       "structuralformulae",
//     ],
//     votes: 3,
//     answers: 19,
//     date: "8th Feb 2025, 3:11 AM",
//     author: "Konan",
//     description:
//       "I want to display structural formulae in my web page using JavaScript tools. Looking for libraries or suggestions (molpaint, inchi, etc.) on how to implement this.",
//   },
//   {
//     title: "Solved Chess tournament you’re creating code for a chess tournament",
//     tags: ["python"],
//     votes: 2,
//     answers: 17,
//     date: "18th Feb 2025, 1:37 PM",
//     author: "Christian Francis",
//     description:
//       "I built a Python program to manage a chess tournament, but I'm stuck on pairing logic. I'd appreciate any tips to handle the pairing algorithm efficiently.",
//   },
//   {
//     title: "How can I make this print the value instead of just the string??",
//     tags: ["python"],
//     votes: 1,
//     answers: 4,
//     date: "13th Feb 2025, 5:44 PM",
//     author: "Squilliam Fancyson",
//     description:
//       "I'm trying to print a variable's actual value, but it only prints the string literal. Possibly an issue with f-strings or formatting. Help?",
//   },
//   {
//     title:
//       "Why sound is not playing multiple times? Check line 141, other sound codes on top",
//     tags: ["javascript", "sound"],
//     votes: 2,
//     answers: 4,
//     date: "8th Feb 2025, 11:51 AM",
//     author: "Sword",
//     description:
//       "I have a JavaScript function to play a sound, but it only plays once and won't replay. Looking for a way to reset or replay the audio each time.",
//   },
//   {
//     title: "SHOULD I GIVE UP SOLOLEARN?...",
//     tags: ["python"],
//     votes: 3,
//     answers: 8,
//     date: "31st Jan 2025, 10:02 PM",
//     author: 'print ("python")',
//     description:
//       "I'm feeling frustrated with my progress on SoloLearn. I'm not sure if I should continue or try another platform. Looking for motivation!",
//   },
//   {
//     title:
//       "What's the most underrated programming concept that every beginner should master?",
//     tags: ["problem-solving", "programmingconcepts"],
//     votes: 5,
//     answers: 11,
//     date: "25th Jan 2025, 11:45 PM",
//     author: "DTan",
//     description:
//       "In your opinion, what's a concept that doesn't get enough attention but is crucial for beginners to learn thoroughly?",
//   },
//   {
//     title: "How do I fix this JavaScript function?",
//     tags: ["javascript"],
//     votes: 3,
//     answers: 6,
//     date: "20th Jan 2025, 3:20 PM",
//     author: "JohnDoe",
//     description:
//       "My JS function doesn't return the expected results. It might be a scope or closure issue. Could someone spot the problem?",
//   },
//   {
//     title: "What is the best way to learn data structures?",
//     tags: ["data-structures", "learning"],
//     votes: 4,
//     answers: 9,
//     date: "18th Jan 2025, 6:30 PM",
//     author: "Coder123",
//     description:
//       "Looking for advice or resources to effectively learn data structures (lists, trees, graphs, etc.) from the ground up.",
//   },
//   {
//     title:
//       "How can a recursive function works perfectly in a for loop with large numbers while calling it too many times raises an error?",
//     tags: ["for_loop", "python", "recursion"],
//     votes: 2,
//     answers: 17,
//     date: "28th Feb 2025, 11:37 PM",
//     author: "Francisly",
//     description:
//       "My recursive function works fine in a loop for large inputs, but if I call it repeatedly, it hits recursion limits. How can I handle that?",
//   },
//   {
//     title: "I was rated 5 out of 10 for this code",
//     tags: ["c++", "condition_variable", "mutex", "threads"],
//     votes: 12,
//     answers: 27,
//     date: "28th Mar 2025, 12:37 PM",
//     author: "Charlie",
//     description:
//       "I wrote a multithreaded C++ program using condition_variable and mutex. I'd love feedback to improve from a 5/10 rating.",
//   },
//   {
//     title: "Can someone suggest codespace to run my code (react.js)?",
//     tags: [".jsx"],
//     votes: 2,
//     answers: 17,
//     date: "18th Feb 2025, 1:15 PM",
//     author: "Sakshi Sarma",
//     description:
//       "I'm looking for a cloud-based environment (like Codesandbox, StackBlitz, etc.) to run my React.js code. Any suggestions?",
//   },
//   {
//     title: "Is there any way to retrieve the courses progress and chats",
//     tags: ["chats", "courseprogress", "retrieve", "sololearn"],
//     votes: 2,
//     answers: 17,
//     date: "18th Jan 2025, 8:37 PM",
//     author: "Sanjana",
//     description:
//       "I lost my device and want to retrieve my old course progress and chat history from SoloLearn. Is that possible?",
//   },
//   {
//     title: "Teach programming",
//     tags: ["lessons", "python", "tech"],
//     votes: 2,
//     answers: 17,
//     date: "18th Feb 2025, 1:37 PM",
//     author: "GoonieMoo",
//     description:
//       "I want to share my knowledge and teach programming. Looking for tips or best practices to structure lessons effectively.",
//   },
//   {
//     title: "Input - Tom Alice Bob help please",
//     tags: ["python"],
//     votes: 2,
//     answers: 17,
//     date: "18th Feb 2025, 1:37 PM",
//     author: "Christian Francis",
//     description:
//       "Need help parsing multiple names (Tom, Alice, Bob) from a single input line in Python. Any code examples?",
//   },
//   {
//     title: "Function pointer for templated class method",
//     tags: ["python"],
//     votes: 2,
//     answers: 17,
//     date: "18th Dec 2024, 1:37 PM",
//     author: "Christian Jack",
//     description:
//       "In C++ I'm trying to create a function pointer to a templated class method. Not sure how to handle the template parameters.",
//   },
//   {
//     title: "Is it legal to use conditional preprocessors inside a macro function?",
//     tags: ["python"],
//     votes: 2,
//     answers: 17,
//     date: "18th Jan 2025, 1:37 PM",
//     author: "Mick",
//     description:
//       "Wondering if #ifdef or #if can be used inside a macro function. Is this valid or recommended in C/C++?",
//   },
// ];

// const Discuss = () => {
//   // States for filtering, searching, modals, etc.
//   const [selectedFilter, setSelectedFilter] = useState("Trending");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   // "Ask a question" form states
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestionTitle, setNewQuestionTitle] = useState("");
//   const [newQuestionDesc, setNewQuestionDesc] = useState("");
//   const [newQuestionTags, setNewQuestionTags] = useState("");

//   // Main questions list state & pagination
//   const [questionsList, setQuestionsList] = useState(initialQuestions);
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 39;

//   // "Hot topics" array
//   const hotTopics = [
//     { title: "Certificate Problem", votes: 0 },
//     { title: "Find courses", votes: 0 },
//     { title: "How to learn css and html", votes: 0 },
//     { title: "Python shortcut exercise question", votes: 0 },
//     { title: "C pointers", votes: 0 },
//     {
//       title:
//         "what the hell is going on this lessons cause i cant understand anything or any of the videos",
//       votes: 0,
//     },
//   ];

//   // State to track which question is selected (for detail view)
//   const [selectedQuestion, setSelectedQuestion] = useState(null);

//   // Filter questions based on search query
//   const filteredQuestions = questionsList.filter((q) =>
//     q.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Render pagination buttons
//   const renderPaginationButtons = () => {
//     const buttons = [];

//     // Previous button
//     buttons.push(
//       <button
//         key="prev"
//         onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
//         className={`px-4 py-2 bg-white text-[#29A7FF] border border-gray-300 rounded-md glowing-button interactive-button ${
//           currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#E7F3FF]"
//         }`}
//         disabled={currentPage === 1}
//       >
//         &lt; Previous
//       </button>
//     );

//     // First page button
//     buttons.push(
//       <button
//         key={1}
//         onClick={() => setCurrentPage(1)}
//         className={`w-10 h-10 border border-gray-300 rounded-md glowing-button interactive-button ${
//           currentPage === 1
//             ? "bg-[#29A7FF] text-white"
//             : "bg-white text-[#29A7FF] hover:bg-[#E7F3FF]"
//         }`}
//       >
//         1
//       </button>
//     );

//     // Ellipsis if needed
//     if (currentPage > 3) {
//       buttons.push(
//         <span key="ellipsis1" className="px-2">
//           ...
//         </span>
//       );
//     }

//     for (
//       let i = Math.max(2, currentPage - 1);
//       i <= Math.min(totalPages - 1, currentPage + 1);
//       i++
//     ) {
//       if (i === 1 || i === totalPages) continue;
//       buttons.push(
//         <button
//           key={i}
//           onClick={() => setCurrentPage(i)}
//           className={`w-10 h-10 border border-gray-300 rounded-md glowing-button interactive-button ${
//             currentPage === i
//               ? "bg-[#29A7FF] text-white"
//               : "bg-white text-[#29A7FF] hover:bg-[#E7F3FF]"
//           }`}
//         >
//           {i}
//         </button>
//       );
//     }

//     if (currentPage < totalPages - 2) {
//       buttons.push(
//         <span key="ellipsis2" className="px-2">
//           ...
//         </span>
//       );
//     }

//     // Last page button
//     if (totalPages > 1) {
//       buttons.push(
//         <button
//           key={totalPages}
//           onClick={() => setCurrentPage(totalPages)}
//           className={`w-10 h-10 border border-gray-300 rounded-md glowing-button interactive-button ${
//             currentPage === totalPages
//               ? "bg-[#29A7FF] text-white"
//               : "bg-white text-[#29A7FF] hover:bg-[#E7F3FF]"
//           }`}
//         >
//           {totalPages}
//         </button>
//       );
//     }

//     // Next button
//     buttons.push(
//       <button
//         key="next"
//         onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
//         className={`px-4 py-2 bg-white text-[#29A7FF] border border-gray-300 rounded-md glowing-button interactive-button ${
//           currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#E7F3FF]"
//         }`}
//         disabled={currentPage === totalPages}
//       >
//         Next &gt;
//       </button>
//     );

//     return buttons;
//   };

//   // Handle new question submission
//   const handleSubmitQuestion = () => {
//     if (!newQuestionTitle.trim()) return;

//     const newQ = {
//       title: newQuestionTitle.trim(),
//       description: newQuestionDesc.trim(),
//       tags: newQuestionTags
//         .split(/[\s,]+/)
//         .filter((tag) => tag)
//         .slice(0, 10),
//       votes: 0,
//       answers: 0,
//       date: new Date().toLocaleString(),
//       author: "You",
//     };

//     // Add the new question to the top of the list
//     setQuestionsList([newQ, ...questionsList]);

//     // Reset form and close modal
//     setNewQuestionTitle("");
//     setNewQuestionDesc("");
//     setNewQuestionTags("");
//     setShowModal(false);
//   };

//   // When a question is clicked, show its detail view
//   const handleQuestionClick = (question) => {
//     setSelectedQuestion(question);
//   };

//   // Back button handler: return to the Q&A list
//   const handleBackToList = () => {
//     setSelectedQuestion(null);
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-100 text-[#212529]">
//       {/* Glowing button effect */}
//       <style jsx>{`
//         .glowing-button {
//           position: relative;
//           z-index: 1;
//           overflow: hidden;
//         }
//         .glowing-button::before {
//           content: "";
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: conic-gradient(from 0deg, #29a7ff, #0077cc, #29a7ff);
//           filter: blur(8px);
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           animation: rotateGlow 4s linear infinite;
//           z-index: -1;
//         }
//         .glowing-button:hover::before {
//           opacity: 1;
//         }
//         @keyframes rotateGlow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>

      

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="md:col-span-2">
//             {/* 1) Q&A List (only if not asking a question and no question is selected) */}
//             {!showModal && !selectedQuestion && (
//               <>
//                 <h1 className="text-2xl font-semibold mb-6">Q&A Discussions</h1>

//                 {/* Search & Filter */}
//                 <div className="flex gap-2 mb-4">
//                   <div className="flex-1 relative">
//                     <input
//                       type="text"
//                       placeholder="Search..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md transition-all duration-200 hover:shadow-md focus:shadow-lg focus:outline-none"
//                     />
//                   </div>
//                   <button className="px-6 py-2 bg-[#29A7FF] text-white rounded-md glowing-button interactive-button hover:bg-[#0077CC] transition-transform transform">
//                     Search
//                   </button>
//                 </div>

//                 {/* Filter Dropdown + Ask a Question Button */}
//                 <div className="flex justify-between items-center mb-6">
//                   <div className="relative">
//                     <button
//                       className="flex items-center px-4 py-2 bg-white rounded-md shadow-sm w-48 glowing-button interactive-button transition-transform transform"
//                       onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     >
//                       <span>{selectedFilter}</span>
//                       <ChevronDown className="ml-2" size={20} />
//                     </button>
//                     {isDropdownOpen && (
//                       <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10">
//                         <button
//                           className="block w-full text-left px-4 py-2 bg-[#E7F3FF] glowing-button interactive-button hover:bg-[#D0E3F1] transition-colors"
//                           onClick={() => {
//                             setSelectedFilter("Trending");
//                             setIsDropdownOpen(false);
//                           }}
//                         >
//                           Trending
//                         </button>
//                         <button
//                           className="block w-full text-left px-4 py-2 glowing-button interactive-button hover:bg-[#D0E3F1] transition-colors"
//                           onClick={() => {
//                             setSelectedFilter("Most Recent");
//                             setIsDropdownOpen(false);
//                           }}
//                         >
//                           Most Recent
//                         </button>
//                         <button
//                           className="block w-full text-left px-4 py-2 glowing-button interactive-button hover:bg-[#D0E3F1] transition-colors"
//                           onClick={() => {
//                             setSelectedFilter("Unanswered");
//                             setIsDropdownOpen(false);
//                           }}
//                         >
//                           Unanswered
//                         </button>
//                         <button
//                           className="block w-full text-left px-4 py-2 glowing-button interactive-button hover:bg-[#D0E3F1] transition-colors"
//                           onClick={() => {
//                             setSelectedFilter("My Questions");
//                             setIsDropdownOpen(false);
//                           }}
//                         >
//                           My Questions
//                         </button>
//                         <button
//                           className="block w-full text-left px-4 py-2 glowing-button interactive-button hover:bg-[#D0E3F1] transition-colors"
//                           onClick={() => {
//                             setSelectedFilter("My Answers");
//                             setIsDropdownOpen(false);
//                           }}
//                         >
//                           My Answers
//                         </button>
//                       </div>
//                     )}
//                   </div>

//                   <button
//                     onClick={() => setShowModal(true)}
//                     className="px-6 h-10 bg-[#29A7FF] text-white rounded-md glowing-button interactive-button transition-transform transform hover:bg-[#0077CC]"
//                   >
//                     Ask a question
//                   </button>
//                 </div>

//                 {/* Questions List */}
//                 <div className="space-y-4">
//                   {filteredQuestions.map((question, index) => (
//                     <div
//                       key={index}
//                       className="bg-white p-4 rounded-md shadow-sm transition-shadow hover:shadow-lg cursor-pointer"
//                       onClick={() => handleQuestionClick(question)}
//                     >
//                       <h3 className="text-lg font-medium mb-2 hover:text-gray-800">
//                         {question.title}
//                       </h3>
//                       <div className="flex flex-wrap gap-2 mb-3">
//                         {question.tags?.map((tag, tagIndex) => (
//                           <span
//                             key={tagIndex}
//                             className="px-2 py-1 bg-[#E1ECF4] text-[#39739D] text-sm rounded-md glowing-button interactive-button transition-colors hover:bg-[#D0E3F1]"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="flex items-center justify-between text-sm text-gray-600">
//                         <div className="flex items-center gap-4">
//                           <span className="flex items-center gap-1">
//                             <ThumbsUp size={16} /> {question.votes} Votes
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <MessageSquare size={16} /> {question.answers} Answers
//                           </span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <span>{question.date}</span>
//                           <span className="font-medium text-black hover:text-gray-800">
//                             {question.author}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* "Ask a question" Button and Pagination */}
//                 <div className="flex flex-col mt-8 mb-8 space-y-4">
//                   <div className="flex justify-end">
//                     <button
//                       onClick={() => setShowModal(true)}
//                       className="px-6 py-2 bg-[#29A7FF] text-white rounded-md glowing-button interactive-button transition-transform transform hover:bg-[#0077CC]"
//                     >
//                       Ask a question
//                     </button>
//                   </div>
//                   <div className="flex justify-center space-x-2">
//                     {renderPaginationButtons()}
//                   </div>
//                 </div>
//               </>
//             )}

//             {/* 2) "Ask a question" Form */}
//             {showModal && (
//               <div className="bg-white p-6 rounded-md shadow-sm">
//                 <h2 className="text-2xl font-bold mb-4">Ask the community a question</h2>

//                 <label className="block font-semibold mb-1">Your question</label>
//                 <input
//                   type="text"
//                   placeholder="Tip: write as if asking a friend, being as specific as possible"
//                   value={newQuestionTitle}
//                   onChange={(e) => setNewQuestionTitle(e.target.value)}
//                   className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 />

//                 <label className="block font-semibold mb-1">Description</label>
//                 <textarea
//                   placeholder="Include as much detail as possible to get the most relevant answers..."
//                   value={newQuestionDesc}
//                   onChange={(e) => setNewQuestionDesc(e.target.value)}
//                   className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                   rows={4}
//                 />

//                 <label className="block font-semibold mb-1">Tags</label>
//                 <input
//                   type="text"
//                   placeholder="Start typing to add tags... (up to 10)"
//                   value={newQuestionTags}
//                   onChange={(e) => setNewQuestionTags(e.target.value)}
//                   className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 />

//                 <div className="flex justify-end space-x-2">
//                   <button
//                     onClick={() => {
//                       setShowModal(false);
//                       // Optionally reset the form fields here if needed:
//                       // setNewQuestionTitle("");
//                       // setNewQuestionDesc("");
//                       // setNewQuestionTags("");
//                     }}
//                     className="px-4 py-2 bg-gray-500 text-white rounded-md glowing-button interactive-button hover:bg-gray-600 transition duration-300"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleSubmitQuestion}
//                     className="px-4 py-2 bg-[#29A7FF] text-white rounded-md glowing-button interactive-button hover:bg-[#0077CC] transition duration-300"
//                   >
//                     Post question
//                   </button>
//                 </div>
//               </div>
//             )}

//             {/* 3) Question Detail View */}
//             {!showModal && selectedQuestion && (
//               <>
//                 <div className="bg-white p-6 rounded-md shadow-sm relative">
//                   <h2 className="text-2xl font-bold mb-4">{selectedQuestion.title}</h2>
//                   <p className="mb-4">{selectedQuestion.description}</p>

//                   {/* Bottom-right: author and date/time */}
//                   <div className="absolute bottom-4 right-4 text-right text-sm text-gray-600">
//                     <p>
//                       <strong>Asked by:</strong> {selectedQuestion.author}
//                     </p>
//                     <p>
//                       <strong>Date:</strong> {selectedQuestion.date}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Buttons: Back and Answer */}
//                 <div className="flex justify-end mt-2 space-x-2">
//                   <button
//                     onClick={handleBackToList}
//                     className="px-4 py-2 bg-gray-500 text-white rounded-md glowing-button interactive-button hover:bg-gray-600 transition duration-300"
//                   >
//                     Back
//                   </button>
//                   <button className="px-4 py-2 bg-[#29A7FF] text-white rounded-md glowing-button interactive-button hover:bg-[#0077CC] transition duration-300">
//                     Answer
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Right Column: Hot Today */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Hot today</h2>
//             <div className="space-y-4">
//               {hotTopics.map((topic, index) => (
//                 <div
//                   key={index}
//                   className="py-3 rounded-md shadow-sm bg-white px-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors glowing-button interactive-button"
//                 >
//                   <h3 className="hover:text-gray-800 cursor-pointer mb-2">
//                     {topic.title}
//                   </h3>
//                   <div className="flex items-center text-sm text-gray-600">
//                     <ThumbsUp size={16} className="mr-1" />
//                     {topic.votes} Votes
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-[#333] text-white py-8 mt-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-5 gap-8">
//           <div>
//             <h4 className="font-bold mb-2">Learning paths</h4>
//             <p>Coding Foundations</p>
//             <p>Python Developer</p>
//             <p>Web Development</p>
//             <p>Front-end for Beginners</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">Introduction Courses</h4>
//             <p>Introduction to Python</p>
//             <p>Introduction to C</p>
//             <p>Introduction to SQL</p>
//             <p>Introduction to HTML</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">Intermediate Courses</h4>
//             <p>C# Intermediate</p>
//             <p>Python Intermediate</p>
//             <p>JavaScript</p>
//             <p>C++ Intermediate</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">Community</h4>
//             <p>Discuss</p>
//             <p>Code Bits</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-2">Language</h4>
//             <select className="bg-[#333] text-white border border-white mt-1 p-1">
//               <option>English</option>
//               <option>Español</option>
//               <option>Deutsch</option>
//             </select>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Discuss;


// import { AnimatePresence, motion } from 'framer-motion';
// import { ArrowDown, ArrowUp, Clock, Flame, MessageCircle, Search, X } from 'lucide-react';
// import { useState } from 'react';

// interface Question {
//   id: string;
//   title: string;
//   author: string;
//   votes: number;
//   tags: string[];
//   answers: number;
//   date: string;
//   content: string;
// }

// // Initial sample questions
// const initialQuestions: Question[] = [
//   {
//     id: '1',
//     title: 'How to center a div in Tailwind CSS?',
//     author: 'Sarah',
//     votes: 145,
//     tags: ['css', 'tailwind', 'layout'],
//     answers: 8,
//     date: '2025-05-21T14:00:00Z',
//     content: "I'm struggling with centering elements both vertically and horizontally. What's the best Tailwind class combination for perfect centering?"
//   },
//   {
//     id: '2',
//     title: 'React state not updating immediately after setState',
//     author: 'Mike',
//     votes: 89,
//     tags: ['react', 'state-management'],
//     answers: 5,
//     date: '2025-05-21T10:00:00Z',
//     content: "Why doesn't my component re-render immediately after calling setState? Here's my code example..."
//   },
//   {
//     id: '3',
//     title: 'Best practices for API authentication in Next.js?',
//     author: 'Emma',
//     votes: 203,
//     tags: ['nextjs', 'authentication', 'api'],
//     answers: 15,
//     date: '2025-05-20T09:00:00Z',
//     content: "Looking for recommendations on secure authentication patterns for a Next.js application with custom backend."
//   }
// ];

// export default function DiscussionPage() {
//   const [questions, setQuestions] = useState<Question[]>(initialQuestions);
//   const [sortConfig, setSortConfig] = useState<'votes' | 'date'>('votes');
//   const [showModal, setShowModal] = useState(false);
//   const [newQuestion, setNewQuestion] = useState({ title: '', content: '' });
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [voteHistory, setVoteHistory] = useState<Record<string, 'up' | 'down'>>({});

//   // Voting system with user vote tracking
//   const handleVote = (questionId: string, increment: boolean) => {
//     setQuestions(prev => prev.map(q => {
//       if (q.id === questionId) {
//         const newVotes = increment ? q.votes + 1 : q.votes - 1;
//         setVoteHistory(prev => ({
//           ...prev,
//           [questionId]: increment ? 'up' : 'down'
//         }));
//         return { ...q, votes: newVotes };
//       }
//       return q;
//     }));
//   };

//   // Enhanced question submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!newQuestion.title.trim() || !newQuestion.content.trim()) return;

//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     const newQ: Question = {
//       id: Date.now().toString(),
//       title: newQuestion.title.trim(),
//       content: newQuestion.content.trim(),
//       author: 'Current User',
//       votes: 0,
//       tags: [],
//       answers: 0,
//       date: new Date().toISOString()
//     };

//     setQuestions(prev => [newQ, ...prev]);
//     setNewQuestion({ title: '', content: '' });
//     setShowModal(false);
//     setIsSubmitting(false);
//   };

//   // Dynamic vote button styles
//   const getVoteButtonStyle = (questionId: string, direction: 'up' | 'down') => {
//     if (voteHistory[questionId] === direction) {
//       return direction === 'up'
//         ? 'text-green-600 bg-green-50'
//         : 'text-red-600 bg-red-50';
//     }
//     return 'text-gray-500 hover:bg-gray-50';
//   };

//   // Format date for display
//   const formatDate = (isoString: string) => {
//     const date = new Date(isoString);
//     return date.toLocaleString();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto pt-20">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//           <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
//             <MessageCircle className="w-8 h-8 text-blue-600" />
//             Community Discussions
//           </h1>
//           <button
//             onClick={() => setShowModal(true)}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//           >
//             <span>Ask Question</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//             </svg>
//           </button>
//         </div>

//         {/* Controls */}
//         <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search discussions..."
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg ${sortConfig === 'votes' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
//                 onClick={() => setSortConfig('votes')}
//               >
//                 <Flame className="w-5 h-5" />
//                 Popular
//               </button>
//               <button
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg ${sortConfig === 'date' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
//                 onClick={() => setSortConfig('date')}
//               >
//                 <Clock className="w-5 h-5" />
//                 Newest
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Questions List */}
//         <AnimatePresence mode='popLayout'>
//           {questions
//             .filter(q =>
//               q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//               q.content.toLowerCase().includes(searchQuery.toLowerCase())
//             )
//             .sort((a, b) => sortConfig === 'votes'
//               ? b.votes - a.votes
//               : new Date(b.date).getTime() - new Date(a.date).getTime())
//             .map((question) => (
//               <motion.div
//                 key={question.id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow mb-4"
//               >
//                 <div className="p-6">
//                   <div className="flex gap-4">
//                     {/* Voting Section */}
//                     <div className="flex flex-col items-center gap-2">
//                       <button
//                         onClick={() => handleVote(question.id, true)}
//                         className={`p-2 rounded-lg ${getVoteButtonStyle(question.id, 'up')}`}
//                       >
//                         <ArrowUp className="w-6 h-6" />
//                       </button>
//                       <span className="font-medium text-blue-600">
//                         {question.votes}
//                       </span>
//                       <button
//                         onClick={() => handleVote(question.id, false)}
//                         className={`p-2 rounded-lg ${getVoteButtonStyle(question.id, 'down')}`}
//                       >
//                         <ArrowDown className="w-6 h-6" />
//                       </button>
//                     </div>

//                     {/* Question Content */}
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
//                       <p className="text-gray-600 mb-4">{question.content}</p>

//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {question.tags.map(tag => (
//                           <span
//                             key={tag}
//                             className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
//                           >
//                             #{tag}
//                           </span>
//                         ))}
//                       </div>

//                       <div className="flex items-center gap-4 text-sm text-gray-500">
//                         <span className="flex items-center gap-1">
//                           <span className="font-medium">{question.author}</span>
//                           <span className="mx-1">·</span>
//                           <Clock className="w-4 h-4" />
//                           {formatDate(question.date)}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <MessageCircle className="w-4 h-4" />
//                           {question.answers} answers
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//         </AnimatePresence>

//         {/* Ask Question Modal */}
//         <AnimatePresence>
//           {showModal && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.95, y: 20 }}
//                 animate={{ scale: 1, y: 0 }}
//                 className="bg-white rounded-2xl w-full max-w-2xl"
//               >
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold">Ask a Question</h2>
//                     <button
//                       onClick={() => setShowModal(false)}
//                       className="p-2 rounded-lg hover:bg-gray-100"
//                     >
//                       <X className="w-6 h-6" />
//                     </button>
//                   </div>

//                   <form onSubmit={handleSubmit}>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium mb-1">Title</label>
//                         <input
//                           type="text"
//                           required
//                           placeholder="Be specific and imagine you're asking a question to another person"
//                           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                           value={newQuestion.title}
//                           onChange={(e) => setNewQuestion(prev => ({ ...prev, title: e.target.value }))}
//                         />
//                       </div>

//                       <div>
//                         <label className="block text-sm font-medium mb-1">Body</label>
//                         <textarea
//                           required
//                           rows={6}
//                           placeholder="Include all the information someone would need to answer your question"
//                           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                           value={newQuestion.content}
//                           onChange={(e) => setNewQuestion(prev => ({ ...prev, content: e.target.value }))}
//                         />
//                       </div>

//                       <div className="flex justify-end gap-2 mt-6">
//                         <button
//                           type="button"
//                           onClick={() => setShowModal(false)}
//                           className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
//                         >
//                           Cancel
//                         </button>
//                         <button
//                           type="submit"
//                           disabled={isSubmitting}
//                           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
//                         >
//                           {isSubmitting && (
//                             <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                           )}
//                           {isSubmitting ? 'Posting...' : 'Post Question'}
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }



import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowUp, Clock, Flame, MessageCircle, Search, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import NavBarP from './NavBarP';
import FooterP from './FooterP';

const API_URL = 'http://localhost:3000/api/questions';

interface Question {
  _id: string;
  title: string;
  content: string;
  author: string;
  votes: number;
  tags: string[];
  answers: number;
  date: string;
}

export default function DiscussionPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sortConfig, setSortConfig] = useState<'votes' | 'date'>('votes');
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch questions from backend
  useEffect(() => {
    axios.get(API_URL).then(res => setQuestions(res.data));
  }, []);

  // Post a new question
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newQuestion = {
      title: newTitle,
      content: newContent,
      author: 'Anonymous',
      tags: [],
    };
    const res = await axios.post(API_URL, newQuestion);
    setQuestions([res.data, ...questions]);
    setNewTitle('');
    setNewContent('');
    setShowModal(false);
    setIsSubmitting(false);
  };

  // Upvote/downvote (optional, requires backend patch route)
  const handleVote = async (id: string, vote: 1 | -1) => {
    const res = await axios.patch(`${API_URL}/${id}/vote`, { vote });
    setQuestions(questions =>
      questions.map(q => (q._id === id ? { ...q, votes: res.data.votes } : q))
    );
  };

  // Format date for display
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  return (
    <>
    <NavBarP/>
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto pt-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            Community Discussions
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <span>Ask Question</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search discussions..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${sortConfig === 'votes' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setSortConfig('votes')}
              >
                <Flame className="w-5 h-5" />
                Popular
              </button>
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${sortConfig === 'date' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={() => setSortConfig('date')}
              >
                <Clock className="w-5 h-5" />
                Newest
              </button>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <AnimatePresence mode='popLayout'>
          {questions
            .filter(q =>
              q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.content.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => sortConfig === 'votes'
              ? b.votes - a.votes
              : new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((question) => (
              <motion.div
                key={question._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow mb-4"
              >
                <div className="p-6">
                  <div className="flex gap-4">
                    {/* Voting Section */}
                    <div className="flex flex-col items-center gap-2">
                      <button
                        onClick={() => handleVote(question._id, 1)}
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-50"
                      >
                        <ArrowUp className="w-6 h-6" />
                      </button>
                      <span className="font-medium text-blue-600">
                        {question.votes}
                      </span>
                      <button
                        onClick={() => handleVote(question._id, -1)}
                        className="p-2 rounded-lg text-gray-500 hover:bg-gray-50"
                      >
                        <ArrowDown className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
                      <p className="text-gray-600 mb-4">{question.content}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {question.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <span className="font-medium">{question.author}</span>
                          <span className="mx-1">·</span>
                          <Clock className="w-4 h-4" />
                          {formatDate(question.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {question.answers ?? 0} answers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Ask Question Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-2xl w-full max-w-2xl"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Ask a Question</h2>
                    <button
                      onClick={() => setShowModal(false)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input
                          type="text"
                          required
                          placeholder="Be specific and imagine you're asking a question to another person"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          value={newTitle}
                          onChange={e => setNewTitle(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Body</label>
                        <textarea
                          required
                          rows={6}
                          placeholder="Include all the information someone would need to answer your question"
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          value={newContent}
                          onChange={e => setNewContent(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end gap-2 mt-6">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
                        >
                          {isSubmitting && (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          )}
                          {isSubmitting ? 'Posting...' : 'Post Question'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
      <FooterP/>

    </>
  );
}
