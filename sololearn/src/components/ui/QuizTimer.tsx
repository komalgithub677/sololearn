import React, { useEffect, useState } from "react";

interface QuizTimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

export default function QuizTimer({ initialTime, onTimeUp }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Stop timer when component unmounts
  }, [onTimeUp]);

  return (
    <div className="text-right font-semibold text-red-600 mb-4">
      Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
    </div>
  );
}
