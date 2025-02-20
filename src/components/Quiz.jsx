import React, { useState } from "react";
import { saveAttempt } from "../../db/IndexedDB";
import GoodJob from "../assets/good-job.gif";
import NoLimit from "../assets/limit.gif";
import TryAgain from "../assets/try-again.gif";
import quizData from "../quizData";
import AttemptHistory from "./AttemptHistory";
import Question from "./Question";
import Timer from "./Timer";
const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [localAttempts, setLocalAttempts] = useState([]);

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);

    // Delay to show feedback before moving on.
    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setQuizCompleted(true);
        const attempt = {
          score: score + (isCorrect ? 1 : 0),
          total: quizData.length,
        };
        setLocalAttempts((prev) => [...prev, attempt]);
        // Save attempt to IndexedDB (bonus feature)
        saveAttempt(attempt).catch(console.error);
      }
    }, 1000);
  };

  const handleTimeUp = () => {
    // Move to the next question automatically when time expires.
    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setQuizCompleted(true);
        const attempt = { score, total: quizData.length };
        setLocalAttempts((prev) => [...prev, attempt]);
        saveAttempt(attempt).catch(console.error);
      }
    }, 500);
  };

  const restartQuiz = () => {
    // Allow restart only if attempts are fewer than five.
    if (localAttempts.length < 5) {
      setCurrentQuestionIndex(0);
      setScore(0);
      setQuizCompleted(false);
    }
  };

  return (
    <div className="container mx-auto lg:flex lg:items-center rounded-md bg-white/30 backdrop-blur-md border border-white/40  px-6 py-3 text-purple-700">
      {!quizCompleted ? (
        <div className="w-full lg:w-[950px] relative bg-white mx-auto p-6 rounded-xl shadow-lg">
          <Timer
            key={currentQuestionIndex}
            initialTime={30}
            onTimeUp={handleTimeUp}
          />
          <Question
            questionData={quizData[currentQuestionIndex]}
            onAnswerSelected={handleAnswerSelected}
          />
          <p className="text-center mt-4 text-gray-600 font-medium">
            Question {currentQuestionIndex + 1} of {quizData.length}
          </p>
        </div>
      ) : (
        <div className="lg:w-[650px] lg:h-[400px] mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-4">
            Your score:{" "}
            <span className="font-bold">
              {" "}
              {score} / {quizData.length}
            </span>
          </p>
          {localAttempts.length < 5 ? (
            <>
              <button
                onClick={restartQuiz}
                className="px-5 py-2 cursor-pointer bg-purple-500 text-white text-2xl font-semibold hover:bg-purple-600 rounded-lg"
              >
                Restart Quiz
              </button>
              {score >= 7 ? (
                <div className="mt-5 h-36 w-[300px] mx-auto">
                  <img src={GoodJob} alt="Good Job" className="w-full h-full" />
                </div>
              ) : (
                <div className="mt-5 h-36 w-[250px] mx-auto">
                  <img
                    src={TryAgain}
                    alt="Good Job"
                    className="w-full h-full"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <p className="text-red-600 font-bold">
                Maximum attempts reached.
              </p>
              <div className="mt-5 h-36 w-[250px] mx-auto">
                <img src={NoLimit} alt="Good Job" className="w-full h-full" />
              </div>
            </>
          )}
        </div>
      )}
      <AttemptHistory localAttempts={localAttempts} />
    </div>
  );
};

export default Quiz;
