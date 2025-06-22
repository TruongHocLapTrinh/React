import React from 'react';
import { Button } from 'react-bootstrap';

const Score = ({ score, total, onRestart }) => (
  <div className="text-center">
    <h3>🎉 Quiz Completed</h3>
    <p>You scored {score} out of {total}</p>
    <Button onClick={onRestart}>Restart</Button>
  </div>
);

export default Score;
