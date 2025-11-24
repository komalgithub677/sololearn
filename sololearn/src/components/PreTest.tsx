import React, { useEffect, useState, useRef } from 'react';

type Props = {
  courseName: string;
  onComplete: (level: 'low' | 'medium' | 'hard', finalScore: number) => void;
};

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const PreTest: React.FC<Props> = ({ courseName, onComplete }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [timer, setTimer] = useState(60);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const quizRef = useRef<HTMLDivElement>(null);

  const correctMessages = [
    "✨ Brilliant! You're absolutely crushing this! 🚀",
    "🎯 Perfect shot! Your skills are on fire! 🔥",
    "💎 Flawless! You're a natural at this! ⭐",
    "🌟 Outstanding! Keep that momentum going! 💪",
    "🎉 Spectacular! You're mastering this like a pro! 🏆",
  ];

  const incorrectMessages = [
    "💡 Great attempt! Learning is a journey! 🌱",
    "🚀 No worries! Every expert was once a beginner! 📚",
    "⚡ Close one! You're getting stronger with each try! 💪",
    "🌈 Keep pushing! Success is just around the corner! 🎯",
    "🔥 Stay focused! Champions never give up! 🏆",
  ];

  // Fallback questions for when API fails
  const getFallbackQuestions = (courseName: string): Question[] => {
    const fallbackQuestions = {
      'Python': [
        {
          question: 'What is Python primarily used for?',
          options: ['Web Development & AI', 'Only Games', 'Hardware Design', 'Network Configuration'],
          answer: 'Web Development & AI'
        },
        {
          question: 'How do you print "Hello World" in Python?',
          options: ['print("Hello World")', 'echo "Hello World"', 'console.log("Hello World")', 'printf("Hello World")'],
          answer: 'print("Hello World")'
        },
        {
          question: 'What symbol starts a comment in Python?',
          options: ['//', '/*', '#', '--'],
          answer: '#'
        },
        {
          question: 'Which data type stores text in Python?',
          options: ['int', 'float', 'str', 'bool'],
          answer: 'str'
        },
        {
          question: 'How do you create a variable in Python?',
          options: ['var x = 5', 'let x = 5', 'x = 5', 'const x = 5'],
          answer: 'x = 5'
        }
      ],
      'JavaScript': [
        {
          question: 'What makes JavaScript special?',
          options: ['Runs in browsers and servers', 'Only for databases', 'Desktop apps only', 'Mobile apps only'],
          answer: 'Runs in browsers and servers'
        },
        {
          question: 'Modern way to declare a variable in JavaScript?',
          options: ['var x = 5', 'x = 5', 'variable x = 5', 'let x = 5'],
          answer: 'let x = 5'
        },
        {
          question: 'What does console.log() do?',
          options: ['Creates a file', 'Prints to console', 'Deletes data', 'Connects to database'],
          answer: 'Prints to console'
        },
        {
          question: 'Which operator checks strict equality?',
          options: ['==', '===', '=', '!='],
          answer: '==='
        },
        {
          question: 'What is an array in JavaScript?',
          options: ['A function', 'An ordered list of values', 'A single variable', 'A loop structure'],
          answer: 'An ordered list of values'
        }
      ],
      'React': [
        {
          question: 'What is React?',
          options: ['A JavaScript library for UIs', 'A database', 'A web server', 'A mobile app'],
          answer: 'A JavaScript library for UIs'
        },
        {
          question: 'What are React components?',
          options: ['Reusable UI pieces', 'Database tables', 'Server endpoints', 'CSS classes'],
          answer: 'Reusable UI pieces'
        },
        {
          question: 'How do you manage state in React?',
          options: ['useState hook', 'localStorage', 'global variables', 'cookies'],
          answer: 'useState hook'
        },
        {
          question: 'What is JSX in React?',
          options: ['JavaScript XML syntax', 'A database query', 'A server protocol', 'A CSS framework'],
          answer: 'JavaScript XML syntax'
        },
        {
          question: 'How do you pass data to components?',
          options: ['Through props', 'Through cookies', 'Through localStorage', 'Through global vars'],
          answer: 'Through props'
        }
      ]
    };

    return fallbackQuestions[courseName as keyof typeof fallbackQuestions] || fallbackQuestions['Python'];
  };

  useEffect(() => {
    // Simulate loading questions
    setLoadingQuestions(true);
    setTimeout(() => {
      const fallbackQuestions = getFallbackQuestions(courseName);
      setQuestions(fallbackQuestions);
      setLoadingQuestions(false);
    }, 2000);
  }, [courseName]);

  useEffect(() => {
    if (!selected && timer > 0 && started && !showResult) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0 && !selected && started && !showResult) {
      handleSelect('');
    }
  }, [timer, selected, started, showResult]);

  useEffect(() => setTimer(60), [current]);

  const handleBeginTest = () => {
    setStarted(true);
  };

  const handleSkipTest = () => {
    onComplete('low', 0);
  };

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    const currentQ = questions[current];
    const isCorrect = option === currentQ.answer;
    const newScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(newScore);
      setFeedback(correctMessages[Math.floor(Math.random() * correctMessages.length)]);
    } else {
      setFeedback(incorrectMessages[Math.floor(Math.random() * incorrectMessages.length)]);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected('');
        setFeedback('');
      } else {
        setShowResult(true);
        const level = newScore >= 4 ? 'hard' : newScore >= 2 ? 'medium' : 'low';
        setTimeout(() => onComplete(level, newScore), 3000);
      }
    }, 2000);
  };

  const formatTime = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;

  const getTimerColor = () => {
    if (timer > 40) return 'text-emerald-400';
    if (timer > 20) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreEmoji = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return '🏆';
    if (percentage >= 60) return '🥇';
    if (percentage >= 40) return '🥈';
    return '🥉';
  };

  if (loadingQuestions) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center space-y-8">
          <div className="relative">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-400 animate-spin animation-delay-150"></div>
              <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-400 animate-spin animation-delay-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl animate-pulse">🤖</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Crafting Your
              </span>
            </h2>
            <h3 className="text-3xl font-semibold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {courseName} Quiz
              </span>
            </h3>
            <div className="flex items-center justify-center space-x-2 text-blue-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-150"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-300"></div>
            </div>
            <p className="text-blue-200/80 text-lg">AI is generating personalized questions for you...</p>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800">
        <div className="text-center space-y-8 p-8">
          <div className="text-8xl animate-bounce">{getScoreEmoji()}</div>
          <h2 className="text-5xl font-bold text-white mb-4">
            Quiz Complete!
          </h2>
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="text-6xl font-bold text-white mb-2">{score}/{questions.length}</div>
            <div className="text-xl text-green-200">
              {score >= 4 ? 'Outstanding Performance!' : score >= 2 ? 'Good Job!' : 'Keep Learning!'}
            </div>
          </div>
          <div className="text-green-200">Redirecting to your personalized course...</div>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto p-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl text-center space-y-8">
            <div className="space-y-4">
              <div className="text-6xl animate-bounce">🧠</div>
              <h1 className="text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Pre-Assessment
                </span>
              </h1>
              <h2 className="text-3xl font-semibold text-white/90">
                {courseName} Edition
              </h2>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-white/80 text-lg leading-relaxed">
                Ready to discover your current skill level? This quick assessment will help us 
                personalize your learning journey for maximum impact! ⚡
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleBeginTest}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  Start Assessment
                </span>
              </button>
              
              <button
                onClick={handleSkipTest}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Skip for Now
              </button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400">⏱️</span>
                5 Minutes
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📋</span>
                5 Questions
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">🎯</span>
                Personalized
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 mb-4">
            <span className="text-2xl">⚡</span>
            <h1 className="text-2xl font-bold text-white">Knowledge Assessment</h1>
            <div className={`text-xl font-mono ${getTimerColor()} font-bold`}>
              {formatTime(timer)}
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="w-full bg-white/10 rounded-full h-3 mb-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          <p className="text-white/70">
            Question {current + 1} of {questions.length} • {Math.round(progress)}% Complete
          </p>
        </div>

        {/* Main quiz card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <div className="p-6 lg:p-8">
            {/* Question */}
            <div className="mb-6">
              <h2 className="text-xl lg:text-2xl font-bold text-white leading-relaxed">
                {currentQ.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, idx) => {
                const letter = String.fromCharCode(65 + idx);
                const isCorrect = selected && option === currentQ.answer;
                const isSelected = selected === option;
                const isWrong = selected && isSelected && !isCorrect;

                let buttonClass = "group w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg";
                
                if (!selected) {
                  buttonClass += " bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white";
                } else if (isCorrect) {
                  buttonClass += " bg-gradient-to-r from-green-500 to-emerald-600 border-green-400 text-white shadow-green-500/25 shadow-lg";
                } else if (isWrong) {
                  buttonClass += " bg-gradient-to-r from-red-500 to-pink-600 border-red-400 text-white shadow-red-500/25 shadow-lg";
                } else {
                  buttonClass += " bg-white/5 border-white/10 text-white/50";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(option)}
                    disabled={!!selected}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base transition-colors ${
                        !selected 
                          ? "bg-white/10 text-white group-hover:bg-white/20" 
                          : isCorrect 
                            ? "bg-white/20 text-white" 
                            : isWrong 
                              ? "bg-white/20 text-white"
                              : "bg-white/5 text-white/50"
                      }`}>
                        {letter}
                      </div>
                      <span className="text-base font-medium flex-1">{option}</span>
                      {selected && isCorrect && <span className="text-2xl">✅</span>}
                      {selected && isWrong && <span className="text-2xl">❌</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {feedback && (
              <div className="mb-6">
                <div className={`p-4 rounded-2xl border-2 ${
                  selected === currentQ.answer 
                    ? 'bg-green-500/10 border-green-400/50 text-green-100' 
                    : 'bg-yellow-500/10 border-yellow-400/50 text-yellow-100'
                }`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-1">
                      {selected === currentQ.answer ? '🎉' : '💪'}
                    </span>
                    <div>
                      <p className="font-semibold text-base">{feedback}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Score display */}
            <div className="flex justify-between items-center text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎯</span>
                <span>Score: {score}/{questions.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📊</span>
                <span>Progress: {Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreTest;