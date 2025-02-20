import React, { useEffect, useState } from "react";

const Question = ({ questionData, onAnswerSelected }) => {
  const [selected, setSelected] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState(null);

  // Reset local state whenever the questionData changes.
  useEffect(() => {
    setSelected(null);
    setUserInput("");
    setFeedback(null);
  }, [questionData]);

  const handleMCAnswer = (option) => {
    setSelected(option);
    const isCorrect = option === questionData.answer;
    setFeedback(isCorrect ? "Correct!" : "Incorrect!");
    onAnswerSelected(isCorrect);
  };

  const handleIntegerSubmit = (e) => {
    e.preventDefault();
    // Convert input to number and check answer
    const answerNumber = Number(userInput);
    const isCorrect = answerNumber === questionData.answer;
    setFeedback(isCorrect ? "Correct!" : "Incorrect!");
    onAnswerSelected(isCorrect);
  };

  return (
    <div className="p-4 border rounded shadow mb-4 bg-white">
      <h3 className="text-lg font-semibold mb-2">{questionData.question}</h3>
      {questionData.type === "mc" ? (
        <ul className="grid md:grid-cols-2 gap-4">
          {Object.entries(questionData.options).map(([key, value]) => (
            <li key={key}>
              <button
                className="w-full py-2 px-3 border rounded-lg md:rounded-full bg-transparent hover:bg-purple-500 hover:text-white transition-colors cursor-pointer duration-200 disabled:opacity-50"
                onClick={() => handleMCAnswer(key)}
                disabled={selected !== null} // Prevent changing answer after selection
              >
                {key}. {value}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <form onSubmit={handleIntegerSubmit}>
          <input
            type="number"
            className="w-full py-2 px-4 border rounded [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance:textfield]"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your answer"
            required
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 cursor-pointer bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      )}
      {feedback && (
        <p
          className={`mt-3 lg:text-xl absolute left-5 bottom-6 lg:bottom-7 font-medium ${
            feedback === "Correct!" ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
};

export default Question;
