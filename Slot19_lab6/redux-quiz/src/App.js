import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from './redux/quizSlice';
import { Container, Button } from 'react-bootstrap';
import QuizComponent from './components/QuizComponent';

const App = () => {
  const dispatch = useDispatch();
  const { showResults } = useSelector((state) => state.quiz);

  return (
    <Container className="text-center mt-5">
      {showResults ? (
        <>
          <QuizComponent />
          <Button className="mt-4" variant="primary" onClick={() => dispatch(resetQuiz())}>
            Retake Quiz
          </Button>
        </>
      ) : (
        <QuizComponent />
      )}
    </Container>
  );
};

export default App;
