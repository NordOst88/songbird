import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectRoundEnded } from '../../reducers/roundEnded';
import { selectData } from '../../reducers/data';
import { selectRoundNumber } from '../../reducers/roundNumber';
import { selectCurrentBird } from '../../reducers/currentBird';

import AudioPlayer from '../AudioPlayer';

import { HIDDEN_TEXT } from '../../constants';

import unknownBirdImage from '../../assets/img/unknown-bird.jpg';
import './style.scss';

const RandomBird = () => {
  const roundEnded = useSelector(selectRoundEnded);
  const data = useSelector(selectData);
  const round = useSelector(selectRoundNumber);
  const currentBird = useSelector(selectCurrentBird);
  const player = useRef();

  const { name, image, audio } = data[round][currentBird];

  useEffect(() => {
    player.current.audio.current.pause();
  }, [roundEnded]);

  return (
    <div className="bird jumbotron rounded">
      <img className="img-bird" src={roundEnded ? image : unknownBirdImage} alt="bird" />
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3>{roundEnded ? name : HIDDEN_TEXT}</h3>
          </li>
          <li className="list-group-item">
            <AudioPlayer audioSrc={audio} playerRef={player} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomBird;
