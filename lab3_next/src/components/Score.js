import React from 'react';

const Score = ({ score, total, onRestart }) => {
  return (
    <div>
      <h2>🎉 Quiz Completed!</h2>
      <p>You scored <strong>{score}</strong> out of <strong>{total}</strong>.</p>
      <button onClick={onRestart}>Try Again</button>
    </div>
  );
};

export default Score;
