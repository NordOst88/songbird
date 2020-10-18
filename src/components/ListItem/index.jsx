import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectRoundEnded, toggleRoundEnded } from '../../reducers/roundEnded';
import { selectPoints, decreasePoints } from '../../reducers/scorePoints';
import { selectRoundNumber } from '../../reducers/roundNumber';
import { increaseScore } from '../../reducers/scoreCounter';
import { setSelectedBird } from '../../reducers/selectedBird';

import { INDICATOR_MODIFIERS } from '../../constants';

import winSound from '../../assets/audio/win.mp3';
import errorSound from '../../assets/audio/error.mp3';

import './style.scss';

const ListItem = ({ idx, name, audio, rightAnswer }) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const roundEnded = useSelector(selectRoundEnded);
  const scorePoints = useSelector(selectPoints);
  const round = useSelector(selectRoundNumber);

  useEffect(() => {
    setClicked(false);
  }, [round]);

  const handleRightAnswer = () => {
    audio.src = winSound;
    dispatch(increaseScore(scorePoints));
    dispatch(toggleRoundEnded());
  };

  const handleWrongAnswer = () => {
    audio.src = errorSound;
    dispatch(decreasePoints());
  };

  const selectBirdHandler = () => {
    dispatch(setSelectedBird(idx));
    if (!clicked && !roundEnded) {
      setClicked(true);
      const handleAnswer = rightAnswer ? handleRightAnswer : handleWrongAnswer;
      handleAnswer();
    }
    audio.play();
  };

  const indicatorModifier = rightAnswer ? INDICATOR_MODIFIERS.RIGHT : INDICATOR_MODIFIERS.WRONG;

  return (
    <li className="list-group-item" onClick={selectBirdHandler}>
      <span className={`answer-indicator ${clicked ? indicatorModifier : null}`} />
      {name}
    </li>
  );
};

export default ListItem;
