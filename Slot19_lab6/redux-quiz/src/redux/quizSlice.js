import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script"
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of these"],
      correctAnswer: "Storing numbers, dates, or other values"
    },
    {
      id: 3,
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Mozilla", "Microsoft", "Sun Microsystems"],
      correctAnswer: "Netscape"
    },
    {
      id: 4,
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/* */", "#", "<!-- -->"],
      correctAnswer: "//"
    },
    {
      id: 5,
      question: "What is the correct syntax for referring to an external script called 'xyz.js'?",
      options: ["<script href='xyz.js'>", "<script name='xyz.js'>", "<script src='xyz.js'>", "<script file='xyz.js'>"],
      correctAnswer: "<script src='xyz.js'>"
    },
    {
      id: 6,
      question: "What is React primarily used for?",
      options: ["Building mobile apps", "Building user interfaces", "Server-side processing", "Data analysis"],
      correctAnswer: "Building user interfaces"
    },
    {
      id: 7,
      question: "Which feature of React allows it to efficiently update the UI?",
      options: ["Real DOM", "Virtual DOM", "Shadow DOM", "Document Fragment"],
      correctAnswer: "Virtual DOM"
    },
    {
      id: 8,
      question: "JSX stands for...",
      options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Syntax", "Java Structured XML"],
      correctAnswer: "JavaScript XML"
    },
    {
      id: 9,
      question: "In JSX, how do you express JavaScript variables?",
      options: ["Inside curly braces", "Inside square brackets", "Inside single quotes", "Inside parentheses"],
      correctAnswer: "Inside curly braces"
    },
    {
      id: 10,
      question: "What is the correct syntax for embedding a JavaScript expression in JSX?",
      options: ["expression", "${expression}", "#expression", "{expression}"],
      correctAnswer: "{expression}"
    }
  ],
  currentQuestionIndex: 0,
  selectedAnswers: {},
  showResults: false,
  reviewMode: false
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    jumpToQuestion: (state, action) => {
      state.currentQuestionIndex = action.payload;
    },
    firstQuestion(state) {
      state.currentQuestionIndex = 0;
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    lastQuestion(state) {
      state.currentQuestionIndex = state.questions.length - 1;
    },
    selectAnswer(state, action) {
      const { questionId, answer } = action.payload;
      state.selectedAnswers[questionId] = answer;
    },
    submitQuiz(state) {
      state.showResults = true;
      state.reviewMode = true;
    },
    resetQuiz() {
      return initialState;
    },
  },
});

export const { firstQuestion, nextQuestion, prevQuestion, lastQuestion, selectAnswer, submitQuiz, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;