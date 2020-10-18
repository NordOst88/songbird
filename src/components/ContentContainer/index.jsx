import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectRoundEnded, toggleRoundEnded } from '../../reducers/roundEnded';
import { selectRoundNumber, increaseRound } from '../../reducers/roundNumber';
import { selectData } from '../../reducers/data';
import { toggleGameEnded } from '../../reducers/gameEnded';
import { resetSelectedBird } from '../../reducers/selectedBird';
import { resetPoints } from '../../reducers/scorePoints';

import BirdsList from '../BirdsList';
import BirdInfo from '../BirdInfo';

const ContentContainer = () => {
  const roundEnded = useSelector(selectRoundEnded);
  const roundNumber = useSelector(selectRoundNumber);
  const data = useSelector(selectData);
  const roundsLength = data.length - 1;
  const dispatch = useDispatch();

  const resetRoundStates = () => {
    dispatch(resetSelectedBird());
    dispatch(toggleRoundEnded());
    dispatch(resetPoints());
  };

  const handleNextRound = () => {
    dispatch(increaseRound());
    resetRoundStates();
  };

  const handleGameEnded = () => {
    dispatch(toggleGameEnded());
    resetRoundStates();
  };

  const nextLevelHandler = () => {
    if (roundEnded) {
      return roundNumber < roundsLength ? handleNextRound() : handleGameEnded();
    }
    return null;
  };

  return (
    <div className="row mb-2">
      <BirdsList />
      <BirdInfo />
      <button type="button" className={`btn ${roundEnded && 'active'}`} onClick={nextLevelHandler}>
        Следующий уровень
      </button>
    </div>
  );
};

export default ContentContainer;
