import React, { useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { QuizContext } from './QuizContext';

const Question = ({ questionData, selected, onSelect, onSubmit }) => {
  const { setAnswerStatus } = useContext(QuizContext);

  useEffect(() => {
    setAnswerStatus('');
  }, [questionData, setAnswerStatus]);

  return (
    <div>
      <h4>{questionData.id}. {questionData.question}</h4>
      <Form>
        {questionData.answers.map((ans, idx) => (
          <Form.Check
            type="radio"
            key={idx}
            name="option"
            label={ans}
            value={ans}
            checked={selected === ans}
            onChange={() => onSelect(ans)}
          />
        ))}
      </Form>
      <Button
        variant="primary"
        className="mt-3"
        onClick={onSubmit}
        disabled={!selected}
      >
        Submit
      </Button>
    </div>
  );
};

export default Question;
