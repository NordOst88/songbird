import { configureStore } from '@reduxjs/toolkit';
import scoreCounter from './reducers/scoreCounter';
import scorePoints from './reducers/scorePoints';
import currentBird from './reducers/currentBird';
import round from './reducers/roundNumber';
import roundEnded from './reducers/roundEnded';
import gameEnded from './reducers/gameEnded';
import data from './reducers/data';
import selectedBird from './reducers/selectedBird';

const store = configureStore({
  reducer: {
    data,
    currentBird,
    selectedBird,
    scoreCounter,
    scorePoints,
    round,
    roundEnded,
    gameEnded,
  },
});

export default store;
