"use client";

import { useState, useEffect } from "react";
import { quizQuestions } from "@/lib/quizQuestions";
import { getSantaReaction } from "@/lib/santaReactions";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResult from "@/components/QuizResult";
import Link from "next/link";

export default function ChristmasQuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return;
      }

      const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
      const stored: number[] = Array.isArray(parsed) ? parsed : [];
      if (!stored.includes(17)) {
        localStorage.setItem("completedDays", JSON.stringify([...stored, 17]));
      }
    } catch (error) {
      console.error("Failed to update completed days:", error);
    }
  }, []);

  const handleAnswer = (index: number) => {
    if (index === quizQuestions[current].correctIndex) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < quizQuestions.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className='min-h-screen mx-auto py-20 px-4 text-center relative bg-gradient-to-b from-red-700 via-red-800 to-red-900 '>
      <div className='absolute top-6 left-6 z-20'>
        <Link
          href='/magic'
          className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg'
        >
          <span className='group-hover:-translate-x-1 transition-transform'>
            ←
          </span>{" "}
          Back
        </Link>
      </div>

      <h1 className='text-3xl text-gray-200 font-bold mb-8'>
        🎄 Christmas Quiz Game
      </h1>

      {!finished ? (
        <QuizQuestion
          question={quizQuestions[current].question}
          options={quizQuestions[current].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <QuizResult
          score={score}
          total={quizQuestions.length}
          reaction={getSantaReaction(score, quizQuestions.length)}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}
