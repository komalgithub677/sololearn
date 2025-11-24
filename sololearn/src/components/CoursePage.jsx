import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Brain, Code, Globe, Database, Layout } from 'lucide-react';
import Navbar from "./NavBarP";
import { Link } from "react-router-dom";
import { exploreCourses } from "../data/coursesData"; // ✅ Correct import
import ExploreCourseCard from './ExploreCourseCard';
import { BookOpen, Trophy } from "lucide-react";
import "./CoursePage.css"
import CourseCard from './CourseCardP';
import FooterP from './FooterP';

export default function Courses() {
  // ✅ Add this missing myCourses array
const myCourses = [
  {
    id: 1,
    title: "React Basics",
    description: "Learn the basics of React.",
    icon: <BookOpen />,  // ✅ JSX element (not string)
    bgColor: "bg-blue-500",
    progress: 75,        // ✅ Added missing properties
    status: "In Progress",
    lessons: 12,
    xp: 300,
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    description: "Deep dive into TypeScript.",
    icon: <Trophy />,
    bgColor: "bg-purple-500",
    progress: 100,
    status: "Finished",
    lessons: 20,
    xp: 500,
  }
];


  return (
    <>
    <Navbar/>
    <>
    <style>
      {`
      .aa{
        margin-top: 80px;
      }
      `}
    </style>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 aa">
      <section className="">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">My courses</h2>
        <div className="space-y-4">
          {myCourses.map(course => (
            <CourseCard key={course.id} course={course} />
            // ✅ Now myCourses is properly defined
          ))}
        </div>
      </section>

      <section className="margintop30">
        <h2 className="text-2xl font-bold text-Black mb-6 text-center">Explore our courses</h2>
        <div className="space-y-4">
          {exploreCourses.map(course => (
            <ExploreCourseCard key={course.id} course={course} />
          ))}
        </div>

      </section>
      <div>
      </div>
      
    </main>
    </>
    <FooterP/>
    </>
  );
}