/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectRoundNumber } from '../../reducers/roundNumber';
import { selectGameEnded } from '../../reducers/gameEnded';
import { setData } from '../../reducers/data';
import { setCurrentBird } from '../../reducers/currentBird';

import Header from '../Header';
import Spinner from '../Spinner';
import RandomBird from '../RandomBird';
import ContentContainer from '../ContentContainer';
import Result from '../Result';

import birdsData from '../../data/birdsData';

import randomizer from '../../utils/randomizer';

import './style.scss';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const round = useSelector(selectRoundNumber);
  const gameEnded = useSelector(selectGameEnded);
  const rndBird = randomizer(birdsData[round].length);

  useEffect(() => {
    dispatch(setData(birdsData));
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    console.log('Current bird is:', rndBird + 1, birdsData[round][rndBird].name);
    dispatch(setCurrentBird(rndBird));
  }, [dispatch, round]); // eslint-disable-line

  const Content = () =>
    !gameEnded ? (
      <>
        <RandomBird />
        <ContentContainer />
      </>
    ) : (
      <Result />
    );

  return (
    <div className="container">
      <Header />
      {loading ? <Spinner /> : <Content />}
    </div>
  );
};

export default App;
