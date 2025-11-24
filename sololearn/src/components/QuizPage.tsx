import React from 'react';
import Quiz from './Quiz';

const QuizPage = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Audio Quiz</h1>
      <Quiz />
    </div>
  );
};

export default QuizPage;
