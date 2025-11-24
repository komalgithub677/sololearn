import React, { useState, useEffect } from "react";
import axios from "axios";

function DynamicQuizPage({ lesson, onBack, onComplete }) {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Generate quiz from backend on mount
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        setError("");
        
        // Fixed: Use lesson.title instead of undefined 'topic'
        const res = await axios.post("http://localhost:3000/api/generate-quiz", { 
          topic: lesson.title 
        });
        
        console.log("API Response:", res.data); // Debug log
        
        // Check if the response has the expected structure
        if (!res.data || !res.data.questions || !Array.isArray(res.data.questions)) {
          throw new Error("Invalid response format from server");
        }
        
        if (res.data.questions.length === 0) {
          throw new Error("No questions received from server");
        }
        
        const formatted = res.data.questions.map((q, index) => ({
          question: q.question || `Question ${index + 1}`,
          options: q.options || [],
          correctAnswer: q.answer || q.correctAnswer,
          type: q.type || "multiple-choice", // default type
          xp: q.xp || 10, // default XP
          placeholder: q.placeholder || "", // for code completion questions
        }));
        
        console.log("Formatted questions:", formatted); // Debug log
        
        setQuizQuestions(formatted);
      } catch (err) {
        console.error("Quiz fetch error:", err); // Debug log
        setError(err.response?.data?.message || err.message || "Failed to load quiz. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if lesson exists and has a title
    if (lesson && lesson.title) {
      fetchQuiz();
    } else {
      setError("No lesson provided");
      setLoading(false);
    }
  }, [lesson.title]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center animate-spin">
            <span className="text-purple-400 text-4xl">⚡</span>
          </div>
          <p className="text-white text-xl font-semibold mb-2">Generating your quiz...</p>
          <p className="text-white/70">This may take a few moments</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-red-400 text-4xl">⚠️</span>
          </div>
          <h2 className="text-red-300 text-xl font-semibold mb-4">Quiz Generation Failed</h2>
          <p className="text-red-200/80 text-sm mb-6 leading-relaxed">
            {error || "No quiz questions are available for this lesson."}
          </p>
          <button 
            onClick={onBack} 
            className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm font-medium"
          >
            ← Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (option) => {
    if (isCorrect !== null) return;
    setSelectedAnswer(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore((prev) => prev + currentQuestion.xp);
    }
  };

  const handleCodeCompletionSubmit = () => {
    if (isCorrect !== null) return;
    const correct = userAnswer.trim() === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setScore((prev) => prev + currentQuestion.xp);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setUserAnswer("");
      setIsCorrect(null);
      setShowFeedback(false);
    } else {
      onComplete(score);
    }
  };

  // Add safety check for currentQuestion
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
          <p className="text-red-300 text-center text-lg">Error: Question not found.</p>
          <button 
            onClick={onBack} 
            className="mt-6 px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            ← Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 min-h-screen flex flex-col">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            Quiz: {lesson.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <span className="text-lg">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span className="text-lg">Score: {score} XP</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <p className="text-white/70 text-center mt-2 text-sm">{Math.round(progress)}% Complete</p>
        </div>

        {/* Question Card */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
            {/* Question */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Question
              </div>
              <h2 className="text-2xl font-semibold text-white leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Multiple Choice */}
            {currentQuestion.type === "multiple-choice" && currentQuestion.options && currentQuestion.options.length > 0 && (
              <div className="space-y-4 mb-8">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                      selectedAnswer === option
                        ? isCorrect === true
                          ? "bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-2 border-green-400 shadow-lg shadow-green-400/25"
                          : isCorrect === false
                          ? "bg-gradient-to-r from-red-500/30 to-pink-500/30 border-2 border-red-400 shadow-lg shadow-red-400/25"
                          : "bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border-2 border-blue-400 shadow-lg shadow-blue-400/25"
                        : "bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
                        selectedAnswer === option ? 'border-white' : 'border-white/40'
                      }`}>
                        {selectedAnswer === option && (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <span className="text-white text-lg font-medium">{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Code Completion */}
            {currentQuestion.type === "code-completion" && currentQuestion.placeholder && (
              <div className="mb-8">
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-6 font-mono text-sm overflow-x-auto shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-white/60 text-xs">code-editor</span>
                  </div>
                  <pre className="text-green-400 leading-relaxed">
                    <code>{currentQuestion.placeholder.replace("___", userAnswer || "___")}</code>
                  </pre>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all duration-300"
                  />
                  <button
                    onClick={handleCodeCompletionSubmit}
                    disabled={!userAnswer.trim()}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:cursor-not-allowed shadow-lg"
                  >
                    Submit Answer
                  </button>
                </div>
              </div>
            )}

            {/* Feedback */}
            {showFeedback && isCorrect !== null && (
              <div className={`mb-8 p-6 rounded-2xl transition-all duration-500 transform ${
                isCorrect 
                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/50" 
                  : "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400/50"
              } animate-pulse`}>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    isCorrect ? "bg-green-500/30" : "bg-red-500/30"
                  }`}>
                    <span className="text-2xl">{isCorrect ? "✨" : "💡"}</span>
                  </div>
                  <div>
                    {isCorrect ? (
                      <div>
                        <p className="text-green-300 font-semibold text-lg">Excellent! 🎉</p>
                        <p className="text-green-200/80">+{currentQuestion.xp} XP earned</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-red-300 font-semibold text-lg">Not quite right</p>
                        <p className="text-red-200/80">
                          Correct answer: <strong className="text-white">{currentQuestion.correctAnswer}</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t border-white/20">
              <button 
                onClick={onBack} 
                className="px-6 py-3 text-white/80 hover:text-white transition-all duration-300 flex items-center space-x-2 hover:scale-105"
              >
                <span>←</span>
                <span>Back to Lesson</span>
              </button>
              
              <button
                onClick={handleNext}
                disabled={isCorrect === null}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform ${
                  isCorrect !== null
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:scale-105 shadow-lg shadow-purple-500/25"
                    : "bg-gray-600/50 text-white/50 cursor-not-allowed"
                }`}
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question →" : "Finish Quiz 🏁"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicQuizPage;