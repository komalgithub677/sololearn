import React, { useState, useEffect } from "react";
import axios from "axios";

const BoosterQuiz = ({
  boosterId,
  question,
  onFetch,
  completed,
  onComplete,
  onBack,
}) => {
  const [fetching, setFetching] = useState(false);
  const [quizItems, setQuizItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const enterFullscreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      if (
        !document.fullscreenElement &&
        !document.webkitFullscreenElement &&
        !document.mozFullScreenElement &&
        !document.msFullscreenElement &&
        !submitted &&
        quizItems.length > 0
      ) {
        handleSubmit(userAnswers, true);
      }
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("mozfullscreenchange", onFullscreenChange);
    document.addEventListener("MSFullscreenChange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      document.removeEventListener("mozfullscreenchange", onFullscreenChange);
      document.removeEventListener("MSFullscreenChange", onFullscreenChange);
    };
  }, [submitted, quizItems, userAnswers]);

  const handleFetch = async () => {
    enterFullscreen();
    setFetching(true);
    await onFetch();
    setFetching(false);
  };

  const parseQuestions = (text) => {
    if (!text) return [];
    const blocks = text.trim().split(/\n(?=\d+\.)/);
    return blocks.map((block) => {
      const lines = block.trim().split("\n");
      const q = lines[0]?.replace(/^\d+\.\s*/, "") || "";
      const opts = lines.slice(1, 5).map((line) => line.replace(/^[a-d]\)\s*/, ""));
      const correct =
        lines
          .find((l) => l.toLowerCase().includes("correct answer"))
          ?.split(":")[1]
          ?.trim()
          ?.toLowerCase() || "";
      return { question: q, options: opts, correct };
    });
  };

  const handleSelect = (optKey) => {
    const nextAnswers = [...userAnswers];
    nextAnswers[currentIndex] = optKey;
    setUserAnswers(nextAnswers);

    if (currentIndex < quizItems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleSubmit(nextAnswers);
    }
  };

  const handleSubmit = async (answers, forced = false) => {
    let correctCount = 0;
    quizItems.forEach((q, idx) => {
      const ans = answers[idx];
      if (ans && ans === q.correct) correctCount++;
    });

    setScore(correctCount);
    setSubmitted(true);

    exitFullscreen();

    try {
      await axios.post("http://localhost:3000/api/booster-analytics", {
        boosterId,
        score: correctCount,
        total: quizItems.length,
        timestamp: new Date().toISOString(),
        forcedSubmit: forced,
      });
    } catch (err) {
      console.error("Failed to send booster analytics", err);
    }
  };

  return (
    <div
      className="max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-blue-300 shadow-lg text-gray-900 flex flex-col justify-between transition-all duration-300 hover:shadow-xl"
      style={{ minHeight: "500px" }}
    >
      <h2 className="text-center text-3xl font-extrabold text-blue-700 mb-6">
        🚀 Quiz Time!
      </h2>

      {!question && (
        <div className="flex-1 flex items-center justify-center">
          <button
            onClick={handleFetch}
            disabled={fetching}
            className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 ${
              fetching ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {fetching ? "Generating..." : "Generate AI Questions"}
          </button>
        </div>
      )}

      {question && !submitted && (
        <>
          {quizItems.length === 0 && setQuizItems(parseQuestions(question))}
          {quizItems.length > 0 && (
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="mb-3 text-sm text-gray-600">
                  Question {currentIndex + 1} of {quizItems.length}
                </p>
                <p className="mb-6 font-semibold text-lg">
                  {quizItems[currentIndex].question}
                </p>
                <div className="space-y-3">
                  {quizItems[currentIndex].options.map((opt, i) => {
                    const optKey = ["a", "b", "c", "d"][i];
                    return (
                      <button
                        key={i}
                        onClick={() => handleSelect(optKey)}
                        className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02]"
                      >
                        {optKey}) {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {submitted && score !== null && (
        <div className="mt-6 text-center space-y-4">
          <p className="text-xl font-bold text-blue-700">
            🎉 Your Score: {score}/{quizItems.length}
          </p>
          <button
            onClick={onComplete}
            disabled={completed}
            className={`w-full py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
              completed
                ? "bg-green-500 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {completed ? "✅ Completed" : "Mark as Complete"}
          </button>

          {/* Back to lesson button now at the very end */}
          <button
            onClick={onBack}
            className="w-full py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Lesson
          </button>
        </div>
      )}
    </div>
  );
};

export default BoosterQuiz;
