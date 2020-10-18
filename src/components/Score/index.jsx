import React from 'react';
import { useSelector } from 'react-redux';

import { selectScore } from '../../reducers/scoreCounter';

import './style.scss';

const Score = () => {
  const score = useSelector(selectScore);

  return (
    <h5>
      Score: <span className="score">{score}</span>
    </h5>
  );
};

export default Score;
