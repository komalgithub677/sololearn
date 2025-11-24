import { Trophy, BookOpen } from "lucide-react";
// import React, { JSX } from "react";
// Define the Course type
interface Course {
  id: number;
  title: string;
  progress: number;
  status: string;
  lessons: number;
  xp: number;
  icon: JSX.Element;
  bgColor: string;
}

export default function CourseCard({ course }: { course: Course }) {
    return (
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4">
        <div className="flex items-center space-x-4">
          <div className={`w-16 h-16 ${course.bgColor} rounded-lg flex items-center justify-center text-white font-bold`}>
            {course.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
            <p className="text-sm text-gray-500">{course.progress}% Complete</p>
            <div className="mt-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs ${
              course.status === 'Finished' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {course.status}
            </span>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <BookOpen className="h-3 w-3 mr-1" />
                <span>{course.lessons}</span>
              </div>
              <div className="flex items-center">
                <Trophy className="h-3 w-3 mr-1" />
                <span>{course.xp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
