import React from 'react';

const Question = ({ data, selectedOption, onSelect, onSubmit }) => {
  return (
    <div>
      <h2>Question {data.id}: {data.question}</h2>
      <ul>
        {data.options.map((option, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={() => onSelect(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={onSubmit} disabled={!selectedOption}>
        Submit
      </button>
    </div>
  );
};

export default Question;
