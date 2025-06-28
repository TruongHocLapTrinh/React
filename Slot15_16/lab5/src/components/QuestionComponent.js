import { Form } from "react-bootstrap"

function QuestionComponent({ question, selectedAnswer, onAnswerSelect }) {
  return (
    <div>
      <h4 className="mb-4">{question.question}</h4>
      <Form>
        {question.options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            id={`question-${question.id}-option-${index}`}
            name={`question-${question.id}`}
            label={option}
            checked={selectedAnswer === index}
            onChange={() => onAnswerSelect(question.id, index)}
            className="mb-2"
            style={{ fontSize: "1.2rem" }}
          />
        ))}
      </Form>
    </div>
  )
}

export default QuestionComponent
