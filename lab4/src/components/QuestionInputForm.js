import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const QuestionInputForm = ({ addQuestion, questionCount }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correct, setCorrect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && correct && answers.every(a => a)) {
      const newQuestion = {
        id: questionCount + 1,
        question,
        answers,
        correctAnswer: correct
      };
      addQuestion(newQuestion);
      setQuestion('');
      setAnswers(['', '', '', '']);
      setCorrect('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4 p-3 bg-light rounded shadow">
      <h5>Add Question</h5>
      <Form.Control
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="mb-2"
      />
      {answers.map((opt, i) => (
        <Form.Control
          key={i}
          placeholder={`Option ${i + 1}`}
          value={opt}
          className="mb-2"
          onChange={(e) => {
            const newAns = [...answers];
            newAns[i] = e.target.value;
            setAnswers(newAns);
          }}
        />
      ))}
      <Form.Control
        placeholder="Correct Answer"
        value={correct}
        onChange={(e) => setCorrect(e.target.value)}
        className="mb-3"
      />
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default QuestionInputForm;
