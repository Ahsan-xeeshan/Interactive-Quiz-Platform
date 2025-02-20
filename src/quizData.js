// src/quizData.js
const quizData = [
  // Multiple-Choice Questions
  {
    id: 1,
    type: "mc",
    question: "Which planet is closest to the Sun?",
    options: {
      A: "Venus",
      B: "Mercury",
      C: "Earth",
      D: "Mars",
    },
    answer: "B",
  },
  {
    id: 2,
    type: "mc",
    question:
      "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    options: {
      A: "Stack",
      B: "Queue",
      C: "Tree",
      D: "Graph",
    },
    answer: "B",
  },
  {
    id: 3,
    type: "mc",
    question:
      "Which of the following is primarily used for structuring web pages?",
    options: {
      A: "Python",
      B: "Java",
      C: "HTML",
      D: "C++",
    },
    answer: "C",
  },
  {
    id: 4,
    type: "mc",
    question: "Which chemical symbol stands for Gold?",
    options: {
      A: "Au",
      B: "Gd",
      C: "Ag",
      D: "Pt",
    },
    answer: "A",
  },
  {
    id: 5,
    type: "mc",
    question:
      "Which of these processes is not typically involved in refining petroleum?",
    options: {
      A: "Fractional distillation",
      B: "Cracking",
      C: "Polymerization",
      D: "Filtration",
    },
    answer: "D",
  },

  // Integer-Type Questions
  {
    id: 6,
    type: "integer",
    question: "What is the value of 12 + 28?",
    answer: 40,
  },
  {
    id: 7,
    type: "integer",
    question: "How many states are there in the United States?",
    answer: 50,
  },
  {
    id: 8,
    type: "integer",
    question: "In which year was the Declaration of Independence signed?",
    answer: 1776,
  },
  {
    id: 9,
    type: "integer",
    question: "What is the value of pi rounded to the nearest integer?",
    answer: 3,
  },
  {
    id: 10,
    type: "integer",
    question:
      "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
    answer: 120,
  },
];

export default quizData;
