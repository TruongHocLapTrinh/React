import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button, Form, Nav, Alert } from 'react-bootstrap';
import { nextQuestion, prevQuestion, lastQuestion, resetQuiz, selectAnswer } from '../redux/quizSlice';

const QuizComponent = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, selectedAnswers } = useSelector((state) => state.quiz);
  const currentQuestion = questions[currentQuestionIndex];
  const [view, setView] = useState("quiz");
  const [error, setError] = useState('');

  const handleSelectAnswer = (answer) => {
    dispatch(selectAnswer({ questionId: currentQuestion.id, answer }));
  };

  const handleJumpToQuestion = (index) => {
    dispatch({ type: 'quiz/jumpToQuestion', payload: index });
    setView("quiz");
  };

  const allQuestionsAnswered = () => questions.every(question => selectedAnswers[question.id]);

  const renderNavigation = () => (
    <Nav className="bg-light p-2 mb-4 shadow-sm rounded">
      <Nav.Item><Nav.Link href="#home">Home</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="#about">About</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="#news">News</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="#quiz">Quiz</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
    </Nav>
  );

  const renderHeader = (title) => (
    <Row className="mb-4">
      <Col>
        <div className="bg-secondary text-white p-3 text-center rounded">
          <h2 className="h4">{title}</h2>
        </div>
      </Col>
    </Row>
  );

  if (view === "result") {
    return (
      <Container>
        {renderNavigation()}
        {renderHeader("Quiz Results")}
        {questions.map((question, index) => {
          const isCorrect = selectedAnswers[question.id] === question.correctAnswer;
          return (
            <Card key={question.id} className={`mb-4 ${isCorrect ? "bg-success text-white" : "bg-danger text-white"} rounded shadow-sm`}>
              <Card.Header>Question {index + 1}</Card.Header>
              <Card.Body>
                <Card.Title>{question.question}</Card.Title>
                <Form>
                  {question.options.map((option) => (
                    <Form.Check
                      key={option}
                      type="radio"
                      id={`${question.id}-${option}`}
                      label={option}
                      checked={selectedAnswers[question.id] === option}
                      disabled
                      className="mb-2 text-start" // Align radio buttons to the left
                    />
                  ))}
                </Form>
                <div className="mt-3 text-start"> {/* Align text to the left */}
                  <strong>Your Answer:</strong> {selectedAnswers[question.id] || 'Not Answered'}
                  <br />
                  <strong>Correct Answer:</strong> {question.correctAnswer}
                </div>
              </Card.Body>
            </Card>
          );
        })}
        <Button variant="primary" style={{marginBottom: 20}} onClick={() => {
          dispatch(resetQuiz());
          setView("quiz");
        }}>Retake Quiz</Button>
      </Container>
    );
  }

  if (view === "review") {
    return (
      <Container>
        {renderNavigation()}
        {renderHeader("Quiz Review")}
        <Row className="mb-4">
          {questions.map((question, index) => (
            <Col key={index} xs={6} md={4} lg={2} className="mb-3">
              <Card
                className={`h-100 ${selectedAnswers[question.id] ? 'bg-success text-white' : 'bg-light'} shadow-sm rounded`}
                onClick={() => handleJumpToQuestion(index)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <Card.Title className="text-center">Question {index + 1}</Card.Title>
                  <Card.Text>{selectedAnswers[question.id] ? 'Answered' : 'Not Answered'}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <Button variant="secondary" className="mx-2" onClick={() => setView("quiz")}>Back to Quiz</Button>
          <Button variant="success" className="mx-2" onClick={() => setView("result")} disabled={!allQuestionsAnswered()}>Submit Quiz</Button>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {renderNavigation()}
      {renderHeader("JavaScript Quiz")}
      <Row className="justify-content-center">
        <Col md={8}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card className="mb-4 shadow-sm rounded">
            <Card.Header as="h5">Q.{currentQuestionIndex + 1} {currentQuestion.question}</Card.Header>
            <Card.Body>
              <Form>
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="mb-3 text-start"> {/* Align buttons to the left */}
                    <Button
                      variant="light"
                      onClick={() => handleSelectAnswer(option)}
                      style={{
                        backgroundColor: selectedAnswers[currentQuestion.id] === option ? '#d1e7dd' : '#f8f9fa',
                        border: selectedAnswers[currentQuestion.id] === option ? '2px solid #0f5132' : '2px solid #ced4da',
                        textAlign: 'left', // Align button text to the left
                        width: '100%',
                      }}
                    >
                      {option}
                    </Button>
                  </div>
                ))}
              </Form>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-between mt-3 mb-4">
            <Button variant="outline-primary" onClick={() => dispatch({ type: 'quiz/firstQuestion' })} disabled={currentQuestionIndex === 0}>First</Button>
            <Button variant="outline-secondary" onClick={() => dispatch(prevQuestion())} disabled={currentQuestionIndex === 0}>Previous</Button>
            <Button variant="outline-secondary" onClick={() => dispatch(nextQuestion())} disabled={currentQuestionIndex === questions.length - 1}>Next</Button>
            <Button variant="outline-primary" onClick={() => dispatch(lastQuestion())} disabled={currentQuestionIndex === questions.length - 1}>Last</Button>
          </div>

          <div className="d-flex justify-content-center">
            <Button variant="primary" className="mx-2" onClick={() => setView("review")}>Review Answers</Button>
            <Button variant="success" className="mx-2" onClick={() => {
              if (!allQuestionsAnswered()) {
                setError('Please answer all questions before submitting.');
              } else {
                setView("result");
              }
            }}>Submit</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizComponent;