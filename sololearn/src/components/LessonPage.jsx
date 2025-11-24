import React from "react";

function LessonPage({ lesson, onBack, onGoToQuiz }) {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 bg-white rounded-3xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
        📘 {lesson.title}
      </h1>
      <p className="text-gray-800 text-lg mb-8">{lesson.description}</p>

      {/* Example Section */}
      <div className="bg-gradient-to-br from-gray-100 to-purple-50 border border-purple-100 p-6 rounded-xl shadow-inner mb-8">
        <h2 className="text-lg font-semibold text-purple-700 mb-2">🔍 Example:</h2>
        <pre className="bg-black text-green-400 text-sm p-4 rounded-lg overflow-auto shadow-md">
          {`<p>This is a paragraph.</p>`}
        </pre>
      </div>

      {/* Take Quiz Button */}
      <div className="text-center">
        <button
          onClick={onGoToQuiz}
          className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
        >
          🚀 Take Quiz
        </button>
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-medium underline transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default LessonPage;
