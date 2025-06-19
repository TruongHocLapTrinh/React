import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Initial state
const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  isCorrect: null,
};

// Reducer
function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const correctAnswer = state.questions[state.currentQuestion].answer;
      const isCorrect = action.payload === correctAnswer;
      return {
        ...state,
        selectedOption: action.payload,
        isCorrect: isCorrect,
        feedback: isCorrect
          ? "Correct! 🎉"
          : `Incorrect! The correct answer is ${correctAnswer}.`,
      };

    case "NEXT_QUESTION":
      const updateScore = state.isCorrect ? state.score + 1 : state.score;
      const nextQuestion = state.currentQuestion + 1;
      return {
        ...state,
        score: updateScore,
        currentQuestion: nextQuestion,
        selectedOption: "",
        feedback: "",
        isCorrect: null,
        showScore: nextQuestion === state.questions.length,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

// Component chính
function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    score,
    showScore,
    feedback,
    isCorrect,
  } = state;

  const [timer, setTimer] = useState(10);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("highScore")) || 0
  );

  // ⏱ Đồng hồ đếm ngược
  useEffect(() => {
    if (showScore) return;

    if (timer === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      setTimer(10);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, showScore]);

  // 🎯 Khi hết quiz → cập nhật điểm cao nhất
  useEffect(() => {
    if (showScore && score > highScore) {
      localStorage.setItem("highScore", score);
      setHighScore(score);
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) => {
    if (!selectedOption) {
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
    setTimer(10);
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimer(10);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>🏆 High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h5 className="mb-2 text-muted">
              Question {currentQuestion + 1}/{questions.length}
            </h5>
            <h4>{questions[currentQuestion].question}</h4>

            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option
                      ? isCorrect === true
                        ? "success"
                        : isCorrect === false && option === selectedOption
                        ? "danger"
                        : "outline-secondary"
                      : "outline-secondary"
                  }
                  className="m-2"
                  disabled={!!selectedOption}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Phản hồi đúng/sai */}
            {feedback && (
              <div className={`mt-3 ${isCorrect ? "text-success" : "text-danger"}`}>
                {isCorrect ? <FaCheckCircle /> : <FaTimesCircle />} {feedback}
              </div>
            )}

            {/* Đồng hồ đếm ngược */}
            <div className="mt-3">
              <strong>
                Time Left:{" "}
                <span className={timer < 5 ? "text-danger fw-bold" : ""}>
                  {timer}s
                </span>
              </strong>
            </div>

            <Button
              variant="primary"
              className="mt-3"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
