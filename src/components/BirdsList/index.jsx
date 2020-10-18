import React from 'react';
import { useSelector } from 'react-redux';

import { selectData } from '../../reducers/data';
import { selectCurrentBird } from '../../reducers/currentBird';
import { selectRoundNumber } from '../../reducers/roundNumber';

import ListItem from '../ListItem';

import './style.scss';

const BirdsList = () => {
  const data = useSelector(selectData);
  const round = useSelector(selectRoundNumber);
  const currentBird = useSelector(selectCurrentBird);
  const list = data[round];
  const audio = document.createElement('audio');
  audio.volume = 0.2;

  const birdsList = list.map(({ id, name }, idx) => {
    const rightAnswer = idx === currentBird;
    return <ListItem key={id} {...{ idx, name, audio, rightAnswer }} />;
  });

  return (
    <div className="col-md-6">
      <ul className="list list-group">{birdsList}</ul>
    </div>
  );
};

export default BirdsList;
