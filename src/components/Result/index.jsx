import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleGameEnded } from '../../reducers/gameEnded';
import { resetRound } from '../../reducers/roundNumber';
import { selectScore, resetScore } from '../../reducers/scoreCounter';

import chickenWin from '../../assets/img/chicken-win.png';
import './style.scss';

const Result = () => {
  const score = useSelector(selectScore);
  const dispatch = useDispatch();

  const startNewGame = () => {
    dispatch(toggleGameEnded());
    dispatch(resetRound());
    dispatch(resetScore());
  };

  const victory = (
    <div className="lead text-center">
      Вы прошли викторину и набрали <b>{score}</b> из <b>30</b> возможных баллов
    </div>
  );

  const flawlessVictory = (
    <div className="lead text-center">
      <p>
        Вы одержали победу и набрали максимальные <b>30</b> баллов
      </p>
      <img className="img-win" src={chickenWin} style={{ width: '200px' }} alt="winner" />
    </div>
  );

  return (
    <div className="jumbotron result">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      {score === 30 ? flawlessVictory : victory}
      <hr className="my-4" />
      <button type="button" className="btn btn-try-again" onClick={startNewGame}>
        Попробовать ещё раз!
      </button>
    </div>
  );
};

export default Result;
