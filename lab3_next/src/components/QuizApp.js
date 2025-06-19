import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';
import '../App.css';

// const questions = [
//   {
//     id: 1,
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Paris"
//   },
//   {
//     id: 2,
//     question: "What is the largest planet in our solar system?",
//     options: ["Jupiter", "Saturn", "Mars", "Earth"],
//     answer: "Jupiter"
//   },
//   {
//     id: 3,
//     question: "Which language is used to style web pages?",
//     options: ["HTML", "jQuery", "CSS", "XML"],
//     answer: "CSS"
//   },
//   {
//     id: 4,
//     question: "Which company developed the React library?",
//     options: ["Google", "Microsoft", "Facebook", "Amazon"],
//     answer: "Facebook"
//   },
//   {
//     id: 5,
//     question: "Inside which HTML element do we put the JavaScript?",
//     options: ["<script>", "<js>", "<javascript>", "<code>"],
//     answer: "<script>"
//   }
// ];

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        },
        {
          id: 3,
          question: "Which language is used to style web pages?",
          options: ["HTML", "jQuery", "CSS", "XML"],
          answer: "CSS"
        },
        {
          id: 4,
          question: "Which company developed the React library?",
          options: ["Google", "Microsoft", "Facebook", "Amazon"],
          answer: "Facebook"
        },
        {
          id: 5,
          question: "Inside which HTML element do we put the JavaScript?",
          options: ["<script>", "<js>", "<javascript>", "<code>"],
          answer: "<script>"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedOption: ''
    };
  }

  handleOptionSelect = (option) => {
    this.setState({ selectedOption: option });
  };

  handleSubmit = () => {
    const { selectedOption, questions, currentQuestion, score } = this.state;
    // const { selectedOption, currentQuestion, score } = this.state;
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    const updatedScore = isCorrect ? score + 1 : score;

    if (currentQuestion + 1 < questions.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        score: updatedScore,
        selectedOption: ''
      });
    } else {
      this.setState({
        score: updatedScore,
        quizEnd: true
      });
    }
  };

  handleRestart = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedOption: ''
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd, selectedOption } = this.state;
    // const { currentQuestion, score, quizEnd, selectedOption } = this.state;

    return (
      <div className="quiz-container">
        <h1>🧠 Quiz Application</h1>
        {quizEnd ? (
          <Score score={score} total={questions.length} onRestart={this.handleRestart} />
        ) : (
          <Question
            data={questions[currentQuestion]}
            selectedOption={selectedOption}
            onSelect={this.handleOptionSelect}
            onSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default QuizApp;
