import { useState } from "react"
import { Container, Card, Button, Alert } from "react-bootstrap"
import QuestionComponent from "./QuestionComponent"

function Quiz() {
  const questions = [
    {
      id: 1,
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Lime"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Which country is famous for pasta?",
      options: ["France", "Spain", "Italy", "Greece"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "What type of pastry is used to make profiteroles?",
      options: ["Puff pastry", "Shortcrust pastry", "Choux pastry", "Filo pastry"],
      correctAnswer: 2,
    },
    // {
    //   id: 4,
    //   question: "Which spice is derived from the Crocus flower?",
    //   options: ["Turmeric", "Saffron", "Paprika", "Cardamom"],
    //   correctAnswer: 1,
    // },
    // {
    //   id: 5,
    //   question: "What is the main ingredient in hummus?",
    //   options: ["Lentils", "Chickpeas", "Black beans", "Kidney beans"],
    //   correctAnswer: 1,
    // },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers({
      ...answers,
      [questionId]: answerIndex,
    })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    return (
      <Container className="py-4">
        <Card className="mx-auto" style={{ maxWidth: "1000px" }}>
          <Card.Body className="text-center">
            <h2>Quiz Results</h2>
            <Alert variant={score >= 3 ? "success" : "warning"}>
              <h4>
                Your Score: {score} out of {questions.length}
              </h4>
              <p>
                {score >= 4
                  ? "Excellent! You're a food expert!"
                  : score >= 3
                    ? "Good job! You know your food well."
                    : "Keep learning about food and try again!"}
              </p>
            </Alert>
            <Button variant="primary" onClick={resetQuiz}>
              Take Quiz Again
            </Button>
          </Card.Body>
        </Card>
      </Container>
    )
  }

  return (
    <Container className="py-4">
      <Card className="mx-auto" style={{ maxWidth: "1000px" }}>
        <Card.Header>
          <h3>
            Food Quiz - Question {currentQuestion + 1} of {questions.length}
          </h3>
        </Card.Header>
        <Card.Body>
          <QuestionComponent
            question={questions[currentQuestion]}
            selectedAnswer={answers[questions[currentQuestion].id]}
            onAnswerSelect={handleAnswerSelect}
          />

          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={handlePrevious} disabled={currentQuestion === 0}>
              Previous
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={answers[questions[currentQuestion].id] === undefined}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Quiz
