import React from 'react';
import { useSelector } from 'react-redux';

import { selectData } from '../../reducers/data';
import { selectRoundNumber } from '../../reducers/roundNumber';
import { selectSelectedBird } from '../../reducers/selectedBird';

import AudioPlayer from '../AudioPlayer';

import './style.scss';

const BirdInfo = () => {
  const selectedBird = useSelector(selectSelectedBird);
  const roundNumber = useSelector(selectRoundNumber);
  const data = useSelector(selectData);
  const selectedBirdData = data[roundNumber][selectedBird];

  return selectedBirdData ? (
    <div className="col-md-6">
      <div className="bird-info card">
        <div className="card-body">
          <img className="img-bird" src={selectedBirdData.image} alt="bird" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h5>{selectedBirdData.name}</h5>
            </li>
            <li className="list-group-item">
              <span>{selectedBirdData.species}</span>
            </li>
            <li className="list-group-item">
              <AudioPlayer audioSrc={selectedBirdData.audio} />
            </li>
          </ul>
        </div>
        <span className="bird-description">{selectedBirdData.description}</span>
      </div>
    </div>
  ) : (
    <div className="col-md-6">
      <div className="bird-info card">
        <p className="start-text">
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка.</span>
        </p>
      </div>
    </div>
  );
};

export default BirdInfo;
