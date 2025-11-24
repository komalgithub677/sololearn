
import React, { useEffect, useState, useRef } from "react";
import PreTest from "./PreTest";
// Remove duplicate and unused imports (Moon, Sun)
import { CheckCircle2, ChevronDown, ChevronUp, Lock, X } from "lucide-react";
import axios from "axios";
import NavBarP from "./NavBarP";
import ProgressBar from "./ProgressBar";
import { WebcamCaptureLocal } from "./WebcamCaptureLocal";
import ScreenShield from "./ScreenShield";
import screenfull from 'screenfull';
import QuizTimer from './ui/QuizTimer'

// Match ProgressBar's expected types
type QuestionType = "mcq" | "fill";

interface QuizQuestion {
  question: string;
  options: string[]; // always required for ProgressBar compatibility
  correctAnswer: string;
  type?: QuestionType; // optional for compatibility
}

interface Lesson {
  id: number;
  title: string;
  type: "text";
  content: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  quiz: QuizQuestion[];
}

interface Chapter {
  id: number;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

interface CoursePlayerProps {
  courseId: string;
  courseData: {
    title: string;
    description: string;
    icon: React.ReactNode;
    chapters: Chapter[];
  };
}

function CoursePlayer({ courseId, courseData  }: CoursePlayerProps) {
  const [darkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const [userId, setUserId] = useState<string | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>(courseData.chapters);
  const [activeLesson, setActiveLesson] = useState<{
    chapterId: number;
    lesson: Lesson;
  } | null>(null);
  const [lessonCompleteTrigger, setLessonCompleteTrigger] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [deviceType, setDeviceType] = useState('');
const [quizResult, setQuizResult] = useState<{ score: number; total: number } | null>(null);

  const quizRef = useRef<HTMLDivElement>(null); // ✅ Quiz Modal Ref
  
  useEffect(() => {
    if (activeLesson && activeLesson.lesson.title.toLowerCase() === 'quiz') {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          alert('You switched tabs or minimized the window. Please stay focused on the quiz.');
        }
      };
  
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, [activeLesson]);
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isTablet = /Tablet|iPad/i.test(navigator.userAgent);
    const isDesktop = !isMobile && !isTablet;
  
    if (isMobile) {
      setDeviceType('Mobile');
    } else if (isTablet) {
      setDeviceType('Tablet');
    } else if (isDesktop) {
      setDeviceType('Desktop');
    }

    // Hide the banner after 5 seconds
  const timer = setTimeout(() => {
    setDeviceType('');
  }, 5000);

  // Cleanup timer on unmount
  return () => clearTimeout(timer);
  }, []);
  
  

  useEffect(() => {
    if (activeLesson && activeLesson.lesson.title.toLowerCase() === "quiz") {
      if (screenfull.isEnabled && quizRef.current) {
        screenfull.request(quizRef.current);
      }
      window.triggerWebcamSnapshot?.(true);
    }
  }, [activeLesson]);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (userId) {
      const fetchProgress = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/progress/${userId}/${courseId}`
          );
          const completedLessons = response.data.completedLessons || [];

          setChapters((prevChapters) => {
            const newChapters = prevChapters.map((chapter) => ({
              ...chapter,
              lessons: chapter.lessons.map((lesson) => ({
                ...lesson,
                isCompleted: completedLessons.some(
                  (cl: { chapterId: number; lessonId: number }) =>
                    cl.chapterId === chapter.id && cl.lessonId === lesson.id
                ),
              })),
            }));

            let foundFirstUnlocked = false;
            return newChapters.map((chapter) => ({
              ...chapter,
              lessons: chapter.lessons.map((lesson, lessonIndex) => {
                if (lesson.isCompleted) {
                  return { ...lesson, isLocked: false };
                }
                const prevLessonCompleted =
                  lessonIndex > 0
                    ? chapter.lessons[lessonIndex - 1]?.isCompleted
                    : newChapters
                      .slice(0, chapter.id - 1)
                      .pop()
                      ?.lessons.every((l) => l.isCompleted);

                if (
                  !foundFirstUnlocked &&
                  (lesson.id === 1 && chapter.id === 1)
                ) {
                  foundFirstUnlocked = true;
                  return { ...lesson, isLocked: false };
                }

                if (prevLessonCompleted && !foundFirstUnlocked) {
                  foundFirstUnlocked = true;
                  return { ...lesson, isLocked: false };
                }
                return { ...lesson, isLocked: true };
              }),
            }));
          });
        } catch (error) {
          console.error("Error fetching progress:", error);
        }
      };
      fetchProgress();
    }
  }, [userId, courseId, lessonCompleteTrigger]);

  const toggleChapter = (chapterId: number) => {
    setChapters((prev) =>
      prev.map((ch) =>
        ch.id === chapterId ? { ...ch, isExpanded: !ch.isExpanded } : ch
      )
    );
  };

  const QuizComponent = ({
    questions,
    onQuizComplete,
  }: {
    questions: QuizQuestion[];
    onQuizComplete: (score: number, total: number) => void;
  }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [showFeedback, setShowFeedback] = useState(false);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const handleMCQ = (answer: string) => {
      setUserAnswer(answer);
      setShowFeedback(true);
      if (answer === currentQuestion.correctAnswer) {
        setScore((prev) => prev + 1);
      }
      console.log(`MCQ answer selected: ${answer}, Correct: ${answer === currentQuestion.correctAnswer}`);
    };

    const handleFill = (e: React.FormEvent) => {
      e.preventDefault();
      setShowFeedback(true);
      if (
        userAnswer.trim().toLowerCase() ===
        currentQuestion.correctAnswer.trim().toLowerCase()
      ) {
        setScore((prev) => prev + 1);
      }
      console.log(`Fill answer submitted: ${userAnswer}, Correct: ${userAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase()}`);
    };

    const handleNextQuestion = () => {
      console.log(`Next question clicked, Current index: ${currentQuestionIndex}`);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setUserAnswer("");
        setShowFeedback(false);
      } else {
        console.log("Calling onQuizComplete");
        onQuizComplete(score, questions.length);// Simply call onQuizComplete to handle completion
        window.stopWebcamSnapshot?.();
      }
    };
return (
        <div className="mt-6 bg-white p-4 rounded-lg animate-fadeIn">
          <h3 className="text-xl font-semibold mb-4 text-blue-600 ">
            Quiz ({currentQuestionIndex + 1}/{questions.length})
          </h3>
          <p className="mb-4 font-medium text-gray-800 ">{currentQuestion.question}</p>
          {currentQuestion.type === "mcq" ? (
            <div className="grid gap-2">
              {currentQuestion.options!.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleMCQ(option)}
                  className={`p-3 rounded-lg text-left transition-all ${showFeedback && userAnswer === option
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-800  text-white "
                        : "bg-red-800  text-white "
                      : "bg-white  hover:bg-gray-500 hover:text-white  text-gray-600 "
                    }`}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <form onSubmit={handleFill} className="flex gap-2 items-center">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="p-2 rounded border   text-gray-800"
                disabled={showFeedback}
                placeholder="Your answer"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={showFeedback || !userAnswer}
              >
                Check
              </button>
            </form>
          )}
          {showFeedback && (
            <div className="mt-3">
              {userAnswer.trim().toLowerCase() ===
                currentQuestion.correctAnswer.trim().toLowerCase() ? (
                <span className="text-green-600  font-semibold">Correct!</span>
              ) : (
                <span className="text-red-600  font-semibold">
                  Incorrect. Correct answer: <code>{currentQuestion.correctAnswer}</code>
                </span>
              )}
            </div>
          )}
          {showFeedback && (
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentQuestionIndex < questions.length - 1
                ? "Next Question →"
                : "Finish Quiz"}
            </button>
          )}
          {currentQuestionIndex === questions.length - 1 && showFeedback && (
            <p className="mt-4 font-semibold text-blue-800 dark:text-blue-300">
              Your Score: {score}/{questions.length}
            </p>
          )}
        </div>
        );
  };

  const handleLessonComplete = async (chapterId: number, lessonId: number) => {
          console.log(`handleLessonComplete called for chapter ${chapterId}, lesson ${lessonId}`);
        const lessonToComplete = chapters
      .find((c) => c.id === chapterId)
      ?.lessons.find((l) => l.id === lessonId);

        if (lessonToComplete) {
      // Mark current lesson as completed
      const updatedChapters = chapters.map((chapter) => {
        if (chapter.id === chapterId) {
          return {
          ...chapter,
          lessons: chapter.lessons.map((lesson) =>
        lesson.id === lessonId ? {...lesson, isCompleted: true } : lesson
        ),
          };
        }
        return chapter;
      });

        // Unlock the next lesson (but don’t set it as active)
        let nextLessonToUnlock: {chapterId: number; lessonId: number } | null = null;
        let foundCompleted = false;

        for (let i = 0; i < updatedChapters.length; i++) {
        const chapter = updatedChapters[i];
        for (let j = 0; j < chapter.lessons.length; j++) {
          const lesson = chapter.lessons[j];
        if (lesson.id === lessonId && chapter.id === chapterId) {
          foundCompleted = true;
        if (j < chapter.lessons.length - 1) {
          nextLessonToUnlock = {
            chapterId: chapter.id,
            lessonId: chapter.lessons[j + 1].id,
          };
        break;
            } else if (i < updatedChapters.length - 1) {
          nextLessonToUnlock = {
            chapterId: updatedChapters[i + 1].id,
            lessonId: updatedChapters[i + 1].lessons[0].id,
          };
        break;
            }
          } else if (foundCompleted && lesson.isLocked) {
          nextLessonToUnlock = {
            chapterId: chapter.id,
            lessonId: lesson.id,
          };
        break;
          }
        }
        if (nextLessonToUnlock) break;
      }

        // Update chapters state with completion and unlocking
        if (nextLessonToUnlock) {
          setChapters((prev) =>
            prev.map((ch) => {
              if (ch.id === nextLessonToUnlock?.chapterId) {
                return {
                  ...ch,
                  lessons: ch.lessons.map((l) =>
                    l.id === nextLessonToUnlock?.lessonId
                      ? { ...l, isLocked: false }
                      : l
                  ),
                };
              }
              return ch;
            })
          );
      } else {
          setChapters(updatedChapters);
      }

        // Save progress to backend
        if (userId) {
        try {
          console.log("Sending progress to backend:", { userId, courseId, chapterId, lessonId });
        await axios.post("http://localhost:3000/api/progress", {
          userId,
          courseId,
          chapterId,
          lessonId,
          });
        console.log("Progress saved successfully");
        } catch (error) {
          console.error("Error saving progress:", error);
        }
      }

        // Close the modal to return to the course page
        console.log("Closing modal after lesson completion");
        setActiveLesson(null);
      setLessonCompleteTrigger((prev) => prev + 1);
    } else {
          console.log("Lesson not found, closing modal");
        setActiveLesson(null);
    }
  };

  const handleCloseQuiz = () => {
    if (screenfull.isEnabled && screenfull.isFullscreen) {
      screenfull.exit();
    }
    setActiveLesson(null);
    window.stopWebcamSnapshot?.();
  };

    return (
        <>
          <WebcamCaptureLocal />
          <ScreenShield>
          <NavBarP />
          <div className="min-h-screen transition-colors duration-300">
            <div className="flex items-center justify-between max-w-4xl mx-auto pt-8 pb-4 px-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-blue-800 ">
                {courseData.title}
              </h1>

            </div>

            <div className="max-w-4xl mx-auto px-4 mb-8">
              <div className="flex items-center gap-6 mb-4">
                <div className="flex-shrink-0">{courseData.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-blue-800">
                    {courseData.title}
                  </h2>
                  <p className="text-base text-gray-800">
                    {courseData.description}
                  </p>
                </div>
              </div>
            </div>

            {userId && (
              <ProgressBar
                userId={userId}
                courseId={courseId}
                chapters={chapters}
                onLessonComplete={() => setLessonCompleteTrigger((prev) => prev + 1)}
              />
            )}

            <div className="max-w-4xl mx-auto px-4 pb-16">
              {chapters.map((chapter) => {
                const chapterCompleted = chapter.lessons.every((l) => l.isCompleted);
                return (
                  <div
                    key={chapter.id}
                    className="mb-6 bg-white  rounded-xl shadow-lg transition-all"
                  >
                    <button
                      className="w-full flex items-center justify-between p-4 border-b dark:border-gray-700 rounded-t-xl focus:outline-none"
                      onClick={() => toggleChapter(chapter.id)}
                      aria-expanded={chapter.isExpanded}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold text-lg ${chapterCompleted ? "text-teal-600" : "text-blue-800"
                            }`}
                        >
                          {chapter.title}
                        </span>
                        {chapterCompleted && <CheckCircle2 className="w-5 h-5 text-teal-500" />}
                      </div>
                      {chapter.isExpanded ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {chapter.isExpanded && (
                      <div className="p-4 animate-fadeIn">
                        {chapter.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`flex items-center justify-between p-4 mb-2 rounded-lg transition-colors border border-gray-700 ${lesson.isLocked
                                ? "bg-gray-100  text-gray-800 cursor-not-allowed"
                                : "bg-gray-50 text-gray-800  cursor-pointer"
                              }`}
                            onClick={() => {
                              if (!lesson.isLocked) {
                                if (lesson.title.toLowerCase() === "quiz") {
                                  alert("Quiz is starting...");
                                }
                                setActiveLesson({ chapterId: chapter.id, lesson });
                              }
                            }}
                          >
                            <div>
                              <h3 className="font-medium text-gray-800 ">{lesson.title}</h3>
                              <p className="text-xs text-gray-500 ">{lesson.duration}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              {lesson.isLocked && <Lock className="w-5 h-5" />}
                              {lesson.isCompleted && (
                                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {activeLesson && (
              
             <div
             ref={quizRef}
             className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn"
             >
                <div className="bg-white p-8 rounded-2xl w-full max-w-2xl h-[85vh] overflow-y-auto shadow-2xl animate-slideUp transition-transform duration-500">

                  <button
                    onClick={() => {
                      handleCloseQuiz(); 
                      window.stopWebcamSnapshot?.();   //div ⬅ stop the interval & camera
                      setActiveLesson(null);           // ⬅ then close the quiz modal
                    }}
                    className="absolute top-4 right-4 p-2 hover:bg-blue-100 rounded-full"
                    aria-label="Close"
                  >

                    <X className="w-6 h-6" />
                  </button>
                  {activeLesson && activeLesson.lesson.title.toLowerCase() === "quiz" && (
                    <QuizTimer
                      initialTime={600} // 10 minutes
                      onTimeUp={() => {
                        alert('Time is up! Submitting the quiz.');
                        handleLessonComplete(activeLesson.chapterId, activeLesson.lesson.id);
                        setActiveLesson(null);
                        window.stopWebcamSnapshot?.();
                      }}
                    />
                  )}
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-300 text-center text-blue-800">{activeLesson.lesson.title}</h2>
                  <div className="prose  mb-6 text-gray-600">
                    {activeLesson.lesson.content.split("\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-800 ">{paragraph}</p>
                    ))}
                  </div>
                  {activeLesson.lesson.quiz.length > 0 ? (
                    <QuizComponent
                    key={activeLesson.lesson.id}
                    questions={activeLesson.lesson.quiz}
                    onQuizComplete={(score: number, total: number) => {
                      setQuizCompleted(true);
                      setQuizResult({ score, total });
                      handleLessonComplete(activeLesson.chapterId, activeLesson.lesson.id);
                      setActiveLesson(null); // Close the quiz modal
                    }}
                  />
                  ) : (
                    <button
                      onClick={() =>
                        handleLessonComplete(activeLesson.chapterId, activeLesson.lesson.id)
                      }
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Mark as Complete
                    </button>
                  )}
                </div>
              </div>
            )}
            {quizCompleted && quizResult && (
                  <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white p-8 rounded-2xl w-full max-w-md text-center shadow-2xl">
                      <h2 className="text-2xl font-bold text-blue-800 mb-4">Quiz Results</h2>
                      <p className="text-gray-800 mb-2">Your Score: {quizResult.score} / {quizResult.total}</p>
                      <p className="text-gray-600 mb-4">
                        {quizResult.score / quizResult.total >= 0.7
                          ? "Congratulations! You passed the quiz."
                          : "You can try again to improve your score."}
                      </p>
                      <button
                        onClick={() => setQuizCompleted(false)}
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
                {deviceType && (
  <div className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg animate-slideUp z-50">
    You are using a {deviceType} Device
  </div>
)}
          <style>{`
          .animate-fadeIn { animation: fadeIn 0.3s; }
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
          .animate-slideUp {
            animation: slideUp 0.5s ease-out;
          }
          
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
        </style>
          </div>
        </ScreenShield>
        </>
      

    );

  }

type MeWrapperProps = {
  courseData: {
    title: string;
    description: string;
    icon: React.ReactNode;
    chapters: Chapter[];
  };
  courseId: string;
};

export default function MeWrapper({ courseData, courseId }: MeWrapperProps) {
  const [preTestDone, setPreTestDone] = useState(false);

  if (!preTestDone) {
    return (
      <PreTest
        courseName={courseData.title}
        onComplete={(_lvl: unknown, _finalScore: unknown) => {
          setPreTestDone(true);
        }}
      />
    );
  }

  return <CoursePlayer courseId={courseId} courseData={courseData} />;
}
