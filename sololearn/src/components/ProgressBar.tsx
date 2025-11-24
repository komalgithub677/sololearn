import React, { useEffect, useState } from "react";
import axios from "axios";

interface Lesson {
  id: number;
  title: string;
  type: "text";
  content: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

interface Chapter {
  id: number;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

interface ProgressBarProps {
  userId: string;
  courseId: string;
  chapters: Chapter[];
  onLessonComplete: () => void; // Callback to recalculate progress
}

export default function ProgressBar({ userId, courseId, chapters, onLessonComplete }: ProgressBarProps) {
  const [progress, setProgress] = useState<number>(0);

  // Calculate progress based on completed lessons
  const calculateProgress = () => {
    const totalLessons = chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
    const completedLessons = chapters.reduce(
      (sum, chapter) => sum + chapter.lessons.filter((lesson) => lesson.isCompleted).length,
      0
    );
    const percentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    setProgress(Math.round(percentage));
  };

  // Fetch progress from backend
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/progress/${userId}/${courseId}`
        );
        const completedLessons = response.data.completedLessons || [];
        // Update chapters' isCompleted status
        chapters.forEach((chapter) => {
          chapter.lessons.forEach((lesson) => {
            lesson.isCompleted = completedLessons.some(
              (cl: { chapterId: number; lessonId: number }) =>
                cl.chapterId === chapter.id && cl.lessonId === lesson.id
            );
          });
        });
        calculateProgress();
      } catch (error) {
        console.error("Error fetching progress:", error);
        // Fallback to local calculation if backend fails
        calculateProgress();
      }
    };

    if (userId && courseId) {
      fetchProgress();
    } else {
      // Calculate progress locally if no userId
      calculateProgress();
    }
  }, [userId, courseId, chapters]);

  // Recalculate progress when lesson is completed
  useEffect(() => {
    calculateProgress();
  }, [chapters, onLessonComplete]);

  return (
    <div className="max-w-4xl mx-auto px-4 mb-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 ">
          Course Progress
        </h3>
        <span className="text-sm font-medium text-gray-900">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-300  rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
