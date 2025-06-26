import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import Question from './Question';
import Score from './Score';
import QuestionInputForm from './QuestionInputForm';
import { QuizContext } from './QuizContext';

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is React?',
      answers: ['A framework', 'A JS library', 'A DBMS', 'A language'],
      correctAnswer: 'A JS library',
    },
    {
      id: 2,
      question: 'What is JSX?',
      answers: ['XML file', 'Syntax extension', 'React method', 'Database'],
      correctAnswer: 'Syntax extension',
    }
  ]);

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answerStatus, setAnswerStatus] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setQuizQuestions([...questions]);
  }, [questions]);

  const handleSelect = (opt) => setSelected(opt);

  const handleSubmit = () => {
    const isCorrect = selected === quizQuestions[current].correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);
    setAnswerStatus(isCorrect ? '✅ Correct!' : '❌ Incorrect!');
    setTimeout(() => {
      if (current + 1 < quizQuestions.length) {
        setCurrent(current + 1);
        setSelected('');
        setAnswerStatus('');
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrent(0);
    setFinished(false);
    setSelected('');
    setAnswerStatus('');
    setQuizQuestions([...questions]);
  };

  const addQuestion = (q) => {
    setQuestions(prev => [...prev, q]);
  };

  return (
    <QuizContext.Provider value={{ answerStatus, setAnswerStatus }}>
      <Container className="mt-5">
        <Card className="shadow-lg p-4">
          <h2 className="text-center mb-4 text-primary"> Quiz</h2>
          <div className="d-flex justify-content-between mb-3">
            <Button variant="outline-primary" onClick={() => setShowForm(!showForm)}>
              {showForm ? '➖ Hide Form' : '➕ Add New Question'}
            </Button>
          </div>

          {showForm && (
            <Card className="p-3 mb-4 bg-light border">
              <QuestionInputForm addQuestion={addQuestion} questionCount={questions.length} />
            </Card>
          )}

          {finished ? (
            <Score score={score} total={quizQuestions.length} onRestart={handleRestart} />
          ) : (
            <Card className="p-4">
              {quizQuestions.length > 0 && (
                <Question
                  questionData={quizQuestions[current]}
                  selected={selected}
                  onSelect={handleSelect}
                  onSubmit={handleSubmit}
                />
              )}
              {answerStatus && (
                <Alert className="mt-3" variant={answerStatus.includes('✅') ? 'success' : 'danger'}>
                  {answerStatus}
                </Alert>
              )}
            </Card>
          )}
        </Card>
      </Container>
    </QuizContext.Provider>
  );
};

export default Quiz;