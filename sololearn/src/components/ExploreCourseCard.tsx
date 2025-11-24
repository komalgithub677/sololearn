import { Link  } from 'react-router-dom';

import { Course } from '../data/coursesdata' // Ensure you're importing the correct type

interface ExploreCourseCardProps {
  course: Course;  // ✅ Correctly define it as Course type
}

export default function ExploreCourseCard({ course }: ExploreCourseCardProps) {
  return (
    <Link to={course.link}>
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4">
      <div className="flex items-center space-x-4">
        <div className={`w-14 h-14 ${course.bgColor} rounded-full flex items-center justify-center text-white font-bold shrink-0`}>
          {course.icon} {/* ✅ Ensure `icon` exists in the `Course` type */}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
